//import "../MedicalAppointments/SingleApartment.css";
import React, { useState } from "react";
import Utility from "../../../utilities/utility/util";
/*import DatePickerField from "../DatePicker/DatePicker";
import TextField from "@mui/material/TextField";
import TimePicker from "../TimePicker/TimePicker";
import Box from "@mui/material/Box";*/
import ApiManager from "../../../apiManager/apiManager";
//import DeleteAppointmentDialog from "../DeleteAppointmentDialog/DeleteAppointmentDialog";

export default function SingleApartment({
  name,
  address,
  budget,
  numberOfResidents,
}) {


  return (
    <tr>
      <td>{name}</td>
      <td>{address}</td>
      <td>{budget}</td>
      <td>{numberOfResidents}</td>
    </tr>
  );
}
