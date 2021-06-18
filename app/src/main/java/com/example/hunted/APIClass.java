package com.example.hunted;

import android.content.Context;
import android.os.Build;
import android.os.Vibrator;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.RequiresApi;
import androidx.fragment.app.Fragment;

import com.android.volley.AuthFailureError;
import com.android.volley.NetworkResponse;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.ServerError;
import com.android.volley.toolbox.HttpHeaderParser;
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.hunted.models.Player;
import com.example.hunted.police.PoliceActivity;
import com.example.hunted.police.PoliceFragmentLocations;
import com.example.hunted.thieves.ThievesActivity;
import com.example.hunted.thieves.ThievesFragmentLocations;
import com.example.hunted.thieves.ThievesFragmentScanner;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.time.Duration;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class APIClass {
    private final int OUTOFBOUNDS_AMOUNT = 4;

    protected Context context;

    protected String token;
    protected String URL;
    protected RequestQueue queue;

    private int outOfBoundsCounter;

    private long lastToast;

    public APIClass(Context c, String token, String url) {
        context = c;
        this.token = token;
        URL = url;
        queue = Volley.newRequestQueue(context);
        outOfBoundsCounter = 1;
    }

    public void checkOutOfBounds() {
        String requestURL = URL + "player/outofbounds/";
        StringRequest request = new StringRequest(Request.Method.GET, requestURL, response -> {
            if (response.equals("true")){
                if (outOfBoundsCounter == 0){ //outOfBoundsCounter is set to 0 when out of bounds too many times
                    vibrateOutOfPlayingField();
                } else {
                    outOfBoundsCounter++;
                    if (outOfBoundsCounter >= OUTOFBOUNDS_AMOUNT){
                        outOfBoundsCounter = 0;
                    }
                }

            } else if (response.equals("false")){
                outOfBoundsCounter = 1;
            }
        }, error -> {
            NetworkResponse response = error.networkResponse;
            if (error instanceof ServerError && response != null) {
                try {
                    String res = new String(response.data, HttpHeaderParser.parseCharset(response.headers, "utf-8"));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }){
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String> headers = new HashMap<>();
                headers.put("Authorization", "Bearer " + token);
                return headers;
            }
        };
        queue.add(request);
    }

    private void vibrateOutOfPlayingField(){
        Vibrator v = (Vibrator) context.getSystemService(context.VIBRATOR_SERVICE);
        if(lastToast + 2000 < System.currentTimeMillis()){
            lastToast = System.currentTimeMillis();
            Toast.makeText(context, context.getString(R.string.label_return_playingfield), Toast.LENGTH_SHORT).show();
        }
        v.vibrate(500);
    }

    public void getStolenLoot() {
        final String checkCode = URL + "loot/lootByPlayer";
        JsonArrayRequest jsonArrayRequest = new JsonArrayRequest
                (Request.Method.GET, checkCode, null, response -> {
                    ArrayList<String> tempList = new ArrayList<String>();

                    for(int i = 0; i < response.length(); i++) {
                        try {
                            tempList.add(response.getJSONObject(i).getString("name"));
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }

                    if(context instanceof PoliceActivity) {
                        ((PoliceActivity) context).setLoot(tempList);
                        ((PoliceActivity) context).getLootList();
                    }
                    if(context instanceof ThievesActivity) {
                        ((ThievesActivity) context).setLoot(tempList);
                        ((ThievesActivity) context).getLootList();

                    }

                }, error -> Toast.makeText(context, R.string.label_thieves_steal_error, Toast.LENGTH_SHORT).show()) {
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String> headers = new HashMap<>();
                headers.put("Authorization", "Bearer " + token);
                return headers;
            }
        };
        queue.add(jsonArrayRequest);
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    public void getTime() {
        final String checkCode = URL + "game";
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, checkCode, null, response -> {
                    try {
                        LocalTime b = extractTime(response.getString("start_time"));
                        LocalTime e = extractTime(response.getString("end_time"));
                        setTime(timeLeft(b, e));
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }, error -> setTime(0)){
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String> headers = new HashMap<>();
                headers.put("Authorization", "Bearer " + token);
                return headers;
            }
        };
        queue.add(jsonObjectRequest);
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    public LocalTime extractTime(String dateTime) {
        String time = dateTime.substring(dateTime.lastIndexOf('T') + 1, dateTime.lastIndexOf('T') + 1 + 8);
        LocalTime t = LocalTime.parse(time);
        return t;
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    public long timeLeft(LocalTime start, LocalTime end) {
        long time = Duration.between(start, end).toMinutes();
        long timePassed = Duration.between(start, LocalTime.now()).toMinutes();
        long timeLeft = time - timePassed;
        if(timeLeft < 0){
            timeLeft = 0;
        }
        return timeLeft;
    }

    public void setTime(long totalMinutes) {
        if(context instanceof PoliceActivity) {
            ((PoliceActivity) context).timeLeft = totalMinutes + " " + context.getString(R.string.minutes);
            ((PoliceActivity) context).setTime();
        }
        if(context instanceof ThievesActivity) {
            ((ThievesActivity) context).timeLeft = totalMinutes + " " + context.getString(R.string.minutes);
            ((ThievesActivity) context).setTime();
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    public void getPlayfield(Fragment fragment) {
        final String getPlayfield = URL + "game/playfield/";
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, getPlayfield, null, response -> {
                    try {
                        sendPlayfieldToFragmentLocations(response.getJSONArray("playfield"), fragment);
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }, error -> {
                    NetworkResponse response = error.networkResponse;
                    if (error instanceof ServerError && response != null) {
                        try {
                            String res = new String(response.data, HttpHeaderParser.parseCharset(response.headers, "utf-8"));
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                }){
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String> headers = new HashMap<>();
                headers.put("Authorization", "Bearer " + token);
                return headers;
            }
        };
        queue.add(jsonObjectRequest);
    }

    public void getScores(List<Player> thievesList, List<Player> policeList) {
        final String getScores = URL + "player/scores";
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, getScores, null, response -> {
                    try {
                        JSONArray thieves = response.getJSONArray("thieves");
                        JSONArray police = response.getJSONArray("police");

                        for(int i = 0; i < thieves.length(); i++) {
                            JSONArray tempLoot = thieves.getJSONObject(i).getJSONArray("loot");
                            ArrayList<String> playerLoot = new ArrayList<>();
                            if(tempLoot.length() != 0) {
                                for(int j = 0; j < tempLoot.length(); j++) {
                                    playerLoot.add(tempLoot.getString(j));
                                }
                            }

                            Player player = new Player(thieves.getJSONObject(i).getString("name"), thieves.getJSONObject(i).getString("role"), thieves.getJSONObject(i).getBoolean("arrested"), playerLoot);
                            thievesList.add(player);
                        }

                        for(int i = 0; i < police.length(); i++) {
                            JSONArray tempLoot = police.getJSONObject(i).getJSONArray("loot");
                            ArrayList<String> playerLoot = new ArrayList<>();

                            if(tempLoot.length() != 0) {
                                for(int j = 0; j < tempLoot.length(); j++) {
                                    playerLoot.add(tempLoot.getString(j));
                                }
                            }

                            Player player = new Player(police.getJSONObject(i).getString("name"), police.getJSONObject(i).getString("role"), police.getJSONObject(i).getBoolean("arrested"), playerLoot);
                            policeList.add(player);
                        }

                        ((GameStoppedActivity) context).SetViewAfterDataIsLoaded();

                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }, error -> {
                    NetworkResponse response = error.networkResponse;
                    if (error instanceof ServerError && response != null) {
                        try {
                            String res = new String(response.data, HttpHeaderParser.parseCharset(response.headers, "utf-8"));
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                }){
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String> headers = new HashMap<>();
                headers.put("Authorization", "Bearer " + token);
                return headers;
            }
        };
        queue.add(jsonObjectRequest);
    }

    private void sendPlayfieldToFragmentLocations(JSONArray result, Fragment fragment){
        // Send data to ThievesFragmentLocations
        if(fragment instanceof ThievesFragmentLocations){
            ThievesFragmentLocations thievesFragmentLocation = (ThievesFragmentLocations) fragment;
            thievesFragmentLocation.setPlayfield(result);
        }else if (fragment instanceof PoliceFragmentLocations) {
            PoliceFragmentLocations policeFragmentLocations = (PoliceFragmentLocations) fragment;
            policeFragmentLocations.setPlayfield(result);
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    public void getJail(Fragment fragment) {
        final String getJail = URL + "jail";
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, getJail, null, response -> {
                    try {
                        sendJailToFragmentLocations(response.getJSONObject("location"), fragment);
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }, error -> {
                    NetworkResponse response = error.networkResponse;
                    if (error instanceof ServerError && response != null) {
                        try {
                            String res = new String(response.data, HttpHeaderParser.parseCharset(response.headers, "utf-8"));
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                }){
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String> headers = new HashMap<>();
                headers.put("Authorization", "Bearer " + token);
                return headers;
            }
        };
        queue.add(jsonObjectRequest);
    }

    private void sendJailToFragmentLocations(JSONObject result, Fragment fragment){
        // Send data to ThievesFragmentLocations
        if(fragment instanceof ThievesFragmentLocations) {
            ThievesFragmentLocations thievesFragmentLocation = (ThievesFragmentLocations) fragment;
            thievesFragmentLocation.setJail(result);
        }else if (fragment instanceof PoliceFragmentLocations){
                PoliceFragmentLocations policeFragmentLocations = (PoliceFragmentLocations) fragment;
                policeFragmentLocations.setJail(result);
        }
    }
}
