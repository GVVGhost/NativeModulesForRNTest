import { NativeModules } from "react-native";

const { CalendarModule } = NativeModules;

interface CalendarInterface {
  createCalendarEvent(
    name: string,
    location: string,
    myFailureCallback: (error: string) => void,
    mySuccessCallback: (result: string) => void
  ): void;

  promiseTestMethod(
    name: string,
    location: string
  ): Promise<any>;
}

export default CalendarModule as CalendarInterface;
