package com.example.hunted;

import android.content.Context;
import android.os.Build;
import android.os.Vibrator;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.RequiresApi;

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
import com.example.hunted.police.PoliceActivity;
import com.example.hunted.thieves.ThievesActivity;

import org.json.JSONException;

import java.time.Duration;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public abstract class APIClass {

    protected Context context;

    protected String token;
    protected String URL;
    protected RequestQueue queue;

    private long lastToast;

    public APIClass(Context c, String token, String url) {
        context = c;
        this.token = token;
        URL = url;
        queue = Volley.newRequestQueue(context);
    }

    public void checkOutOfBounds() {
        String requestURL = URL + "player/outofbounds/";
        StringRequest request = new StringRequest(Request.Method.GET, requestURL, response -> {
            if (response.equals("true")){
                vibrateOutOfPlayingField();
            } else if (response.equals("false")){

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
        long h = totalMinutes / 60;
        long m = totalMinutes % 60;


        String hours = h + "";
        if(hours.length() < 2){
            hours = "0" + hours;
        }
        String minutes = m + "";
        if(minutes.length() < 2){
            minutes = "0" + minutes;
        }

        if(context instanceof PoliceActivity) {
            ((PoliceActivity) context).timeLeft = hours + ":" + minutes;
            ((PoliceActivity) context).setTime();
        }
        if(context instanceof ThievesActivity) {
            ((ThievesActivity) context).timeLeft = hours + ":" + minutes;
            ((ThievesActivity) context).setTime();
        }
    }
}
