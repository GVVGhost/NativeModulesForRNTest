import { NativeModules } from "react-native";

const { DeviceInfoModule } = NativeModules;

interface DeviceInfoInterface {
  getDeviceInfo(): Promise<any>;
}

export default DeviceInfoModule as DeviceInfoInterface;
