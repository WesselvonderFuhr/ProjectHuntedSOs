package com.example.hunted.police;

import android.content.Context;
import android.os.Build;
import android.os.Vibrator;
import android.util.Log;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import androidx.annotation.RequiresApi;
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
import com.example.hunted.thieves.ThievesActivity;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.sql.Time;
import java.time.Duration;
import java.time.LocalTime;
import java.util.List;

public class PoliceAPIClass extends APIClass {

    public PoliceAPIClass(Context c, String token, String url) {
        super(c, token, url);
    }

    public void ArrestThief(String thiefId) {
        final String getArrestedUrl = URL + "player/arrest/" + thiefId;

        StringRequest stringRequest = new StringRequest(Request.Method.PUT, getArrestedUrl,
                response -> {
                    Toast.makeText(context, "De boef is gearresteerd!", Toast.LENGTH_SHORT).show();
                }, error -> {
            Toast.makeText(context, "De boef is weg gekomen!", Toast.LENGTH_SHORT).show();
        }
        ){
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String> headers = new HashMap<>();
                headers.put("Authorization", "Bearer " + token);
                return headers;
            }
        };
        queue.add(stringRequest);
    }

    public void getArrestedThievesCount() {
        final String checkCode = URL + "player/getArrestedThieves";
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, checkCode, null, response -> {
                    try {
                        ((PoliceActivity) context).amountOfThieves = response.getInt("thieves");
                        ((PoliceActivity) context).arrestedThieves = response.getInt("arrestedThieves");
                        ((PoliceActivity) context).setArrestedPlayers();
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }, error -> Toast.makeText(context, R.string.label_thieves_steal_error, Toast.LENGTH_SHORT).show()) {
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String> headers = new HashMap<>();
                headers.put("Authorization", "Bearer " + token);
                return headers;
            }
        };
        queue.add(jsonObjectRequest);
    }
}
