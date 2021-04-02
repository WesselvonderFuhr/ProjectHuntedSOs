package com.example.hunted.thieves;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.fragment.app.Fragment;

import com.example.hunted.R;

public class ThievesFragmentLocations extends Fragment {
    private TextView textView1;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_thieves_location, container, false);

        textView1 = (TextView) view.findViewById(R.id.tvIsArrested);
        return view;
    }

    public void setTextBox(String text){
        textView1.setText(text);
    }
}
