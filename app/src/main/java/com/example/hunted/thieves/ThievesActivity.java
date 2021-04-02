package com.example.hunted.thieves;

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
import android.graphics.Color;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.os.IBinder;
import android.text.SpannableString;
import android.text.style.ForegroundColorSpan;
import android.view.MenuItem;
import android.widget.Toast;

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

    public String URL;
    private RequestQueue queue;

    public String ID;

    private DrawerLayout drawerLayout;
    private Toolbar toolbar;
    private NavigationView navigationView;

    private boolean isArrested = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_thieves);
        URL = getString(R.string.url);

        queue = Volley.newRequestQueue(this);

        ID = getIntent().getStringExtra("ID");

        // Bind to RepeatingTaskService
        doBindService();

        //Set toolbar
        toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        toolbar.setBackgroundColor(getResources().getColor(R.color.thieves));

        //Set initial fragment
        setFragment(new ThievesFragmentLocations());
        setTitle("Locaties");

        drawerLayout = (DrawerLayout) findViewById(R.id.drawer_thieves);

        navigationView = (NavigationView) findViewById(R.id.nav_view);
        setupDrawerContent(navigationView);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
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
        // Insert the fragment by replacing any existing fragment
        FragmentManager fragmentManager = getSupportFragmentManager();
        fragmentManager.beginTransaction().replace(R.id.mainContentThieves, fragment).commit();
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
                result = "Gestopt met stelen!";
            } else {
                success = true;
                result = intentResult.getContents();
            }
        } else {
            result = "Stelen is mislukt, probeer opnieuw.";
            super.onActivityResult(requestCode, resultCode, data);
        }

        if(success){
            //http://localhost:3000/player/605c8faed96441448cac6688/stolen/605cd906a13024000496f2ff
            final String postStolenLoot = URL + "player/" + ID + "/stolen/" + result;
            StringRequest stringRequest = new StringRequest(Request.Method.POST, postStolenLoot,
                    response -> sendDataToFragmentScanner(true, response),

                    error -> {
                        NetworkResponse response = error.networkResponse;
                        if (error instanceof ServerError && response != null) {
                            try {
                                String res = new String(response.data, HttpHeaderParser.parseCharset(response.headers, "utf-8"));
                                sendDataToFragmentScanner(false, res);
                            } catch (Exception e) {
                                sendDataToFragmentScanner(false, "Er ging iets mis.");
                            }
                        }
                    });

            queue.add(stringRequest);
        } else {
            sendDataToFragmentScanner(false, result);
        }
    }

    private void sendDataToFragmentScanner(boolean success, String result){
        // Send data to ThievesFragmentScanner
        Fragment fragment = getCurrentFragment();
        if(fragment instanceof ThievesFragmentScanner){
            ThievesFragmentScanner thievesFragmentScanner = (ThievesFragmentScanner) fragment;
            thievesFragmentScanner.setResult(success, result);
        }
    }

    //endregion

    //region Service code

    @Override
    public void update(Observable observable, Object o) {
        //runOnUiThread(() -> Toast.makeText(ThievesActivity.this, "Observable update: " + o.toString(), Toast.LENGTH_SHORT).show());
        RepeatingTask repeatingTask = (RepeatingTask) observable;
        switch(repeatingTask.getTask()){
            case CHECK_ARRESTED:
                if ((boolean)o) {
                    setArrested((boolean) o);
                }
                // method
                break;
        }
    }

    private void setArrested(boolean isArrested){
        //Get scanner button
        MenuItem scanBtn = navigationView.getMenu().findItem(R.id.nav_scanner);

        //Disable it cuz caught (lol noob)
        scanBtn.setEnabled(false);

        //Change title color to make it more obvious
        SpannableString s = new SpannableString(scanBtn.getTitle());
        s.setSpan(new ForegroundColorSpan(getResources().getColor(R.color.teal_200)), 0, s.length(), 0);
        scanBtn.setTitle(s);

        //Show is arrested text
        Fragment fragment = getCurrentFragment();
        if(fragment instanceof ThievesFragmentLocations){
            ThievesFragmentLocations thievesFragmentLocations = (ThievesFragmentLocations) fragment;
            thievesFragmentLocations.setTextBox("Je bent gepakt!");
        }
    }

    // Clean service binding
    private boolean mShouldUnbind;
    private RepeatingTaskService mBoundService;

    private final ServiceConnection mConnection = new ServiceConnection() {
        public void onServiceConnected(ComponentName className, IBinder service) {
            mBoundService = ((RepeatingTaskService.LocalBinder)service).getService();

            // Add task to the service.
            RepeatingTask repeatingTask = new RepeatingTask(RepeatingTaskName.CHECK_ARRESTED, 3000);
            repeatingTask.addObserver(ThievesActivity.this);

            mBoundService.addRepeatingTask(repeatingTask);
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