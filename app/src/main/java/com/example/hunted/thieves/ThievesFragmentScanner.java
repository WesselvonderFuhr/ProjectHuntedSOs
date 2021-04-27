package com.example.hunted.thieves;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.example.hunted.R;

public class ThievesFragmentScanner extends Fragment {

    private TextView resultTextView;
    private TextView successTextView;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_thieves_scanner, container, false);
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        resultTextView = getView().findViewById(R.id.resultTextView);
        successTextView = getView().findViewById(R.id.successTextView);
    }

    public void setResult(boolean success, String result) {
        if(success){
            successTextView.setTextColor(getResources().getColor(R.color.success));
            successTextView.setText(R.string.label_thieves_steal_succes);
            result = R.string.label_thieves_stolen_loot + "\n" + result.substring(0, 1).toUpperCase() + result.substring(1).toLowerCase();
        } else {
            successTextView.setTextColor(getResources().getColor(R.color.error));
            successTextView.setText(R.string.label_thieves_steal_failure);
        }
        resultTextView.setText(result);
    }
}
