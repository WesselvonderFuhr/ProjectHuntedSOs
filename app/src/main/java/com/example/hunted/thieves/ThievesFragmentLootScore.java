package com.example.hunted.thieves;

import android.os.Build;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.RequiresApi;
import androidx.fragment.app.Fragment;

import com.example.hunted.R;
import com.example.hunted.police.PoliceActivity;

import java.security.spec.RSAOtherPrimeInfo;

public class ThievesFragmentLootScore extends Fragment {

    private TextView timeLeft;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_thieves_loot_score, container, false);
        timeLeft = (TextView) view.findViewById(R.id.timeLeft);
        return view;
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    @Override
    public void onResume(){
        super.onResume();
        ((ThievesActivity) getActivity()).getTime(timeLeft);
    }
}
