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

    private boolean stolen;
    private String result;

    private TextView resultTextView;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_thieves_scanner, container, false);
    }
    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        resultTextView = getView().findViewById(R.id.resultTextView);
    }

    public void setResult(boolean success, String result) {
        resultTextView.setText(result);
    }
}
