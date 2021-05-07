package com.example.hunted.police;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import androidx.fragment.app.Fragment;

import com.android.volley.Request;
import com.android.volley.toolbox.JsonObjectRequest;
import com.example.hunted.R;

import org.json.JSONException;

public class PoliceFragmentLocations extends Fragment {

    private TextView playTime;
    private TextView timeLeft;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_police_location, container, false);

        playTime = (TextView) view.findViewById(R.id.speeltijd);
        timeLeft = (TextView) view.findViewById(R.id.eindigt);

        return view;
    }

    public void getTime() {

    }

    public void getTimeLeft() {

    }
}
