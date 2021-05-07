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
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.hunted.police.PoliceActivity;

import org.json.JSONException;

import java.time.Duration;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.Map;

public abstract class APIClass {

    protected Context context;

    protected String token;
    protected String URL;
    protected RequestQueue queue;

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
        Toast.makeText(context, context.getString(R.string.label_return_playingfield), Toast.LENGTH_SHORT).show();
        v.vibrate(500);
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    public void getTime() {
        final String checkCode = URL + "game/608bfc395e6f4c126818bee4/time";
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, checkCode, null, response -> {
                    try {
                        LocalTime b = extractTime(response.getString("start_time"));
                        LocalTime e = extractTime(response.getString("end_time"));
                        setTime(timeLeft(b, e));
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }, error -> Toast.makeText(context, R.string.label_wrong_login, Toast.LENGTH_SHORT).show());
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
        long timePassed = Duration.between(start, LocalTime.of(13, 4)).toMinutes();
        long timeLeft = time - timePassed;
        return timeLeft;
    }

    public void setTime(long minutes) {
        long h = minutes / 60;
        long m = minutes % 60;

        ((PoliceActivity) context).timeLeft = h + ":" + m;

        Log.d("aids", ((PoliceActivity) context).timeLeft + " = tijd");
    }
}
