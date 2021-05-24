package com.example.hunted.police;

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
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Build;
import android.os.Bundle;
import android.os.IBinder;
import android.os.Vibrator;
import android.util.Log;
import android.view.MenuItem;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.NetworkResponse;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.ServerError;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.HttpHeaderParser;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.hunted.R;
import com.example.hunted.repeatingtask.RepeatingTask;
import com.example.hunted.repeatingtask.RepeatingTaskName;
import com.example.hunted.repeatingtask.RepeatingTaskService;
import com.example.hunted.thieves.ThievesFragmentLocations;
import com.google.android.material.navigation.NavigationView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.osmdroid.util.GeoPoint;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;
import java.util.Map;
import java.util.Observable;
import java.util.Observer;

public class PoliceActivity extends AppCompatActivity implements Observer {
    private final int PING_MS = 3000;
    private final int PING_STATUS = 1000;
    private final int LOCATION_REQUEST_CODE = 1234;

    private PoliceAPIClass policeAPIClass;

    public String URL;
    private RequestQueue queue;

    private LocationManager locationManager;
    private LocationListener locationListener;
    private Location lastLoc;

    public String token;

    private boolean hasNotBound = true;
    private boolean isPlaying;

    private DrawerLayout drawerLayout;
    private Toolbar toolbar;
    private NavigationView navigationView;
    private JSONArray arrestableThieves;

    public String timeLeft;

    public int amountOfThieves;
    public int arrestedThieves;

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
        setContentView(R.layout.activity_police);

        isPlaying = false;

        URL = getString(R.string.url);
        queue = Volley.newRequestQueue(this);

        token = getIntent().getStringExtra("token");
        policeAPIClass = new PoliceAPIClass(this, token, URL);


        initLocation();

        //Set toolbar
        toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        toolbar.setBackgroundColor(getResources().getColor(R.color.police));

        //Set initial fragment
        setFragment(new PoliceFragmentLocations());
        setTitle(getString(R.string.label_police_locations));

        arrestableThieves = new JSONArray();
        drawerLayout = (DrawerLayout) findViewById(R.id.drawer_police);

        navigationView = (NavigationView) findViewById(R.id.nav_view);
        setupDrawerContent(navigationView);

    }

    private TextView timeText;

    @RequiresApi(api = Build.VERSION_CODES.O)
    public void getTime(TextView timeText) {
        this.timeText = timeText;
        policeAPIClass.getTime();
    }

    public void setTime() {
        timeText.setText(timeLeft);
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    public void getPlayfield() {
        policeAPIClass.getPlayfield(getCurrentFragment());
    }
    private TextView arrestedText;

    @RequiresApi(api = Build.VERSION_CODES.O)
    public void getJail() {
        policeAPIClass.getJail(getCurrentFragment());
    }

    public void getArrestedPlayers(TextView arrestedText) {
        this.arrestedText = arrestedText;
        policeAPIClass.getArrestedThievesCount();
    }

    public void setArrestedPlayers() {
        arrestedText.setText("Er zijn " + arrestedThieves + " van de " + amountOfThieves + " gearresteerd.");
    }

    private TextView lootText;

    public void setLootList(TextView lootList) {
        lootText = lootList;
        policeAPIClass.getStolenLoot();
    }

    public void getLootList() {
        if(loot.size() == 0) {
            lootText.setText("Nog geen buit ingenomen");
            return;
        }

        for(int i = 0; i < loot.size(); i++) {
            int number = i+1;
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
                            if(hasNotBound) {
                                doBindService();
                            }
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
                policeAPIClass.checkOutOfBounds();
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

        if (ActivityCompat.checkSelfPermission(PoliceActivity.this, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED) {
            locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 1000, 1, locationListener);
            locationManager.requestLocationUpdates(LocationManager.NETWORK_PROVIDER, 1000, 1, locationListener);
        } else {
            ActivityCompat.requestPermissions(PoliceActivity.this, new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, LOCATION_REQUEST_CODE);
        }
    }

    private void sendLocationToFragment(double locLat, double locLong, Fragment fragment){
        // Send location to PoliceFragmentLocations
        if(fragment instanceof PoliceFragmentLocations){
            PoliceFragmentLocations policeFragmentLocations = (PoliceFragmentLocations) fragment;
            policeFragmentLocations.updatePlayerOnMap(locLat, locLong);
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (ActivityCompat.checkSelfPermission(PoliceActivity.this, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED) {
            locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 1000, 1, locationListener);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        locationManager.removeUpdates(locationListener);
        doUnbindService();
    }

    public ArrayList<String> getArrestableThieves(){
        ArrayList<String> tempList = new ArrayList<>();
        if (arrestableThieves != null){
            for(int i = 0; i < arrestableThieves.length(); i++)
            {
                try {
                    JSONObject jsonObject = arrestableThieves.getJSONObject(i);
                    tempList.add(jsonObject.get("id").toString());
                } catch (JSONException e) {
                    e.printStackTrace();
                }

            }
        }
        return tempList;
    }

    // FRAGMENT CONTROLLING
    private void checkClosestThief(Object object){
        // Send data to ThievesFragmentScanner
        Fragment fragment = getCurrentFragment();
        if(fragment instanceof PoliceFragmentArrest){
            PoliceFragmentArrest policeFragmentArrest = (PoliceFragmentArrest) fragment;
            arrestableThieves = (JSONArray) object;
            policeFragmentArrest.giveArrestablePlayers(getArrestableThieves());
            policeFragmentArrest.setArrestButtonActive(shouldUpdateArrestButton());
        }
    }

    public void arrestThieves() {
        ArrayList<String> tempList = getArrestableThieves();
        if(tempList != null) {
            if(tempList.size() > 0) {
                for(int i = 0; i < tempList.size(); i++) {
                    policeAPIClass.ArrestThief(tempList.get(i));
                }
            }
        }
    }

    private void checkGameStatus(Object object){
        String string;
        try {
            string = object.toString();
            Log.d("object  tostring ", string);
            switch (string){
                case "\"not started\"":
                    isPlaying = false;
                    Log.d("status", "not started");
                    break;
                case "\"in progress\"":
                    isPlaying = true;
                    Log.d("status", "in progress");
                    break;
                case "\"stopped\"":
                    isPlaying = false;
                    Log.d("status", "stopped");
                    break;
            }
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    //sets the arrest button to active or non-active based on
    private boolean shouldUpdateArrestButton() {
        if (isPlaying){
            ArrayList<String> tempList = getArrestableThieves();
            if(tempList != null) {
                if(tempList.size() > 0) {
                    return true;
                }
            }
        }
        return false;
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

    private void setFragment(Fragment fragment){
        // Insert the fragment by replacing any existing fragment
        FragmentManager fragmentManager = getSupportFragmentManager();
        fragmentManager.beginTransaction().replace(R.id.mainContentPolice, fragment).commit();
    }

    // DRAWER LOADING

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
                fragmentClass = PoliceFragmentLocations.class;
                break;
            case R.id.nav_arrest:
                fragmentClass = PoliceFragmentArrest.class;
                break;
            case R.id.nav_score:
                fragmentClass = PoliceFragmentScore.class;
                break;
            default:
                fragmentClass = PoliceFragmentLocations.class;
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
    }



    // REGION SERVICE CODE

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

    @Override
    public void update(Observable observable, Object o) {
        RepeatingTask repeatingTask = (RepeatingTask) observable;
        switch (repeatingTask.getTask()){
            case CHECK_THIEF_NEARBY:
                if(o instanceof JSONArray){
                    runOnUiThread(() -> checkClosestThief(o));
                } else {
                    runOnUiThread(() -> Toast.makeText(PoliceActivity.this, "Error: " + o.toString(), Toast.LENGTH_SHORT).show());
                }
                break;
            case CHECK_GAME_STATUS:
                runOnUiThread(() -> checkGameStatus(o));
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

            //Add repeatingTask.
            RepeatingTask repeatingTask = new RepeatingTask(RepeatingTaskName.CHECK_THIEF_NEARBY, PING_MS);
            repeatingTask.addObserver(PoliceActivity.this);
            mBoundService.addRepeatingTask(repeatingTask);

            RepeatingTask statusTask = new RepeatingTask(RepeatingTaskName.CHECK_GAME_STATUS, PING_STATUS);
            statusTask.addObserver(PoliceActivity.this);
            mBoundService.addRepeatingTask(statusTask);

        }

        public void onServiceDisconnected(ComponentName className) {
            mBoundService = null;
        }
    };

    void doBindService() {
        if (bindService(new Intent(PoliceActivity.this, RepeatingTaskService.class), mConnection, Context.BIND_AUTO_CREATE)) {
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