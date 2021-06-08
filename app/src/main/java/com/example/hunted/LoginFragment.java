package com.example.hunted;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;
import com.example.hunted.police.PoliceActivity;
import com.example.hunted.thieves.ThievesActivity;

import org.json.JSONException;

public class LoginFragment extends Fragment {

    Button login;

    EditText username;
    EditText code;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_login, container, false);
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        login = getView().findViewById(R.id.login);
        username = getView().findViewById(R.id.username_input);
        code = getView().findViewById(R.id.code_input);

        login.setOnClickListener(v -> Login());

    }

    public void Login() {
        final String checkCode = ((MainActivity) getActivity()).URL + "accesscode/authenticate/?code=" + code.getText().toString() + "&name=" + username.getText().toString();
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.POST, checkCode, null, response -> {
                    try {
                        String token = response.getString("token");
                        ((MainActivity) getActivity()).token = token;
                        String role = response.getString("role");
                        ((MainActivity) getActivity()).role = role;

                        ((MainActivity) getActivity()).doBindService();
                        ((MainActivity) getActivity()).StartGame();

                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }, error -> Toast.makeText(getActivity().getApplicationContext(), R.string.label_wrong_login, Toast.LENGTH_SHORT).show());
        ((MainActivity) getActivity()).queue.add(jsonObjectRequest);
    }




}
