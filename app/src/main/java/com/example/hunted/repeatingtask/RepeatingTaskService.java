package com.example.hunted.repeatingtask;

import android.app.Service;
import android.content.Intent;
import android.os.Binder;
import android.os.IBinder;
import android.util.Log;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicBoolean;

import static java.lang.Thread.sleep;

public class RepeatingTaskService extends Service {
    //private final String URL = "http://192.168.31.1:3000";
    private final String URL = "http://192.168.1.87:3000";

    private final long DELAY = 200;
    final int CATCH_THIEVES_DISTANCE_METERS = 100;

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
        }
    }

    // REPEATING TASK METHODS

    private void checkArrested(RepeatingTask task) {
        /*TODO API Call doesn't exist yet.
           - should be 'URL + "player/" + id' */
        final String getArrestedUrl = URL + "player";
        StringRequest stringRequest = new StringRequest(Request.Method.GET, getArrestedUrl,
                response -> {
                    //Observable
                    task.notifyObservers(response.length()  + " (count)");
                }, error -> {
            //Bad request :(
            task.notifyObservers("Big oof.");
        }
        );
        queue.add(stringRequest);
    }

    private void checkThievesNearby(RepeatingTask task){
        final String getArrestableThieves = URL + "/player/arrestableThieves/605db7aadecb3667c865c213/" + CATCH_THIEVES_DISTANCE_METERS;
        StringRequest stringRequest = new StringRequest(Request.Method.GET, getArrestableThieves,
                response -> {
                    try {
                        JSONArray obj = new JSONArray(response);

                        //Observable
                        task.notifyObservers(obj);

                    } catch (Throwable t) {
                        Log.e("checkThieveNearby", t.toString());
                    }
                }, error -> {
                Log.d("bla", error.toString());
                //Bad request :frowning:
                task.notifyObservers("Big oof.");
                }
        );
        queue.add(stringRequest);
    }

    @Override
    public void onCreate() {
        repeatingTasks = new ArrayList<>();
        new Thread(runnable).start();
        queue = Volley.newRequestQueue(this);
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