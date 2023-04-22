import "../MedicalAppointments/MedicalAppointments.css";
import React, { useState } from "react";
import Utility from "../../../utilities/utility/util";
import DatePickerField from "../DatePicker/DatePicker";
import TextField from "@mui/material/TextField";
import TimePicker from "../TimePicker/TimePicker";
import Box from "@mui/material/Box";
import ApiManager from "../../../apiManager/apiManager";
import DeleteAppointmentDialog from "../DeleteAppointmentDialog/DeleteAppointmentDialog";

<<<<<<< HEAD
export default function SingleMedicalAppointment({
  appointment,
  handleDelete,
  appointmentId,
}) {
=======
export default function SingleMedicalAppointment({ appointment, handleDeleteAppointment, appointmentId }) {
>>>>>>> 164caaaad81e9e8ce573097055c98c57e99bd418
  const utility = new Utility();
  const apiManager = new ApiManager();
  const [isInputFieldsDisabled, setInputFieldsDisabled] = useState(true);
<<<<<<< HEAD
  const [medicalAppointment, setMedicalAppointment] = useState(appointment);
  const [editSaveButton, setEditSaveButton] = useState("Edit");
  const [date, setDate] = useState(
    utility.dateFormatter(medicalAppointment.date)
  );
  const [time, setTime] = useState(
    utility.timeFormatter(medicalAppointment.time)
  );
  const [inspection, setInspection] = useState(
    medicalAppointment.typeOfInspection
  );
=======
  const [medicalAppointment, setMedicalAppointment] = useState(appointment)
  const [editSaveButton, setEditSaveButton] = useState("Edit")
  const [date, setDate] = useState(utility.dateFormatter(medicalAppointment.date));
  const [time, setTime] = useState(utility.timeFormatter(medicalAppointment.time));
>>>>>>> 164caaaad81e9e8ce573097055c98c57e99bd418

  const updateAppointment = async (id, object) => {
    let response = await apiManager.editMedicalAppointment(id, object);
    setMedicalAppointment(response.data);
  };

  const handleTimeChange = (newTime) => {
    try {
      setTime(utility.timeFormatter(newTime.$d));
    }
    catch(error) {
      console.log(error);
    }
  };

  const setInspectionType = (value) => {
    let newMedicalAppointment = {...medicalAppointment}
    newMedicalAppointment.typeOfInspection = value
    setMedicalAppointment(newMedicalAppointment)
  }

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
<<<<<<< HEAD
        let editedAppointment = {};
        editedAppointment.date = utility.convertToIsoDateFormat(
          `${date} ${time}`
        );
        editedAppointment.typeOfInspection = inspection;
        updateAppointment(appointmentId, editedAppointment);
        setInputFieldsDisabled(true);
        setEditSaveButton("Edit");
      } catch (error) {
=======
        let editedAppointment = {}
        editedAppointment.date = utility.convertToIsoDateFormat(`${date} ${time}`)
        editedAppointment.typeOfInspection = medicalAppointment.typeOfInspection
        updateAppointment(appointmentId, editedAppointment)
        setInputFieldsDisabled(true)
        setEditSaveButton("Edit")
      }
      catch (error) {
>>>>>>> 164caaaad81e9e8ce573097055c98c57e99bd418
        console.log(error);
      }
    }
  };

  return (
    <tr>
      {isInputFieldsDisabled ? (
        <td>{medicalAppointment.typeOfInspection}</td>
      ) : (
        <td>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              disabled={isInputFieldsDisabled}
              id="outlined-basic"
              value={medicalAppointment.typeOfInspection}
              onChange={(event) => setInspectionType(event.target.value)}
              variant="outlined"
            />
          </Box>
        </td>
      )}
      {isInputFieldsDisabled ? (
        <td>{date}</td>
      ) : (
        <td>
          <DatePickerField
            defaultDate={utility.dateFormatter(medicalAppointment.date)}
            handleDateChange={handleDateChange}
          />
        </td>
      )}
      {isInputFieldsDisabled ? (
        <td>{utility.timeFormatter(medicalAppointment.date)}</td>
      ) : (
        <td>
          <TimePicker
            defaultTime={medicalAppointment.date}
            handleTimeChange={handleTimeChange}
          />
        </td>
      )}

      <td>
        <span
          className={`status ${medicalAppointment.attended ? "green" : "red"}`}
        ></span>
        {medicalAppointment.attended ? "Attended" : "Not Attended"}
      </td>
      <td>
        <button className="action-btn edit" onClick={handleAppointmentEdit}>
          {editSaveButton}
        </button>
        {/* {!ma.attended ?  <button className="action-btn " onClick={event =>handleAttendClick(ma)}>Attend</button>:<div></div>} */}

<<<<<<< HEAD
        <DeleteAppointmentDialog
          handleDelete={handleDelete}
          appointmentId={appointmentId}
        />
=======
        <DeleteAppointmentDialog handleDeleteAppointment={handleDeleteAppointment} appointmentId={appointmentId} />
>>>>>>> 164caaaad81e9e8ce573097055c98c57e99bd418
      </td>
    </tr>
  );
}
