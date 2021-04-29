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
//        final String checkCode = URL + "accesscode/check/" + code.getText() + "/" + username.getText().toString();
//        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
//                (Request.Method.POST, checkCode, null, response -> {
//                    try {
//                        if(response.getString("assignedTo") == "null") {
//                            CreateNewPlayer(code.getText().toString(), username.getText().toString());
//                            return;
//                        }
//                        Log.d("Response", "response: " + response.toString());
//                        if(response.getString("role").equals("Boef")) {
//                            openThievesActivity(response.getString("assignedTo"));
//                        } else if(response.getString("role").equals("Politie")) {
//                            openPoliceActivity(response.getString("assignedTo"));
//                        }
//
//                    } catch (JSONException e) {
//                        e.printStackTrace();
//                    }
//                }, error -> Toast.makeText(getApplicationContext(), "Combinatie code en spelernaam onjuist", Toast.LENGTH_SHORT).show());
//        queue.add(jsonObjectRequest);
        openPoliceActivity("6085941b6ce69e07d47839b0");
    }

    private void CreateNewPlayer(String codeId, String name) {
        final String makePlayer = URL + "player/" + codeId + "/" + name;

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.POST, makePlayer, null, response -> {
                    try {
                        AddPlayerToGame(response.getString("assignedTo"));
                        if(response.getString("role").equals("Boef")) {
                            openThievesActivity(response.getString("assignedTo"));
                        } else if(response.getString("role").equals("Politie")) {
                            openPoliceActivity(response.getString("assignedTo"));
                        }

                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }, error -> Log.d("Error", "Error: " + error));
        queue.add(jsonObjectRequest);
    }

    public void AddPlayerToGame(String id){
        String gameId = getString(R.string.gameId);
        final String addPlayer = URL + "game/" + gameId + "/player/" + id;

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.PUT, addPlayer, null, response -> Log.d("response", "response: " + response.toString()), error -> Log.d("Error", "Error: " + error));

        queue.add(jsonObjectRequest);
    }


    public void openPoliceActivity(String id){
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
