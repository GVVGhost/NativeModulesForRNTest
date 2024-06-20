import { Button, View } from "react-native";
import React from "react";
import CalendarModule from "./CalendarModule";
import ImagePickerModule from "./ImagePickerModule";
import DeviceInfoModule from "./DeviceInfoModule";
import TimeModule from "./TimeModule";

const NewModuleButton = () => {
  const onPress1 = () => {
    CalendarModule.createCalendarEvent(
      "123",
      "testLocation",
      error => {
        console.error(`Error found! ${error}`);
      },
      eventId => {
        console.log(`event id ${eventId} returned`);
      }
    );
  };

  const pickImage = async () => {
    try {
      const imagePickerResult = await ImagePickerModule.pickImage();
      console.log(`Created a new event with id ${imagePickerResult}`);
    } catch (e) {
      console.error(e);
    }
  };

  const getDeviceInfo = async () => {
    try {
      const info = await DeviceInfoModule.getDeviceInfo();
      console.log(`Device info ${JSON.stringify(info)}`);
    } catch (e) {
      console.error(e);
    }
  };

  const startTimeModule = () => {
    TimeModule.addListener("Periodic task");
  }
  const stopTimeModule = () => {
    TimeModule.removeListeners(1);
  }

  return (
    <View>
      <Button
        title="Callback invocking"
        color="#841584"
        onPress={onPress1}
      />
      <Button
        title="Image picker (Promise)"
        color="#841584"
        onPress={pickImage}
      />
      <Button
        title="Device info (Promise)"
        color="#841584"
        onPress={getDeviceInfo}
      />
      <Button
        title="Start TimeModule"
        color="#841584"
        onPress={startTimeModule}
      />
      <Button
        title="Stop TimeModule"
        color="#841584"
        onPress={stopTimeModule}
      />
    </View>
  );
};

export default NewModuleButton;
