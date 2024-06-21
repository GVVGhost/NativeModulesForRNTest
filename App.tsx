import React, { useEffect } from "react";
import {
  AppState,
  AppStateStatus,
  DeviceEventEmitter,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import NewModuleButton from "./NewModuleButton";

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  let currentAppState: AppStateStatus = AppState.currentState;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener(
      "TimeEvent",
      (event: any) => {
        console.log("Received event: ", event?.currentTime);
      }
    );

    const appStateListener = AppState.addEventListener("change", state => {
      console.log('Current state: ', currentAppState);
      console.log('Received state: ', state);
      currentAppState = state;
    });

    return () => {
      subscription.remove();
      appStateListener.remove()
    };
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <NewModuleButton />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
