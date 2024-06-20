import { NativeModules } from "react-native";

const { ImagePickerModule } = NativeModules;

interface ImagePickerInterface {
  pickImage(): Promise<any>;
}

export default ImagePickerModule as ImagePickerInterface;
