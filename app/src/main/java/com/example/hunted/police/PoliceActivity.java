package com.example.hunted.police;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Bundle;
import android.os.IBinder;
import android.util.Log;
import android.view.MenuItem;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
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
import java.util.Observable;
import java.util.Observer;


public class PoliceActivity extends AppCompatActivity implements Observer {
    final int PING_MS = 1000;
    private final String URL = "http://192.168.1.87:3000";

    private DrawerLayout drawerLayout;
    private Toolbar toolbar;
    private NavigationView navigationView;
    private JSONArray arrestableThieves;

    private RequestQueue queue;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_police);
        queue = Volley.newRequestQueue(this);

        arrestThiefAPICall("605c8fb7d96441448cac6689");

        doBindService();

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
        Log.d("templist", tempList.toString());
        return tempList;
    }

    // FRAGMENT CONTROLLING
    private void checkClosestThief(Object object){
        // Send data to ThievesFragmentScanner
        Fragment fragment = getCurrentFragment();
        if(fragment instanceof PoliceFragmentArrest){
            PoliceFragmentArrest policeFragmentArrest = (PoliceFragmentArrest) fragment;
            Log.d("checkClosestThief_error", object.toString());
            arrestableThieves = (JSONArray) object;
            policeFragmentArrest.giveArrestablePlayers(getArrestableThieves());
            policeFragmentArrest.setArrestButtonActive(shouldUpdateArrestButton());
        }
    }

    public void arrestThieves() {
        Log.e("arrestThieves", "hij is gekomen bij arrestthieves gelukkig");
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
        final String getArrestedUrl = URL + "/player/arrest/" + thiefId;

        StringRequest stringRequest = new StringRequest(Request.Method.PUT, getArrestedUrl,
                response -> {
            Log.d("arrestResponse", "Boef is gearresteerd! - Response: " + response);
                }, error -> {
            Log.e("Error", error.toString());
        }
        );

        queue.add(stringRequest);
    }

    //if thief is close to police
    //police can arrest the thief with the touch of a button


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

    // DRAWER LOADING

    private void setupDrawerContent(NavigationView navigationView){
        navigationView.setNavigationItemSelectedListener(new NavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(MenuItem menuItem) {
                selectDrawerItem(menuItem);
                return true;
            }
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
                //for now a toast
                runOnUiThread(() -> checkClosestThief(o));
                break;
        }
    }

    // Clean service binding
    private boolean mShouldUnbind;
    private RepeatingTaskService mBoundService;

    private final ServiceConnection mConnection = new ServiceConnection() {
        public void onServiceConnected(ComponentName className, IBinder service) {
            mBoundService = ((RepeatingTaskService.LocalBinder)service).getService();

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