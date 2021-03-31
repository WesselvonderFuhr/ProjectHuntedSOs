package com.example.hunted.police;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.fragment.app.Fragment;

import com.example.hunted.R;


public class PoliceFragmentArrest extends Fragment {
    private TextView textView1;
    private boolean isScanning = false;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_police_arrest, container, false);

        textView1 = (TextView) view.findViewById(R.id.fragment_arrest_textview1);
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


    public void setTextBox(String text){
        textView1.setText(text);
    }
}
