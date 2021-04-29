package com.example.hunted.thieves;

import android.content.Context;
import android.os.Vibrator;
import android.util.Log;
import android.widget.Toast;

import androidx.fragment.app.Fragment;

import com.android.volley.NetworkResponse;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.ServerError;
import com.android.volley.toolbox.HttpHeaderParser;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.hunted.APIClass;

public class ThievesAPIClass extends APIClass {


    public ThievesAPIClass(Context c, String url) {
        super(c, url);
    }

    public void steal(boolean success, String id, String result, Fragment fragment) {
        if(success){
            final String postStolenLoot = URL + "player/" + id + "/stolen/" + result;
            StringRequest stringRequest = new StringRequest(Request.Method.POST, postStolenLoot,
                    response -> sendDataToFragmentScanner(true, response, fragment),

                    error -> {
                        NetworkResponse response = error.networkResponse;
                        if (error instanceof ServerError && response != null) {
                            try {
                                String res = new String(response.data, HttpHeaderParser.parseCharset(response.headers, "utf-8"));
                                sendDataToFragmentScanner(false, res, fragment);
                            } catch (Exception e) {
                                sendDataToFragmentScanner(false, "Er ging iets mis.", fragment);
                            }
                        }
                    });

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
