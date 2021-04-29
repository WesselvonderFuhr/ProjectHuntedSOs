package com.example.hunted;

import android.content.Context;
import android.os.Vibrator;
import android.util.Log;
import android.widget.Toast;

import com.android.volley.NetworkResponse;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.ServerError;
import com.android.volley.toolbox.HttpHeaderParser;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

public abstract class APIClass {

    protected Context context;

    protected String URL;
    protected RequestQueue queue;

    public APIClass(Context c, String url) {
        context = c;
        URL = url;
        queue = Volley.newRequestQueue(context);
    }

    public void checkOutOfBounds(String id) {
        String requestURL = URL + "player/outofbounds/" + id;
        StringRequest request = new StringRequest(Request.Method.GET, requestURL, response -> {
            if (response.equals("true")){
                Log.d("response: ", "player is out of bounds");
                vibrateOutOfPlayingField();
            } else if (response.equals("false")){
                Log.d("response: ", "player is within bounds");
            }
        }, error -> {
            NetworkResponse response = error.networkResponse;
            if (error instanceof ServerError && response != null) {
                try {
                    String res = new String(response.data, HttpHeaderParser.parseCharset(response.headers, "utf-8"));
                    Log.d("checkOutOfBounds error: ", res);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
        queue.add(request);
    }

    private void vibrateOutOfPlayingField(){
        Vibrator v = (Vibrator) context.getSystemService(context.VIBRATOR_SERVICE);

        Toast.makeText(context, "Keer terug naar het speelgebied!", Toast.LENGTH_SHORT).show();
        v.vibrate(500);
    }
}
