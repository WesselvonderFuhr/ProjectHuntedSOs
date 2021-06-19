package com.example.hunted.thieves;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import androidx.fragment.app.Fragment;

import com.example.hunted.R;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;

public class ThievesFragmentMessages extends Fragment {

    private ListView messagesView;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_thieves_messages, container, false);
        messagesView = (ListView) view.findViewById(R.id.messagesView);

        return view;
    }

    public void loadMessages(Object obj){
        try {
            JSONArray jsonArray = new JSONArray(obj.toString());

            ArrayList<String> items = new ArrayList<String>();
            for(int i=0; i < jsonArray.length() ; i++) {
                JSONObject json_data = jsonArray.getJSONObject(i);
                String date = json_data.getString("date_time").substring(11, 19);
                String message = json_data.getString("message");
                items.add(date + ": " + message);
            }

            ArrayAdapter adapter = new ArrayAdapter<String>(this.getContext(), R.layout.messages_listview, items);
            messagesView.setAdapter(adapter);

        } catch (Exception e){

        }
    }
}
