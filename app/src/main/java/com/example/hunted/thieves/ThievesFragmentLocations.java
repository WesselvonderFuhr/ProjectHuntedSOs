package com.example.hunted.thieves;

import android.content.Context;
import android.graphics.Color;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.example.hunted.R;

import org.osmdroid.config.Configuration;
import org.osmdroid.tileprovider.tilesource.TileSourceFactory;
import org.osmdroid.util.GeoPoint;
import org.osmdroid.views.MapView;
import org.osmdroid.views.overlay.Polygon;

import java.util.ArrayList;
import java.util.List;

public class ThievesFragmentLocations extends Fragment {
    private TextView tvIsArrested;
    private MapView map = null;

    private final int REQUEST_PERMISSIONS_REQUEST_CODE = 1;

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

        Context ctx = this.getActivity().getApplicationContext();
        Configuration.getInstance().setUserAgentValue(ctx.getPackageName());

        map = getView().findViewById(R.id.mapView);
        map.setTileSource(TileSourceFactory.MAPNIK);
        map.getController().setZoom(19.0);

        map.getController().setCenter(new GeoPoint(51.6890463, 5.3035104));

        ArrayList points = new ArrayList<>();
        points.add(new GeoPoint(51.6896881, 5.3021801));
        points.add(new GeoPoint(51.6883945, 5.3026468));
        points.add(new GeoPoint(51.6889864, 5.3051680));
        points.add(new GeoPoint(51.6899142, 5.3043956));
        points.add(new GeoPoint(51.6896881, 5.3021801));

        List<List<GeoPoint>> holes = new ArrayList<>();

        List<GeoPoint> h1 = new ArrayList<GeoPoint>();
        h1.add(new GeoPoint( 51.6892059, 5.3037223));
        h1.add(new GeoPoint( 51.6891909, 5.3033575));
        h1.add(new GeoPoint( 51.6889665, 5.3033468));
        h1.add(new GeoPoint( 51.6889465, 5.3037760));
        h1.add(new GeoPoint( 51.6892059, 5.3037223));
        holes.add(h1);

        Polygon p = new Polygon();
        p.setPoints(points);
        p.setHoles(holes);

        Polygon p2 = new Polygon();
        points.clear();
        points.add(new GeoPoint(51.6880087, 5.3001952));
        points.add(new GeoPoint(51.6868979, 5.2994978));
        points.add(new GeoPoint(51.6866917, 5.3022873));
        points.add(new GeoPoint(51.6877559, 5.3025234));
        points.add(new GeoPoint(51.6880087, 5.3001952));
        p2.setPoints(points);

        p.getFillPaint().setColor(Color.BLUE);
        p.getFillPaint().setAlpha(20);
        p2.getFillPaint().setColor(Color.RED);
        p2.getFillPaint().setAlpha(20);

        map.getOverlays().add(p);
        map.getOverlays().add(p2);
    }

    public void isArrested(){
        tvIsArrested.setText(getResources().getString(R.string.label_thieves_arrested));
    }
}
