package com.example.hunted.repeatingtask;

import android.app.Service;
import android.content.Intent;
import android.os.Binder;
import android.os.IBinder;
import android.util.Log;

import com.android.volley.AuthFailureError;
import com.android.volley.NetworkResponse;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.ServerError;
import com.android.volley.toolbox.HttpHeaderParser;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.hunted.R;

import org.json.JSONObject;
import org.json.JSONArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicBoolean;

import static java.lang.Thread.sleep;

public class RepeatingTaskService extends Service {
	
    private String URL;
    private String token;
	
    private final long DELAY = 200;
    final int CATCH_THIEVES_DISTANCE_METERS = 5;

    private RequestQueue queue;
    private ArrayList<RepeatingTask> repeatingTasks;

    private AtomicBoolean working = new AtomicBoolean(true);

    private final Runnable runnable = () -> {
        while(working.get()) {
            long now = System.currentTimeMillis();
            for(RepeatingTask repeatingTask : repeatingTasks){
                if(repeatingTask.getNextRepeatMillis() <= now){
                    // Start repeating task
                    this.startRepeatingTask(repeatingTask);
                    // Update next repeat
                    repeatingTask.setNextRepeatMillis(now);
                }
            }
            try {
                sleep(DELAY);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    };

    public void addRepeatingTask(RepeatingTask repeatingTask){
        this.repeatingTasks.add(repeatingTask);
    }

    public void removeRepeatingTask(RepeatingTask repeatingTask){
        for(RepeatingTask repeatingTaskItem : repeatingTasks){
            if(repeatingTaskItem.getTask() == repeatingTask.getTask()){
                repeatingTasks.remove(repeatingTaskItem);
            }
        }
    }

    // Switch statement
    private void startRepeatingTask(RepeatingTask task){
        switch(task.getTask()){
            case CHECK_ARRESTED:
                this.checkArrested(task);
                break;
            case CHECK_THIEF_NEARBY:
                this.checkThievesNearby(task);
                break;
            case CHECK_GAME_STATUS:
                this.checkGameStatus(task);
                break;
            case CHECK_MESSAGES:
                this.checkMessages(task);
                break;
        }
    }

    // REPEATING TASK METHODS

    private void checkMessages(RepeatingTask task){
        final String getMessagesURL = URL + "message/";
        StringRequest stringRequest = new StringRequest(Request.Method.GET, getMessagesURL,
                response -> {
                    try {
                        JSONArray obj = new JSONArray(response);
                        //Observable
                        task.notifyObservers(obj);
                    } catch (Throwable t) {
                        task.notifyObservers(R.string.label_service_status_fail);
                    }
                }, error -> {
            NetworkResponse response = error.networkResponse;
            if (error instanceof ServerError && response != null) {
                try {
                    String res = new String(response.data, HttpHeaderParser.parseCharset(response.headers, "utf-8"));
                    task.notifyObservers(res);
                } catch (Exception e) {
                    task.notifyObservers(R.string.label_service_server_fail);
                }
            }
        }) {
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String> headers = new HashMap<>();
                headers.put("Authorization", "Bearer " + token);
                return headers;
            }
        };
        queue.add(stringRequest);
    }

    private void checkArrested(RepeatingTask task) {
        final String getArrestedUrl = URL + "player/";
        StringRequest stringRequest = new StringRequest(Request.Method.GET, getArrestedUrl,
                response -> {
                    try {
                        Log.d("repeatingtaskservcie", response);
                        response = response.replaceAll("[\\\\]{1}[\"]{1}","\"");
                        response = response.substring(response.indexOf("{"),response.lastIndexOf("}")+1);

                        JSONObject obj = new JSONObject(response);
                        //Observable
                        task.notifyObservers(obj.get("arrested"));
                    } catch (Throwable t) {
                        task.notifyObservers(R.string.label_service_status_fail);
                    }
                }, error -> {
                    NetworkResponse response = error.networkResponse;
                    if (error instanceof ServerError && response != null) {
                        try {
                            String res = new String(response.data, HttpHeaderParser.parseCharset(response.headers, "utf-8"));
                            task.notifyObservers(res);
                        } catch (Exception e) {
                            task.notifyObservers(R.string.label_service_server_fail);
                        }
                    }
        }) {
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String> headers = new HashMap<>();
                headers.put("Authorization", "Bearer " + token);
                return headers;
            }
        };
        queue.add(stringRequest);
    }

    private void checkThievesNearby(RepeatingTask task){
        final String getArrestableThieves = URL + "player/arrestableThieves/" + CATCH_THIEVES_DISTANCE_METERS;
        StringRequest stringRequest = new StringRequest(Request.Method.GET, getArrestableThieves,
                response -> {
                    try {
                        JSONArray obj = new JSONArray(response);
                        //Observable
                        task.notifyObservers(obj);

                    } catch (Throwable t) {
                        task.notifyObservers(R.string.label_service_thief_direction_fail);
                    }
                }, error -> {
                    NetworkResponse response = error.networkResponse;
                    if (error instanceof ServerError && response != null) {
                        try {
                            String res = new String(response.data, HttpHeaderParser.parseCharset(response.headers, "utf-8"));
                            task.notifyObservers(res);
                        } catch (Exception e) {
                            task.notifyObservers(R.string.label_service_thief_loading_fail);
                        }
                    }
                }
        ) {
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String> headers = new HashMap<>();
                headers.put("Authorization", "Bearer " + token);
                return headers;
            }
        };
        queue.add(stringRequest);
    }

    private void checkGameStatus(RepeatingTask task){
        final String getStatus = URL + "game/status";
        StringRequest stringRequest = new StringRequest(Request.Method.GET, getStatus,
                response -> {
                    try {
                        //Observable
                        task.notifyObservers(response);

                    } catch (Throwable t) {
                        task.notifyObservers("error in game status response try");
                    }
                }, error -> {
            NetworkResponse response = error.networkResponse;
            if (error instanceof ServerError && response != null) {
                try {
                    String res = new String(response.data, HttpHeaderParser.parseCharset(response.headers, "utf-8"));
                    task.notifyObservers(res);
                } catch (Exception e) {
                    task.notifyObservers("error checking game status"); //add string
                }
            }
        }
        ) {
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String> headers = new HashMap<>();
                headers.put("Authorization", "Bearer " + token);
                return headers;
            }
        };
        queue.add(stringRequest);
    }

    @Override
    public void onCreate() {
        repeatingTasks = new ArrayList<>();
        URL = getString(R.string.url);
        token = "";
        new Thread(runnable).start();
        queue = Volley.newRequestQueue(this);
    }

    public void setToken(String token){
        this.token = token;
    }

    @Override
    public void onDestroy() {
        working.set(false);
    }

    public class LocalBinder extends Binder {
        public RepeatingTaskService getService() {
            return RepeatingTaskService.this;
        }
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        return START_NOT_STICKY;
    }

    @Override
    public IBinder onBind(Intent intent) {
        return mBinder;
    }

    // This is the object that receives interactions from clients. See RemoteService for a more complete example.
    private final IBinder mBinder = new LocalBinder();
}