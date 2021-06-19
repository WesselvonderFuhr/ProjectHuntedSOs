package com.example.hunted;

import android.os.Bundle;
import android.util.Log;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;

import com.android.volley.RequestQueue;
import com.android.volley.toolbox.Volley;
import com.example.hunted.models.Player;
import com.example.hunted.police.PoliceAPIClass;

import java.util.ArrayList;
import java.util.List;

public class GameStoppedActivity extends AppCompatActivity {

    private APIClass apiClass;

    public String URL;
    private RequestQueue queue;
    public String token;


    public List<Player> thieves;
    public List<Player> police;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        token = getIntent().getStringExtra("token");
        URL = getString(R.string.url);
        queue = Volley.newRequestQueue(this);
        apiClass = new APIClass(this, token, URL);

        thieves = new ArrayList<Player>();
        police = new ArrayList<Player>();

        apiClass.getScores(thieves, police);
        setContentView(R.layout.activity_game_stopped);
    }

    public void SetViewAfterDataIsLoaded() {
        setFragment(new EndScoreFragment());
    }

    public void setFragment(Fragment fragment){
        FragmentManager fragmentManager = getSupportFragmentManager();
        fragmentManager.beginTransaction().replace(R.id.game_stopped, fragment).commit();
    }
}
