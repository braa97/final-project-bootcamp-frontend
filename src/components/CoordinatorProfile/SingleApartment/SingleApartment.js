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
  const utility = new Utility();
  const apiManager = new ApiManager();
  const [isInputFieldsDisabled, setInputFieldsDisabled] = useState(true);
 // const [medicalAppointment, setMedicalAppointment] = useState(appointment);
  const [editSaveButton, setEditSaveButton] = useState("Edit");
  /*const [date, setDate] = useState(
    utility.dateFormatter(medicalAppointment.date)
  );
  const [time, setTime] = useState(
    utility.timeFormatter(medicalAppointment.time)
  );*/

  /*const updateAppointment = async (id, object) => {
    let response = await apiManager.editMedicalAppointment(id, object);
    setMedicalAppointment(response.data);
  };

  const handleTimeChange = (newTime) => {
    try {
      setTime(utility.timeFormatter(newTime.$d));
    } catch (error) {
      console.log(error);
    }
  };

  const setInspectionType = (value) => {
    let newMedicalAppointment = { ...medicalAppointment };
    newMedicalAppointment.typeOfInspection = value;
    setMedicalAppointment(newMedicalAppointment);
  };

  const handleDateChange = (newDate) => {
    setDate(utility.dateFormatter(newDate.$d));
  };

  const handleAppointmentEdit = () => {
    if (editSaveButton === "Edit") {
      setEditSaveButton("Save");
      setInputFieldsDisabled(false);
    }
    if (editSaveButton === "Save") {
      try {
        let editedAppointment = {};
        editedAppointment.date = utility.convertToIsoDateFormat(
          `${date} ${time}`
        );
        editedAppointment.typeOfInspection =
          medicalAppointment.typeOfInspection;
        updateAppointment(appointmentId, editedAppointment);
        setInputFieldsDisabled(true);
        setEditSaveButton("Edit");
      } catch (error) {
        console.log(error);
      }
    }
  };*/

  return (
    <tr>
      <td>{name}</td>
      <td>{address}</td>
      <td>{budget}</td>
      <td>{numberOfResidents}</td>
    </tr>
  );
}
