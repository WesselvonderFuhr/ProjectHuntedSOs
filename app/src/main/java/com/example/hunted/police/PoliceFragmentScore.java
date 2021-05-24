package com.example.hunted.police;

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
import com.example.hunted.thieves.ThievesActivity;

import java.util.List;

public class PoliceFragmentScore extends Fragment {

    private TextView timeLeft;
    private TextView lootList;
    private TextView arrestedThieves;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_police_score, container, false);
        timeLeft = (TextView) view.findViewById(R.id.timeLeft);
        lootList = (TextView) view.findViewById(R.id.lootRetrieved);
        arrestedThieves = (TextView) view.findViewById(R.id.thievesArrested);
        ((PoliceActivity) getActivity()).setLootList(lootList);
        ((PoliceActivity) getActivity()).getArrestedPlayers(arrestedThieves);
        return view;
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    @Override
    public void onResume(){
        super.onResume();
        ((PoliceActivity) getActivity()).getTime(timeLeft);
        ((PoliceActivity) getActivity()).getArrestedPlayers(arrestedThieves);
        ((PoliceActivity) getActivity()).setLootList(lootList);
    }
}
