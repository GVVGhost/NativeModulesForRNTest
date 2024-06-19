import React from "react";
import { Button, NativeModules, SafeAreaView, ScrollView, StatusBar, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const { CalendarModule } = NativeModules;

const NewModuleButton = () => {
  const onPress = () => {
    CalendarModule.createCalendarEvent("testName", "testLocation");
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

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
