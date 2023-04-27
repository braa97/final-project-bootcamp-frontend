import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Toolbar,
  MonthView,
  WeekView,
  DayView,
  ViewSwitcher,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  DragDropProvider,
  DateNavigator,
} from "@devexpress/dx-react-scheduler-material-ui";

import ApiManager from "../../apiManager/apiManager";
import Appointment from "./Appointment";
export const TimeScale = () => {
  return (
    <Scheduler.Root>
      <Scheduler.Container>
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${i * 60}px`,
              left: "5px",
              width: "50px",
              height: "60px",
              border: "1px solid lightgray",
              fontSize: "12px",
              textAlign: "center",
              paddingTop: "5px",
            }}
          >
            {`${i < 10 ? "0" + i : i}:00`}
          </div>
        ))}
      </Scheduler.Container>
    </Scheduler.Root>
  );
};

function SchedulerDemo() {
  // Component state
  function convertUtcToLocalDate(utcDateString) {
    const utcDate = new Date(utcDateString);
    const localDate = new Date(
      utcDate.getTime() + utcDate.getTimezoneOffset() * 60 * 1000
    );
    return localDate;
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchShifts = async function () {
      const apiManager = new ApiManager();
      const response = await apiManager.getInstructorShifts(
        localStorage.getItem("instructorId")
      );
      const appointments = await Promise.all(
        response.data.map(async (appointment) => {
          const name = await apiManager.getApartmentName(appointment.apartment);
          console.log(name);
          return {
            ...appointment,
            startDate: convertUtcToLocalDate(appointment.startDate),
            endDate: convertUtcToLocalDate(appointment.endDate),
            title: name.data.apartmentName,
          };
        })
      );
      setData(appointments);
    };
    fetchShifts();
  }, []);

  // Event handlers
  const commitChanges = ({ added, changed, deleted }) => {
    setData((prevData) => {
      let newData = [...prevData];

      if (added) {
        newData = [...newData, added];
      }

      if (changed) {
        newData = newData.map((item) =>
          changed[item.id] ? { ...item, ...changed[item.id] } : item
        );
      }

      if (deleted) {
        newData = newData.filter((item) => item.id !== deleted);
      }

      return newData;
    });
  };

  // Render the Scheduler component
  return (
    <Paper>
      <Scheduler data={data}>
        <ViewState defaultCurrentDate={new Date().toDateString()} />
        <EditingState onCommitChanges={commitChanges} />
        <IntegratedEditing />

        <MonthView>
          <TimeScale /> // add TimeScale component to MonthView
        </MonthView>
        <WeekView></WeekView>
        <DayView />
        <Toolbar />
        <ViewSwitcher />
        <Appointments />
        <AppointmentTooltip showCloseButton />
        <AppointmentForm />
        <DragDropProvider />
        <DateNavigator />
      </Scheduler>
    </Paper>
  );
}

export default SchedulerDemo;
