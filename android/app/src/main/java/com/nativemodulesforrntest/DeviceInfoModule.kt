package com.nativemodulesforrntest

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class DeviceInfoModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "DeviceInfoModule"

    @ReactMethod
    fun getDeviceInfo(promise: Promise) {
        try {
            val deviceInfo = Arguments.createMap().apply {
                putString("device", android.os.Build.MODEL)
                putString("OS", android.os.Build.VERSION.RELEASE)
            }
            promise.resolve(deviceInfo)
        } catch (e: Exception) {
            promise.reject("Error", e.localizedMessage)
        }
    }
}