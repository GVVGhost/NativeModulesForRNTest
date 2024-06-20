package com.nativemodulesforrntest

import android.os.Handler
import android.os.Looper
import android.util.Log
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule
import kotlinx.coroutines.Runnable

class TimeModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    private var listenerCount = 0
    private val handler = Handler(Looper.getMainLooper())
    private lateinit var runnable: Runnable
    override fun getName(): String = "TimeModule"

    private fun sendEvent(
        reactContext: ReactContext,
        eventName: String,
        params: WritableMap?
    ) {
        reactContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(eventName, params)
    }



    @ReactMethod
    fun addListener(eventName: String) {
        Log.d("TimeModule", "invoked addListener with event name: $eventName")
        if (listenerCount == 0) {
            startSendingTime()
        }
        listenerCount += 1
    }

    @ReactMethod
    fun removeListeners(count: Int){
        Log.d("TimeModule", "invoked removeListeners with count: $count")
        listenerCount -= count
        if (listenerCount == 0) {
            stopSendingTime()
        }
    }

    private fun startSendingTime(){
        runnable = object : Runnable {
            override fun run() {
                val params = Arguments.createMap().apply {
                    putString("currentTime", System.currentTimeMillis().toString())
                }
                sendEvent(reactApplicationContext, "TimeEvent", params)
                handler.postDelayed(this, 10000)
            }
        }
        handler.post(runnable)
    }

    private fun stopSendingTime(){
        handler.removeCallbacks(runnable)
    }


//    val params = Arguments.createMap().apply {
//        putString("eventProperty", "someValue")
//    }
//    sendEvent(reactContext, "EventReminder", params)
}