package com.example.hunted;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;

import android.Manifest;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.content.pm.PackageManager;
import android.location.LocationManager;
import android.os.Bundle;
import android.os.Handler;
import android.os.IBinder;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
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
import com.example.hunted.police.PoliceActivity;
import com.example.hunted.repeatingtask.RepeatingTask;
import com.example.hunted.repeatingtask.RepeatingTaskName;
import com.example.hunted.repeatingtask.RepeatingTaskService;
import com.example.hunted.thieves.ThievesActivity;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Observable;
import java.util.Observer;
import java.util.Timer;
import java.util.TimerTask;

//First activity screen with police/thieves choice
public class MainActivity extends AppCompatActivity implements Observer {
    private final int LOCATION_REQUEST_CODE = 1234;
    private final int PING_MS = 3000;
    private final int PING_STATUS = 1000;

    public String URL;
    public RequestQueue queue;

    public boolean gameStarted;

    public String token;
    public String role;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        URL = getString(R.string.url);
        queue = Volley.newRequestQueue(this);

        getTrackPermission();

        setFragment(new LoginFragment());
    }

    public void StartGame() {
        setFragment(new WaitingScreen());
        Timer timer = new Timer();
        int begin = 0;
        int timeInterval = 1000;
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                if(gameStarted){
                    timer.cancel();
                    doUnbindService();
                    openGameActivity(token, role);
                }
            }
        }, begin, timeInterval);
    }

    public void openGameActivity(String token, String role){
        Intent intent = null;
        Log.d("role", role);
        if(role.equals("Agent")) {
            intent = new Intent(getApplicationContext(), PoliceActivity.class);
        } else if(role.equals("Boef")) {
            intent = new Intent(getApplicationContext(), ThievesActivity.class);
        }
        intent.putExtra("token", token.replaceAll("\"",""));
        startActivity(intent);
    }


    @Override
    public void update(Observable observable, Object o) {
        RepeatingTask repeatingTask = (RepeatingTask) observable;
        switch (repeatingTask.getTask()){
            case CHECK_GAME_STATUS:
                runOnUiThread(() -> checkGameStatus(o));
                break;
        }
    }

    private void checkGameStatus(Object object) {
        String string;
        try {
            string = object.toString();
            switch (string) {
                case "\"not started\"":
                    gameStarted = false;
                    Log.d("status", "not started");
                    break;
                case "\"in progress\"":
                    gameStarted = true;
                    Log.d("status", "in progress");
                    break;
                case "\"stopped\"":
                    gameStarted = false;
                    Log.d("status", "stopped");
                    break;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void setFragment(Fragment fragment){
        // Insert the fragment by replacing any existing fragment
        FragmentManager fragmentManager = getSupportFragmentManager();
        fragmentManager.beginTransaction().replace(R.id.waiting_screen, fragment).commit();
    }

    private void getTrackPermission(){
        if (ActivityCompat.checkSelfPermission(MainActivity.this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, LOCATION_REQUEST_CODE);
        }
    }

    // Clean service binding
    private boolean mShouldUnbind;
    private RepeatingTaskService mBoundService;

    private final ServiceConnection mConnection = new ServiceConnection() {
        public void onServiceConnected(ComponentName className, IBinder service) {
            mBoundService = ((RepeatingTaskService.LocalBinder)service).getService();
            mBoundService.setToken(token);

            RepeatingTask statusTask = new RepeatingTask(RepeatingTaskName.CHECK_GAME_STATUS, PING_STATUS);
            statusTask.addObserver(MainActivity.this);
            mBoundService.addRepeatingTask(statusTask);

        }

        public void onServiceDisconnected(ComponentName className) {
            mBoundService = null;
        }
    };

    void doBindService() {
        if (bindService(new Intent(MainActivity.this, RepeatingTaskService.class), mConnection, Context.BIND_AUTO_CREATE)) {
            mShouldUnbind = true;
        }
    }

    void doUnbindService() {
        if (mShouldUnbind) {
            unbindService(mConnection);
            mShouldUnbind = false;
        }
    }
}
