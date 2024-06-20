import { NativeModules } from "react-native";

const { TimeModule } = NativeModules;

interface TimeInterface {
  addListener(
    eventName: string,
  ): void;

  removeListeners(
    count: number,
  ): void;
}

export default TimeModule as TimeInterface;
