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
    private boolean isScanning = false;

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
        setTextBox("gruis");
        return view;
    }

    public static PoliceFragmentArrest newInstance(String param1, String param2){
        PoliceFragmentArrest fragment = new PoliceFragmentArrest();
        Bundle args = new Bundle();
        args.putString("ARG_PARAM1", param1);
        args.putString("ARG_PARAM2", param2);
        fragment.setArguments(args);
        return fragment;
    }

    private void arrestButtonClicked() {
        ((PoliceActivity)getActivity()).arrestThieves();
    }



    public void giveArrestablePlayers(ArrayList<String> list){
        if (list.size() > 0){
            if (list.size() == 1){
                setTextBox("Er is een boef in de buurt!\nDit is zijn  ID: " + list.get(1));
            } else {
                String text = "Er zijn boeven in de buurt!\nDit zijn de ID's van de boeven: ";

                for(int i = 0; i < list.size(); i++){
                    if (i > 0){
                        text = text + ", ";
                    }
                    text = text + list.get(i);
                }
                setTextBox(text);
            }

        } else {
            setTextBox("Er zijn geen boeven in de buurt.");
        }
    }

    public void setArrestButtonActive(boolean active) {
        Log.d("button", "doe ff active ofzo: " + active);
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
