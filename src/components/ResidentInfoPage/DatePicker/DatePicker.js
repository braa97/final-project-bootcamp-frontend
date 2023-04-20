import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

export default function DatePickerField({defaultDate, handleDateChange}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["MobileDatePicker"]}>
          <MobileDatePicker label={defaultDate} onChange={(value) => handleDateChange(value)} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
