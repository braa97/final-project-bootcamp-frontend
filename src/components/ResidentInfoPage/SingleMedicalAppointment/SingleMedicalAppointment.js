import "../MedicalAppointments/MedicalAppointments.css";
import React, { useState } from "react";
import Utility from "../../../utilities/utility/util";
import DatePickerField from "../DatePicker/DatePicker";
import TextField from "@mui/material/TextField";
import TimePicker from "../TimePicker/TimePicker";
import Box from "@mui/material/Box";

export default function SingleMedicalAppointment({ ma }) {
  const utility = new Utility();

  const [isEditable, setIsEditable] = useState(true);
  const [date, setDate] = useState(utility.dateFormatter(ma.date));
  const [time, setTime] = useState(utility.timeDateFormatter(ma.date));

  const handleTimeChange = (newTime) => {
    setTime(newTime)
  }

  const handleDateChange = (newDate) => {
    setDate(newDate)
  }

  const handleAppointmentEdit = () => {

  }

  return (
    <tr>
      <td>
        <Box>
          <TextField
            disabled={isEditable}
            id="outlined-basic"
            value={ma.typeOfInspection}
            variant="outlined"
          />
        </Box>
        {/* <input value={ma.typeOfInspection} disabled={isEditable} /> */}
      </td>
      <td>
        <DatePickerField
          isEditable={isEditable}
          defaultDate={date}
          handleDateChange={handleDateChange}
        />
      </td>
      <td>
        <TimePicker
          isEditable={isEditable}
          defaultTime={time}
          handleTimeChange={handleTimeChange}
        />

        {/* <input value={utility.timeFormatter(ma.date)} disabled={isEditable} /> */}
      </td>
      <td>
        <span className={`status ${ma.attended ? "green" : "red"}`}></span>
        {ma.attended ? "Attended" : "Not Attended"}
      </td>
      <td>
        <button
          className="action-btn edit"
          onClick={() =>
            isEditable ? setIsEditable(false) : setIsEditable(true)
          }
        >
          {isEditable ? "Edit" : "Save"}
        </button>
        <button className="action-btn delete">Delete</button>
      </td>
    </tr>
  );
}
