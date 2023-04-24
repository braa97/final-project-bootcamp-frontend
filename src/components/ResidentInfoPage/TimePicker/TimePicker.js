import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import Utility from "../../../utilities/utility/util";
import { useState } from "react";

export default function TimePicker({ defaultTime, handleTimeChange }) {
  const utility = new Utility();
  const [time, setTime] = useState(utility.convertToIsoDateFormat(defaultTime));

  const handleTimeChangeCallBack = (newValue) => {
    handleTimeChange(newValue);
    setTime(newValue);
  };
  try {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["TimeField"]}>
          <TimeField
            label={utility.timeFormatter(defaultTime)}
            value={time}
            onChange={(newValue) => handleTimeChangeCallBack(newValue)}
            format="HH:mm"
          />
        </DemoContainer>
      </LocalizationProvider>
    );
  } catch (error) {
    console.log(error);
  }
}
