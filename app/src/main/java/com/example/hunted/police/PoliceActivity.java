package com.example.hunted.police;

import androidx.annotation.NonNull;
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
import android.os.Bundle;
import android.os.IBinder;
import android.os.Vibrator;
import android.util.Log;
import android.view.MenuItem;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.hunted.R;
import com.example.hunted.repeatingtask.RepeatingTask;
import com.example.hunted.repeatingtask.RepeatingTaskName;
import com.example.hunted.repeatingtask.RepeatingTaskService;
import com.google.android.material.navigation.NavigationView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;
import java.util.Map;
import java.util.Observable;
import java.util.Observer;

public class PoliceActivity extends AppCompatActivity implements Observer {
    private final int PING_MS = 1000;
    private final int LOCATION_REQUEST_CODE = 1234;

    public String URL;
    private RequestQueue queue;

    private LocationManager locationManager;
    private LocationListener locationListener;

    public String ID;

    private boolean hasNotBound = true;

    private DrawerLayout drawerLayout;
    private Toolbar toolbar;
    private NavigationView navigationView;
    private JSONArray arrestableThieves;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_police);

        URL = getString(R.string.url);
        queue = Volley.newRequestQueue(this);

        ID = getIntent().getStringExtra("ID");

        initLocation();

        //Set toolbar
        toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        toolbar.setBackgroundColor(getResources().getColor(R.color.police));

        //Set initial fragment
        setFragment(new PoliceFragmentLocations());
        setTitle("Locaties");

        arrestableThieves = new JSONArray();
        drawerLayout = (DrawerLayout) findViewById(R.id.drawer_police);

        navigationView = (NavigationView) findViewById(R.id.nav_view);
        setupDrawerContent(navigationView);
//        checkOutOfBounds();
    }

    private void initLocation() {
        locationManager = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
        locationListener =  new LocationListener() {

            @Override
            public void onLocationChanged(Location location) {
                double latitude = location.getLatitude();
                double longitude = location.getLongitude();

                String setlocURL = URL + "player/location/" + ID;
                StringRequest stringRequest = new StringRequest(Request.Method.PUT, setlocURL,
                        response -> {
                            if(hasNotBound) {
                                doBindService();
                            }
                        }, error -> {
                }) {

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
            locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 1000, 0, locationListener);
        } else {
            ActivityCompat.requestPermissions(PoliceActivity.this, new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, LOCATION_REQUEST_CODE);
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (ActivityCompat.checkSelfPermission(PoliceActivity.this, Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED) {
            locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER, 0, 0, locationListener);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
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
                    arrestThiefAPICall(tempList.get(i));
                }
            }
        }
    }

    private void arrestThiefAPICall(String thiefId) {
        final String getArrestedUrl = URL + "player/arrest/" + thiefId;

        StringRequest stringRequest = new StringRequest(Request.Method.PUT, getArrestedUrl,
                response -> {
                    Toast.makeText(PoliceActivity.this, "De boef is gearresteerd!", Toast.LENGTH_SHORT).show();
                }, error -> {
                Toast.makeText(PoliceActivity.this, "De boef is weg gekomen!", Toast.LENGTH_SHORT).show();
            }
        );

        queue.add(stringRequest);
    }

    //sets the arrest button to active or non-active based on
    private boolean shouldUpdateArrestButton() {
        ArrayList<String> tempList = getArrestableThieves();
        if(tempList != null) {
            if(tempList.size() > 0) {
                return true;
            }
        }
        return false;
    }


    public Fragment getCurrentFragment(){
        FragmentManager fragmentManager = this.getSupportFragmentManager();
        List<Fragment> fragments = fragmentManager.getFragments();
        for(Fragment fragment : fragments){
            if(fragment != null && fragment.isVisible())
                return fragment;
        }
        return null;
    }

    private void setFragment(Fragment fragment){
        // Insert the fragment by replacing any existing fragment
        FragmentManager fragmentManager = getSupportFragmentManager();
        fragmentManager.beginTransaction().replace(R.id.mainContentPolice, fragment).commit();
    }

    private void checkOutOfBounds(){
        String requestURL = URL + "player/outofbounds/" + ID;
        Log.d("checkOutOfBounds requestURL: ", requestURL);
        StringRequest request = new StringRequest(Request.Method.GET, requestURL, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                Toast.makeText(PoliceActivity.this, response.toString(), Toast.LENGTH_LONG).show();
                Log.d("checkOutOfBounds response: ", response.toString());
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.d("error", error.toString());
            }
        });
        queue.add(request);
    }

    private void vibrateOutOfPlayingField(){
        Vibrator v = (Vibrator) getSystemService(this.VIBRATOR_SERVICE);

        Toast.makeText(this, "Keer terug naar het speelgebied!", Toast.LENGTH_LONG).show();
        v.vibrate(3000);
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
        }
    }

    // Clean service binding
    private boolean mShouldUnbind;
    private RepeatingTaskService mBoundService;

    private final ServiceConnection mConnection = new ServiceConnection() {
        public void onServiceConnected(ComponentName className, IBinder service) {
            mBoundService = ((RepeatingTaskService.LocalBinder)service).getService();
            mBoundService.setID(ID);

            //Add repeatingTask.
            RepeatingTask repeatingTask = new RepeatingTask(RepeatingTaskName.CHECK_THIEF_NEARBY, PING_MS);
            repeatingTask.addObserver(PoliceActivity.this);
            mBoundService.addRepeatingTask(repeatingTask);
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