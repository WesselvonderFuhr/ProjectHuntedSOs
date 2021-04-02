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
    private TextView textView1;
    private Button arrestButton;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_police_arrest, container, false);

        textView1 = (TextView) view.findViewById(R.id.fragment_arrest_textview1);
        arrestButton = (Button) view.findViewById(R.id.arrestButton);
        arrestButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                arrestButtonClicked();
            }
        });
        return view;
    }

    private void arrestButtonClicked() {
        ((PoliceActivity)getActivity()).arrestThieves();
    }



    public void giveArrestablePlayers(ArrayList<String> list){
        if (list.size() > 0){
            if (list.size() == 1){
                setTextBox("Er is 1 boef in de buurt!");
            } else {
//                String text = "Er zijn boeven in de buurt!\nDit zijn de ID's van de boeven: ";
                String text = "Er zijn " + list.size() + " boeven in de buurt!";
//                for(int i = 0; i < list.size(); i++){
//                    if (i > 0){
//                        text = text + ", ";
//                    }
//                    text = text + list.get(i);
//                }
                setTextBox(text);
            }

        } else {
            setTextBox("Er zijn geen boeven in de buurt.");
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
        textView1.setText(text);
    }
}
