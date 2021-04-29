package com.example.hunted.police;

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
import com.example.hunted.APIClass;
import com.example.hunted.R;

public class PoliceAPIClass extends APIClass {

    public PoliceAPIClass(Context c, String url) {
        super(c, url);
    }

    public void ArrestThief(String thiefId) {
        final String getArrestedUrl = URL + "player/arrest/" + thiefId;

        StringRequest stringRequest = new StringRequest(Request.Method.PUT, getArrestedUrl,
                response -> {
                    Toast.makeText(context, "De boef is gearresteerd!", Toast.LENGTH_SHORT).show();
                }, error -> {
            Toast.makeText(context, "De boef is weg gekomen!", Toast.LENGTH_SHORT).show();
        }
        );
        queue.add(stringRequest);
    }
}
