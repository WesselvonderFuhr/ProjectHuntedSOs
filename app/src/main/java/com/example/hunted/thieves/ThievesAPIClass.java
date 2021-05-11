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
import com.android.volley.toolbox.JsonArrayRequest;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.hunted.APIClass;
import com.example.hunted.R;

import org.json.JSONArray;
import org.json.JSONException;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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
                    if(response != null && response.data != null){
                        switch(response.statusCode) {
                            case 400:
                                sendDataToFragmentScanner(false, context.getResources().getString(R.string.label_thieves_steal_already_stolen), fragment);
                                break;
                            case 404:
                                sendDataToFragmentScanner(false, context.getResources().getString(R.string.label_thieves_steal_non_existant), fragment);
                                break;
                            default:
                                sendDataToFragmentScanner(false, context.getResources().getString(R.string.label_thieves_steal_error), fragment);
                                break;
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

    public void getStolenLoot() {
        final String checkCode = URL + "loot/60913d6f1d029c1a40757699";
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

                    ((ThievesActivity) context).setLoot(tempList);

                }, error -> Toast.makeText(context, R.string.label_wrong_login, Toast.LENGTH_SHORT).show());
        queue.add(jsonArrayRequest);
    }
}
