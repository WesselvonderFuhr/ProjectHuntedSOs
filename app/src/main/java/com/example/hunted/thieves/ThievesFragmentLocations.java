package com.example.hunted.thieves;

import android.content.Context;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;
import androidx.core.content.res.ResourcesCompat;
import androidx.fragment.app.Fragment;

import com.example.hunted.R;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.osmdroid.config.Configuration;
import org.osmdroid.tileprovider.tilesource.TileSourceFactory;
import org.osmdroid.util.GeoPoint;
import org.osmdroid.views.MapView;
import org.osmdroid.views.overlay.Marker;
import org.osmdroid.views.overlay.Polygon;

import java.util.ArrayList;
import java.util.List;

public class ThievesFragmentLocations extends Fragment {
    private TextView tvIsArrested;
    private MapView osmMap = null;
    private Marker playerMarker;
    private Marker jailMarker;
    private Polygon playfieldPolygon;

    private final int REQUEST_PERMISSIONS_REQUEST_CODE = 1;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return inflater.inflate(R.layout.fragment_thieves_location, container, false);
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        tvIsArrested = getView().findViewById(R.id.tvIsArrested);

        osmMap = getView().findViewById(R.id.mapView);
        osmMap.setTileSource(TileSourceFactory.MAPNIK);
        osmMap.getController().setZoom(19.0);

        playfieldPolygon = new Polygon();
        playfieldPolygon.getFillPaint().setColor(Color.BLUE);
        playfieldPolygon.getFillPaint().setAlpha(20);

        playerMarker = new Marker(osmMap);
        playerMarker.setAnchor(Marker.ANCHOR_CENTER, Marker.ANCHOR_BOTTOM);

        Drawable icon = ResourcesCompat.getDrawable(getResources(), R.drawable.ic_baseline_location_city_24, getActivity().getTheme());
        jailMarker = new Marker(osmMap);
        jailMarker.setIcon(icon);

        osmMap.getOverlays().add(playerMarker);
        osmMap.getOverlays().add(jailMarker);
        osmMap.getOverlays().add(playfieldPolygon);

        if(requireArguments().getBoolean("isArrested")){
            isArrested();
        }

        ((ThievesActivity) getActivity()).getPlayfield();
        ((ThievesActivity) getActivity()).getJail();

        Context ctx = this.getActivity().getApplicationContext();
        Configuration.getInstance().setUserAgentValue(ctx.getPackageName());
    }

    public void isArrested(){
        tvIsArrested.setText(getResources().getString(R.string.label_thieves_arrested));
    }

    public void setPlayfield(JSONArray result) {
        ArrayList playField;
        List<List<GeoPoint>> holesList;

        try{
//            JSONArray playFieldJArray = result
            for(int i = 0; i < result.length(); i++){
                playField = new ArrayList();
                JSONArray playFieldArea = result.getJSONArray(i).getJSONArray(0);
                for(int x = 0; x < playFieldArea.length(); x++){
                    double locLat = playFieldArea.getJSONObject(x).getDouble("latitude");
                    double locLong = playFieldArea.getJSONObject(x).getDouble("longitude");
                    playField.add(new GeoPoint(locLat, locLong));
                }

                holesList = new ArrayList<>();
                List<GeoPoint> holes = new ArrayList<>();
                for(int holesIndex = 1; holesIndex < result.getJSONArray(i).length(); holesIndex++){
                    JSONArray holesArea = result.getJSONArray(i).getJSONArray(holesIndex);
                    for(int holeLoc = 0; holeLoc < holesArea.length(); holeLoc++){
                        double locLat = holesArea.getJSONObject(holeLoc).getDouble("latitude");
                        double locLong = holesArea.getJSONObject(holeLoc).getDouble("longitude");
                        holes.add(new GeoPoint(locLat, locLong));
                    }
                    holesList.add(new ArrayList<GeoPoint>(holes));
                    holes.clear();
                }
                playfieldPolygon.setPoints(playField);
                playfieldPolygon.setHoles(holesList);
            }
        } catch (JSONException e) {
            e.printStackTrace();
        }

        //TODO: method om map te focussen op center van playfield
        osmMap.getController().setCenter(new GeoPoint(51.6890463, 5.3035104));
    }

    public void updatePlayerOnMap(double locLat, double locLong){
        GeoPoint ownLoc = new GeoPoint(locLat, locLong);
        playerMarker.setPosition(ownLoc);
        osmMap.postInvalidate();

//        Map kan niet meer bewogen worden als center steeds wordt gecalled
//        osmMap.getController().setCenter(new GeoPoint(locLat, locLong));
    }

    public void setJail(JSONObject result){
        try {
            double locLat = result.getDouble("latitude");
            double locLong = result.getDouble("longitude");
            GeoPoint jailLoc = new GeoPoint(locLat, locLong);
            jailMarker.setPosition(jailLoc);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }
}
