package com.example.hunted;

import android.content.Context;
import android.os.Vibrator;
import android.util.Log;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.NetworkResponse;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.ServerError;
import com.android.volley.toolbox.HttpHeaderParser;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

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
        Toast.makeText(context, "Keer terug naar het speelgebied!", Toast.LENGTH_SHORT).show();
        v.vibrate(500);
    }
}
