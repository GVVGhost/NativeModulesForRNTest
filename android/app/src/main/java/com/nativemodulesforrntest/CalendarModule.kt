package com.nativemodulesforrntest

import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.WritableMap
import com.facebook.react.bridge.Arguments
import com.facebook.react.modules.core.DeviceEventManagerModule

class CalendarModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "CalendarModule"

    @ReactMethod
    fun createCalendarEvent(
        name: String,
        location: String,
        myFailureCallback: Callback,
        mySuccessCallback: Callback
    ) {
        val eventId = "eventId"
        if ("123" == name) {
            mySuccessCallback(eventId)
        } else {
            myFailureCallback(eventId)
        }
    }

    @ReactMethod
    fun promiseTestMethod(
        name: String,
        location: String,
        promise: Promise
    ) {
        try {
            val eventId = "promiseTestMethod"
            promise.resolve(eventId)
        } catch (e: Throwable) {
            promise.reject("Create Event Error", e)
        }
    }
}
