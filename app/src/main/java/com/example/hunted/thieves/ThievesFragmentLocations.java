package com.example.hunted.thieves;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.example.hunted.R;

public class ThievesFragmentLocations extends Fragment {
    private TextView tvIsArrested;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_thieves_location, container, false);
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        tvIsArrested = getView().findViewById(R.id.tvIsArrested);

        if(requireArguments().getBoolean("isArrested")){
            isArrested();
        }
    }

    public void isArrested(){
        tvIsArrested.setText("Je bent gearresteerd!");
    }
}
