import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";
import Select from "@mui/material/Select";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LocalizationProvider,
  DateTimePicker,
  DatePicker,
} from "@mui/x-date-pickers";
import Utility from "../../utilities/utility/util";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import dayjs from "dayjs";
import CoordinatorApiMan from "../../coordinatorApiManager/coordinatorApiMan";

const StaticDateTimePickerLandscape = function ({
  selectedDate,
  setSelectedDate,
  setShift,
  shift,
}) {
  const [startTime, setStartTime] = useState(selectedDate.hour());
  const [endTime, setEndTime] = useState(selectedDate.hour() + 1);
  const utility = new Utility();

  const handleDateChange = (date) => {
    console.log(selectedDate);
    setSelectedDate(date.startOf("day").add(startTime, "hour"));
    const newShift = { ...shift };
    newShift["date"] = utility.dateFormatter(selectedDate.$d);
    setShift(newShift);
  };
  useEffect(() => {
    const newShift = { ...shift };
    newShift["startTime"] = utility.convertToIsoDateFormat(
      `${utility.dateFormatter(selectedDate.$d)} ${startTime}:00`
    );
    newShift["endTime"] = utility.convertToIsoDateFormat(
      `${utility.dateFormatter(selectedDate.$d)} ${endTime}:00`
    );
    newShift["date"] = utility.dateFormatter(selectedDate.$d);
    setShift(newShift);
  }, []);
  const handleStartTimeChange = (e) => {
    const newHour = e.target.value;
    setStartTime(newHour);
    setSelectedDate(selectedDate.startOf("day").add(newHour, "hour"));
    const newShift = { ...shift };
    newShift["startTime"] = utility.convertToIsoDateFormat(
      `${utility.dateFormatter(selectedDate.$d)} ${newHour}:00`
    );
    setShift(newShift);
  };

  const handleEndTimeChange = (e) => {
    const newHour = e.target.value;
    setEndTime(newHour);
    setSelectedDate(selectedDate.startOf("day").add(newHour, "hour"));
    const newShift = { ...shift };
    newShift["endTime"] = utility.convertToIsoDateFormat(
      `${utility.dateFormatter(selectedDate.$d)} ${newHour}:00`
    );
    setShift(newShift);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2} alignItems="center">
        {/* Date picker */}
        <Grid item>
          <DatePicker
            label="Choose a date"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(props) => <TextField {...props} />}
          />
        </Grid>
        {/* Start time picker */}
        <Grid item>
          <Select
            label="Start time"
            onChange={handleStartTimeChange}
            value={startTime}
          >
            {[...Array(24).keys()].map((hour) => (
              <MenuItem key={hour} value={hour}>
                {hour}:00
              </MenuItem>
            ))}
          </Select>
        </Grid>
        {/* End time picker */}
        <Grid item>
          <Select
            label="End time"
            onChange={handleEndTimeChange}
            value={endTime}
          >
            {[...Array(24).keys()].map((hour) => (
              <MenuItem key={hour} value={hour}>
                {hour}:00
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};

const ShiftScheduler = ({ instructorsApartments, coordinatorId }) => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [shift, setShift] = useState({
    date: "",
    startTime: "",
    endTime: "",
  });

  const handleInstructorChange = (event, newValue) => {
    setSelectedInstructor(newValue);

    // Reset selected apartment when instructor changes
    setSelectedApartment(null);
  };

  const handleApartmentChange = (event, newValue) => {
    setSelectedApartment(newValue);
  };

  const handleSubmit = async () => {
    console.log(shift);
    const apiManager = new CoordinatorApiMan();
    const response = await apiManager.addShift({
      coordinatorId,
      selectedInstructor,
      selectedApartment,
      shift,
    });
    if (response) {
      console.log("successed");
    }
    // TODO: Submit shift data to backend
  };
  const instructorSet = new Set();

  const instructors = instructorsApartments
    .filter((instructorApartment) => {
      if (instructorSet.has(instructorApartment.instructorId)) {
        return false;
      }
      instructorSet.add(instructorApartment.instructorId);
      return true;
    })
    .map((instructorApartment) => ({
      id: instructorApartment.instructorId,
      name: instructorApartment.instructorName,
    }));

  const apartments = instructorsApartments.map((instructorApartment) => ({
    id: instructorApartment.apartmentId,
    name: instructorApartment.apartmentName,
    instructorId: instructorApartment.instructorId,
  }));

  // Filter apartments by selected instructor
  const filteredApartments = selectedInstructor
    ? apartments.filter(
        (apartment) => apartment.instructorId === selectedInstructor.id
      )
    : apartments;

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Schedule Shift
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            options={instructors}
            getOptionLabel={(option) => option.name}
            value={selectedInstructor}
            onChange={handleInstructorChange}
            renderInput={(params) => (
              <TextField {...params} label="Instructor" variant="outlined" />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            options={filteredApartments}
            getOptionLabel={(option) => option.name}
            value={selectedApartment}
            onChange={handleApartmentChange}
            renderInput={(params) => (
              <TextField {...params} label="Apartment" variant="outlined" />
            )}
          />
        </Grid>
        {selectedInstructor && selectedApartment && (
          <Grid item xs={12}>
            {/* <DateTimePicker
              label="Date and Time"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}

            /> */}
            <StaticDateTimePickerLandscape
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              setShift={setShift}
              shift={shift}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShiftScheduler;
