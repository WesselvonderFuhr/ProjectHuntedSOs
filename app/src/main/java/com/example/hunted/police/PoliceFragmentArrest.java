package com.example.hunted.police;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.fragment.app.Fragment;

import com.example.hunted.R;

import org.json.JSONArray;

import java.util.ArrayList;


public class PoliceFragmentArrest extends Fragment {
    private TextView arrestTextview;
    private Button arrestButton;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_police_arrest, container, false);

        arrestTextview = (TextView) view.findViewById(R.id.arrestTextview);
        arrestButton = (Button) view.findViewById(R.id.arrestButton);
        arrestButton.setOnClickListener(v -> arrestButtonClicked());
        return view;
    }

    private void arrestButtonClicked() {
        ((PoliceActivity)getActivity()).arrestThieves();
    }



    public void giveArrestablePlayers(ArrayList<String> list){
        if (list.size() > 0){
            if (list.size() == 1){
                setTextBox(R.string.label_police_one_thief_nearby + "");
            } else {
                String text = "Er zijn " + list.size() + " boeven in de buurt!";
                setTextBox(text);
            }
        } else {
            setTextBox(R.string.label_police_no_thieves_nearby + "");
        }
    }

    public void setArrestButtonActive(boolean active) {
        if(arrestButton.isEnabled()) {
            if (!active) {
                arrestButton.setEnabled(false);
            }
        } else {
            if(active) {
                arrestButton.setEnabled(true);
            }
        }
    }

    public void setTextBox(String text){
        arrestTextview.setText(text);
    }
}
