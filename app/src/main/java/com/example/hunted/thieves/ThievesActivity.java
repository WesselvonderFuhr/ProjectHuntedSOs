package com.example.hunted.thieves;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.core.app.ActivityCompat;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;

import android.Manifest;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Build;
import android.os.Bundle;
import android.os.IBinder;
import android.os.Vibrator;
import android.text.SpannableString;
import android.text.style.ForegroundColorSpan;
import android.util.Log;
import android.view.MenuItem;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.ClientError;
import com.android.volley.NetworkResponse;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.ServerError;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.HttpHeaderParser;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.hunted.R;
import com.example.hunted.police.PoliceActivity;
import com.example.hunted.repeatingtask.RepeatingTask;
import com.example.hunted.repeatingtask.RepeatingTaskName;
import com.example.hunted.repeatingtask.RepeatingTaskService;
import com.google.android.material.navigation.NavigationView;
import com.google.zxing.integration.android.IntentIntegrator;
import com.google.zxing.integration.android.IntentResult;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Observable;
import java.util.Observer;

public class ThievesActivity extends AppCompatActivity implements Observer {
    private final int LOCATION_REQUEST_CODE = 1234;

    private ThievesAPIClass thievesAPIClass;

    private String URL;
    private RequestQueue queue;

    private LocationManager locationManager;
    private LocationListener locationListener;

    private RepeatingTask arrestedRepeatingTask;

    public String token;

    private DrawerLayout drawerLayout;
    private Toolbar toolbar;
    private NavigationView navigationView;

    private boolean isArrested = false;

    public String timeLeft;
    private List<String> loot;

    public void setLoot(List<String> loot) {
        this.loot = loot;
    }

    public List<String> getLoot() {
        return loot;
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_thieves);

        URL = getString(R.string.url);
        queue = Volley.newRequestQueue(this);

        token = getIntent().getStringExtra("token");
        thievesAPIClass = new ThievesAPIClass(this, token, URL);

        initLocation();

        // Bind to RepeatingTaskService
        doBindService();

        //Set toolbar
        toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        toolbar.setBackgroundColor(getResources().getColor(R.color.thieves));

        //Set initial fragment
        setFragment(new ThievesFragmentLocations());
        setTitle(getString(R.string.label_thieves_locations));

        drawerLayout = (DrawerLayout) findViewById(R.id.drawer_thieves);

        navigationView = (NavigationView) findViewById(R.id.nav_view);
        setupDrawerContent(navigationView);
    }

    private TextView timeText;

    @RequiresApi(api = Build.VERSION_CODES.O)
    public void getTime(TextView timeText) {
        this.timeText = timeText;
        thievesAPIClass.getTime();
    }

    public void setTime() {
        timeText.setText(timeLeft);
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    public void getPlayfield() {
        thievesAPIClass.getPlayfield(getCurrentFragment());
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    public void getJail() {
        thievesAPIClass.getJail(getCurrentFragment());
    }

    private TextView lootText;

    public void setLootList(TextView lootList) {
        lootText = lootList;
        thievesAPIClass.getStolenLoot();
    }

    public void getLootList() {
        if(loot.size() == 0) {
            lootText.setText("Nog geen buit gestolen");
            return;
        }

        lootText.setText("");

        for(int i = 0; i < loot.size(); i++) {
            int number = i+1;
            Log.d("loot:", loot.get(i));
            lootText.setText(lootText.getText().toString() + number + ". " + loot.get(i) + "\n");
        }
    }

    private void initLocation() {
        locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
        locationListener =  new LocationListener() {

            @Override
            public void onLocationChanged(Location location) {
                double latitude = location.getLatitude();
                double longitude = location.getLongitude();

                sendLocationToFragment(latitude, longitude, getCurrentFragment());

                String setlocURL = URL + "player/location/";
                StringRequest stringRequest = new StringRequest(Request.Method.PUT, setlocURL,
                        response -> {
                    //leeg?
                        }, error -> {
                }) {
                    @Override
                    public Map<String, String> getHeaders() throws AuthFailureError {
                        Map<String, String> headers = new HashMap<>();
                        headers.put("Authorization", "Bearer " + token);
                        return headers;
                    }

                    @Override
                    public String getBodyContentType() {
                        return "application/json; charset=utf-8";
                    }

                    @Override
                    public byte[] getBody() {
                        String body = "{\"location\": {\"latitude\":" + latitude + ", \"longitude\":" + longitude + "}}";
                        return body.getBytes();
                    }
                };
                queue.add(stringRequest);
                thievesAPIClass.checkOutOfBounds();
            }

            @Override
            public void onProviderEnabled(@NonNull String provider) {

            }

            @Override
            public void onProviderDisabled(@NonNull String provider) {

            }

            @Override
            public void onStatusChanged(String provider, int status, Bundle extras) {

            }
        };

        if (ActivityCompat.checkSelfPermission(ThievesActivity.this, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED) {
            locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 1000, 0, locationListener);
            locationManager.requestLocationUpdates(LocationManager.NETWORK_PROVIDER, 1000, 0, locationListener);
        } else {
            ActivityCompat.requestPermissions(ThievesActivity.this, new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, LOCATION_REQUEST_CODE);
        }
    }

    private void sendLocationToFragment(double locLat, double locLong, Fragment fragment){
        // Send location to ThievesFragmentLocations
        if(fragment instanceof ThievesFragmentLocations){
            ThievesFragmentLocations thievesFragmentLocation = (ThievesFragmentLocations) fragment;
            thievesFragmentLocation.updatePlayerOnMap(locLat, locLong);
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (ActivityCompat.checkSelfPermission(ThievesActivity.this, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED) {
            locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0, 0, locationListener);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        locationManager.removeUpdates(locationListener);
        doUnbindService();
    }

    private void setupDrawerContent(NavigationView navigationView){
        navigationView.setNavigationItemSelectedListener(menuItem -> {
            selectDrawerItem(menuItem);
            return true;
        });
    }

    public void selectDrawerItem(MenuItem menuItem) {
        // Create a new fragment and specify the fragment to show based on nav item clicked
        Fragment fragment = null;
        Class fragmentClass;
        switch(menuItem.getItemId()) {
            case R.id.nav_locations:
                fragmentClass = ThievesFragmentLocations.class;
                break;
            case R.id.nav_scanner:
                fragmentClass = ThievesFragmentScanner.class;
                break;
            case R.id.nav_stolen:
                fragmentClass = ThievesFragmentLootScore.class;
                break;
            case R.id.nav_help:
                fragmentClass = ThievesFragmentHelp.class;
                break;
            default:
                fragmentClass = ThievesFragmentLocations.class;
        }

        try {
            fragment = (Fragment) fragmentClass.newInstance();
        } catch (Exception e) {
            e.printStackTrace();
        }

        setFragment(fragment);

        // Highlight the selected item has been done by NavigationView
        menuItem.setChecked(true);
        // Set action bar title
        setTitle(menuItem.getTitle());
        // Close the navigation drawer
        drawerLayout.closeDrawers();

        if(menuItem.getItemId() == R.id.nav_scanner){
            scanCode();
        }
    }

    private void setFragment(Fragment fragment){
        if (fragment instanceof ThievesFragmentLocations){
            Bundle bundle = new Bundle();
            bundle.putBoolean("isArrested", isArrested);
            fragment.setArguments(bundle);
        }
        // Insert the fragment by replacing any existing fragment
        FragmentManager fragmentManager = getSupportFragmentManager();
        fragmentManager.beginTransaction().replace(R.id.mainContentThieves, fragment).commit();
    }

    public Fragment getCurrentFragment(){
        FragmentManager fragmentManager = this.getSupportFragmentManager();
        List<Fragment> fragments = fragmentManager.getFragments();
        if(fragments.size() == 1){
            return fragments.get(0);
        }else {
            for (Fragment fragment : fragments) {
                if (fragment != null && fragment.isVisible())
                    return fragment;
            }
        }
        return null;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // The action bar home/up action should open or close the drawer.
        switch (item.getItemId()) {
            case android.R.id.home:
                drawerLayout.openDrawer(GravityCompat.START);
                return true;
        }
        return super.onOptionsItemSelected(item);
    }


    //region Scanner

    private void scanCode(){
        IntentIntegrator integrator = new IntentIntegrator(this);
        integrator.setDesiredBarcodeFormats(IntentIntegrator.QR_CODE);
        integrator.setPrompt("");
        integrator.setBeepEnabled(false);
        integrator.initiateScan();
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        IntentResult intentResult = IntentIntegrator.parseActivityResult(requestCode, resultCode, data);

        boolean success = false;
        String result;

        if(intentResult != null) {
            if(intentResult.getContents() == null) {
                result = getString(R.string.label_thieves_steal_stopped);
            } else {
                success = true;
                result = intentResult.getContents();
            }
        } else {
            result = getString(R.string.label_thieves_steal_retry);
            super.onActivityResult(requestCode, resultCode, data);
        }

        thievesAPIClass.steal(success, result, getCurrentFragment());
    }
    //endregion

    //region Arrested

    private void isArrested(){
        isArrested = true;

        //Get scanner button & disable
        MenuItem scanBtn = navigationView.getMenu().findItem(R.id.nav_scanner);
        scanBtn.setEnabled(false);

        //Change title color to make it more obvious
        SpannableString s = new SpannableString(scanBtn.getTitle());
        s.setSpan(new ForegroundColorSpan(getResources().getColor(R.color.teal_200)), 0, s.length(), 0);
        scanBtn.setTitle(s);

        //Update fragment to arrested.
        Fragment fragment = getCurrentFragment();
        if(fragment instanceof ThievesFragmentLocations){
            ThievesFragmentLocations thievesFragmentLocations = (ThievesFragmentLocations) fragment;
            thievesFragmentLocations.isArrested();
        }

        mBoundService.removeRepeatingTask(arrestedRepeatingTask);
    }

    //endregion

    //region Service code

    @Override
    public void update(Observable observable, Object o) {
        RepeatingTask repeatingTask = (RepeatingTask) observable;
        switch(repeatingTask.getTask()){
            case CHECK_ARRESTED:
                if(o instanceof String){
                    Toast.makeText(this, "Error: " + getResources().getString(Integer.parseInt(o.toString())), Toast.LENGTH_SHORT).show();
                } else if ((boolean)o) {
                    isArrested();
                }
                // method
                break;
        }
    }

    // Clean service binding
    private boolean mShouldUnbind;
    private RepeatingTaskService mBoundService;

    private final ServiceConnection mConnection = new ServiceConnection() {
        public void onServiceConnected(ComponentName className, IBinder service) {
            mBoundService = ((RepeatingTaskService.LocalBinder)service).getService();
            mBoundService.setToken(token);

            // Add task to the service.
            arrestedRepeatingTask = new RepeatingTask(RepeatingTaskName.CHECK_ARRESTED, 3000);
            arrestedRepeatingTask.addObserver(ThievesActivity.this);

            mBoundService.addRepeatingTask(arrestedRepeatingTask);
        }

        public void onServiceDisconnected(ComponentName className) {
            mBoundService = null;
        }
    };

    void doBindService() {
        if (bindService(new Intent(ThievesActivity.this, RepeatingTaskService.class), mConnection, Context.BIND_AUTO_CREATE)) {
            mShouldUnbind = true;
        }
    }

    void doUnbindService() {
        if (mShouldUnbind) {
            unbindService(mConnection);
            mShouldUnbind = false;
        }
    }

    //endregion

}