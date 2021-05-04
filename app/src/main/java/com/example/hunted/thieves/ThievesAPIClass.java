package com.example.hunted.thieves;

import android.content.Context;
import android.os.Vibrator;
import android.util.Log;
import android.widget.Toast;

import androidx.fragment.app.Fragment;

import com.android.volley.AuthFailureError;
import com.android.volley.NetworkResponse;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.ServerError;
import com.android.volley.toolbox.HttpHeaderParser;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.hunted.APIClass;
import com.example.hunted.R;

import java.util.HashMap;
import java.util.Map;

public class ThievesAPIClass extends APIClass {


    public ThievesAPIClass(Context c, String token, String url) {
        super(c, token, url);
    }

    public void steal(boolean success, String result, Fragment fragment) {
        if(success){
            final String postStolenLoot = URL + "player/stolen/" + result;
            StringRequest stringRequest = new StringRequest(Request.Method.PUT, postStolenLoot,
                response -> sendDataToFragmentScanner(true, response.substring(1, response.length() -1), fragment),

                error -> {
                    NetworkResponse response = error.networkResponse;
                    if (error instanceof ServerError && response != null) {
                        try {
                            sendDataToFragmentScanner(false, context.getResources().getString(R.string.label_thieves_steal_already_stolen), fragment);
                        } catch (Exception e) {
                            sendDataToFragmentScanner(false, context.getResources().getString(R.string.label_thieves_steal_error), fragment);
                        }
                    }
                }) {
                @Override
                public Map<String, String> getHeaders() throws AuthFailureError {
                    Map<String, String> headers = new HashMap<>();
                    headers.put("Authorization", "Bearer " + token);
                    return headers;
                }
            };

            queue.add(stringRequest);
        } else {
            sendDataToFragmentScanner(false, result, fragment);
        }
    }

    private void sendDataToFragmentScanner(boolean success, String result, Fragment fragment){
        // Send data to ThievesFragmentScanner
        if(fragment instanceof ThievesFragmentScanner){
            ThievesFragmentScanner thievesFragmentScanner = (ThievesFragmentScanner) fragment;
            thievesFragmentScanner.setResult(success, result);
        }
    }


}
