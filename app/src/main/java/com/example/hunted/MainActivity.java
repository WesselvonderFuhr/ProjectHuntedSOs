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
import com.android.volley.Response;
import com.android.volley.ServerError;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.HttpHeaderParser;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.hunted.police.PoliceActivity;
import com.example.hunted.thieves.ThievesActivity;

import org.json.JSONException;
import org.json.JSONObject;

//First activity screen with police/thieves choice
public class MainActivity extends AppCompatActivity {
    private final int LOCATION_REQUEST_CODE = 1234;

    public String URL;
    private RequestQueue queue;

    Button login;

    EditText username;
    EditText code;

    String player_id;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        URL = getString(R.string.url);
        queue = Volley.newRequestQueue(this);

        login = findViewById(R.id.login);
        username = findViewById(R.id.username_input);
        code = findViewById(R.id.code_input);

        getTrackPermission();

        login.setOnClickListener(v -> Login());
    }

    public void Login() {
        final String checkCode = URL + "accesscode/check/" + code.getText() + "/" + username.getText().toString();

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.POST, checkCode, null, new Response.Listener<JSONObject>() {

                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            Log.d("res", "res: " + response.getString("assignedTo").length());
                            if(response.getString("assignedTo") == "null") {
                                CreateNewPlayer(code.getText().toString(), username.getText().toString());
                                return;
                            }

                            Log.d("responsestring", "res: " + response);

                            if(response.getString("role").equals("Boef")) {
                                openThievesActivity(response.getString("assignedTo"));
                            } else if(response.getString("role").equals("Politie")) {
                                openPoliceActivity(response.getString("assignedTo"));
                            }

                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        Log.d("Error", "Error: " + error);
                    }
                });
        queue.add(jsonObjectRequest);
    }

    private void CheckNameAndCodeCombo(String code, String nameToCheck) {

    }

    private void CreateNewPlayer(String codeId, String name) {
        final String makePlayer = URL + "player/" + code.getText() + "/" + username.getText();

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.POST, makePlayer, null, new Response.Listener<JSONObject>() {

                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            AddPlayerToGame(response.getString("assignedTo"));
                            if(response.getString("role").equals("Boef")) {
                                openThievesActivity(response.getString("assignedTo"));
                            } else if(response.getString("role").equals("Politie")) {
                                openPoliceActivity(response.getString("assignedTo"));
                            }
                            Log.d("response", "response: " + response.toString());

                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        Log.d("Error", "Error: " + error);
                    }
                });
        queue.add(jsonObjectRequest);
    }

    public void AddPlayerToGame(String id){
        String hardcodedgameId = "607858e32a1c234e5886e14e";
        final String addPlayer = URL + "game/" + hardcodedgameId + "/player/" + id;

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.PUT, addPlayer, null, new Response.Listener<JSONObject>() {

                    @Override
                    public void onResponse(JSONObject response) {
                        Log.d("response", "response: " + response.toString());
                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        Log.d("Error", "Error: " + error);
                    }
                });
        queue.add(jsonObjectRequest);
    }


    public void openPoliceActivity(String id){
        Log.d("aids", "ID: " + id);
        Intent intent = new Intent(this, PoliceActivity.class);
        intent.putExtra("ID", id.replaceAll("\"",""));
        startActivity(intent);
    }

    public void openThievesActivity(String id){
        Intent intent = new Intent(this, ThievesActivity.class);
        intent.putExtra("ID", id.replaceAll("\"",""));
        startActivity(intent);
    }

    private void getTrackPermission(){
        if (ActivityCompat.checkSelfPermission(MainActivity.this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, LOCATION_REQUEST_CODE);
        }
    }
}
