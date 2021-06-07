package com.example.hunted;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.BaseAdapter;
import android.widget.ListView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.example.hunted.models.Player;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class EndScoreFragment extends Fragment {

    ListView listView;
    ListView listViewP;
    MyAdapter thievesAdapter;
    MyAdapterPolice policeAdapter;


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        thievesAdapter = new MyAdapter(getActivity().getApplicationContext(), ((GameStoppedActivity) getActivity()).thieves);
        policeAdapter = new MyAdapterPolice(getActivity().getApplicationContext(), ((GameStoppedActivity) getActivity()).police);

    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_score, container, false);
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        listView = view.findViewById(R.id.list);
        listViewP = view.findViewById(R.id.listP);
        listViewP.setAdapter(policeAdapter);
        listView.setAdapter(thievesAdapter);

        View headerViewP = getLayoutInflater().inflate(R.layout.custom_list_police_header, null);
        listViewP.addHeaderView(headerViewP);

        View headerView = getLayoutInflater().inflate(R.layout.custom_list_thieves_header, null);
        listView.addHeaderView(headerView);
    }

    class MyAdapter extends BaseAdapter {

        Context context;
        List<Player> players;

        public MyAdapter(@NonNull Context context, List<Player> players) {
            this.context = context;
            this.players = players;

            Collections.sort(players, new Comparator<Player>() {
                @Override
                public int compare(Player o1, Player o2) {
                    return Integer.valueOf(o2.getLootCount()).compareTo(o1.getLootCount());
                }
            });

        }

        @Override
        public int getCount() {
            return players.size();
        }

        @Override
        public Object getItem(int position) {
            return players.get(position);
        }

        @Override
        public long getItemId(int position) {
            return position;
        }

        @NonNull
        @Override
        public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
            LayoutInflater layoutInflater = (LayoutInflater) getActivity().getApplicationContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);

            View row = layoutInflater.inflate(R.layout.custom_list_item, parent, false);

            TextView myName = row.findViewById(R.id.name);
            TextView myLoot = row.findViewById(R.id.loot);
            TextView myArrested = row.findViewById(R.id.arrested);

            myName.setText(players.get(position).getName());
            myLoot.setText((String.valueOf(players.get(position).getLootCount())));
            if(players.get(position).isArrested()){
                myArrested.setText("Gearresteerd");
            } else {
                myArrested.setText("Vrij");
            }


            return row;
        }
    }

    class MyAdapterPolice extends BaseAdapter {

        Context context;
        List<Player> players;

        public MyAdapterPolice(@NonNull Context context, List<Player> players) {
            this.context = context;
            this.players = players;

            Collections.sort(players, new Comparator<Player>() {
                @Override
                public int compare(Player o1, Player o2) {
                    return Integer.valueOf(o2.getLootCount()).compareTo(o1.getLootCount());
                }
            });
        }

        @Override
        public int getCount() {
            return players.size();
        }

        @Override
        public Object getItem(int position) {
            return players.get(position);
        }

        @Override
        public long getItemId(int position) {
            return position;
        }

        @NonNull
        @Override
        public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
            LayoutInflater layoutInflater = (LayoutInflater) getActivity().getApplicationContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);

            View row = layoutInflater.inflate(R.layout.custom_list_item_police, parent, false);

            TextView myName = row.findViewById(R.id.nameP);
            TextView myLoot = row.findViewById(R.id.lootP);
            TextView myArrested = row.findViewById(R.id.fired);

            myName.setText(players.get(position).getName());
            myLoot.setText((String.valueOf(players.get(position).getLootCount())));
            if(players.get(position).isArrested()){
                myArrested.setText("Ontslagen");
            } else {
                myArrested.setText("In dienst");
            }


            return row;
        }
    }
}

