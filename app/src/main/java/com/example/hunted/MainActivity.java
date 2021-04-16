package com.example.hunted;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.location.LocationManager;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.NetworkResponse;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.ServerError;
import com.android.volley.toolbox.HttpHeaderParser;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.hunted.police.PoliceActivity;
import com.example.hunted.thieves.ThievesActivity;

import org.json.JSONObject;

//First activity screen with police/thieves choice
public class MainActivity extends AppCompatActivity {
    private final int LOCATION_REQUEST_CODE = 1234;

    public String URL;
    private RequestQueue queue;

    Button login;

    EditText username;
    EditText code;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        URL = "http://192.168.1.87:3000/";
        queue = Volley.newRequestQueue(this);

        login = findViewById(R.id.login);
        username = findViewById(R.id.username_input);
        code = findViewById(R.id.code_input);

        getTrackPermission();

        login.setOnClickListener(v -> Login());
    }

    public void Login() {
        final String checkNameAndCodeCombo = URL + "accesscode/check/" + username.getText() + "/" + code.getText();

        StringRequest stringRequest = new StringRequest(Request.Method.POST, checkNameAndCodeCombo,
                response -> {
                    if(response.equals("Boef")) {
                        openThievesActivity();
                    } else {
                        openPoliceActivity();
                    }

                }, error -> {
            Toast.makeText(this, "Iets is niet goed gegaan bij het inloggen: " + error, Toast.LENGTH_SHORT).show();
        }
        );

        queue.add(stringRequest);
    }

    public void openPoliceActivity(){
        Intent intent = new Intent(this, PoliceActivity.class);

        final String getArrestedUrl = URL + "player";
        StringRequest stringRequest = new StringRequest(Request.Method.POST, getArrestedUrl,
                response -> {
                    String ID = response;
                    intent.putExtra("ID", ID.replaceAll("\"",""));
                    startActivity(intent);
                }, error -> {
            Toast.makeText(this, "De rol Agent is onbeschikbaar.", Toast.LENGTH_LONG).show();
        }) {

            @Override
            public String getBodyContentType() {
                return "application/json; charset=utf-8";
            }

            @Override
            public byte[] getBody() {
                String body = "{\"name\":\"Default\", \"role\":\"Agent\"}";
                return body.getBytes();
            }
        };
        queue.add(stringRequest);
    }

    public void openThievesActivity(){
        Intent intent = new Intent(this, ThievesActivity.class);

        final String getArrestedUrl = URL + "player";
        StringRequest stringRequest = new StringRequest(Request.Method.POST, getArrestedUrl,
                response -> {
                    String ID = response;
                    intent.putExtra("ID", ID.replaceAll("\"",""));
                    startActivity(intent);
                }, error -> {
            Toast.makeText(this, "De rol Boef is onbeschikbaar.", Toast.LENGTH_LONG).show();
        }) {

            @Override
            public String getBodyContentType() {
                return "application/json; charset=utf-8";
            }

            @Override
            public byte[] getBody() {
                String body = "{\"name\":\"Default\", \"role\":\"Boef\"}";
                return body.getBytes();
            }
        };
        queue.add(stringRequest);
    }

    private void getTrackPermission(){
        if (ActivityCompat.checkSelfPermission(MainActivity.this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, LOCATION_REQUEST_CODE);
        }
    }
}
