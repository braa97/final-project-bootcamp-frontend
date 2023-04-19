import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Box from '@mui/material/Box';
// import './AddMedicalAppointment.css'

export default function AddMedicalAppointment() {
  const [open, setOpen] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState(dayjs(new Date()));
    console.log(appointmentDate);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Medical Appointment</DialogTitle>
        <DialogContent>
            
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Type Of Inspection"
            fullWidth

            variant="standard"
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker 
            value={appointmentDate}
            onChange={(newValue) => setAppointmentDate(newValue)}
             />
          </LocalizationProvider>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
