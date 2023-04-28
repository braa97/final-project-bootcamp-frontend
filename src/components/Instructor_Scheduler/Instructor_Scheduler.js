import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import Typography from "@material-ui/core/Typography";

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
import { makeStyles } from "@material-ui/core/styles";
import { orange, blue, pink } from "@material-ui/core/colors";
import { Event as EventIcon, Cake as CakeIcon } from "@material-ui/icons";
import ApiManager from "../../apiManager/apiManager";
import Appointment from "./Appointment";

function SchedulerDemo() {
  // Component state
  function convertUtcToLocalDate(utcDateString) {
    if (!utcDateString) {
      return null;
    }
    const utcDate = new Date(utcDateString);
    const localDate = new Date(
      utcDate.getTime() + utcDate.getTimezoneOffset() * 60 * 1000
    );
    return localDate;
  }
  const [data, setData] = useState([]);
  const [inspections, setInspections] = useState([]);

  useEffect(() => {
    const fetchShifts = async function () {
      const apiManager = new ApiManager();
      const response = await apiManager.getInstructorShifts(
        localStorage.getItem("instructorId")
      );
      const appointments = await Promise.all(
        response.data.map(async (appointment) => {
          const name = await apiManager.getApartmentName(appointment.apartment);
          return {
            ...appointment,
            startDate: convertUtcToLocalDate(appointment?.startDate),
            endDate: convertUtcToLocalDate(appointment?.endDate),
            title: name.data.apartmentName,
          };
        })
      );
      setData(appointments);
    };
    const fetchInspections = async function () {
      const apiManager = new ApiManager();
      const response = await apiManager.getInspections(
        localStorage.getItem("instructorId")
      );
      console.log(response.data);
      const newInspections = response.data.apartments
        .flatMap((apartment) => {
          const apartmentName = apartment.apartmentName;
          return apartment.residents.map((resident) =>
            resident.medicalAppointments.map((inspection) => ({
              id: inspection._id,
              startDate: convertUtcToLocalDate(inspection.date),
              endDate: convertUtcToLocalDate(inspection.date),
              title: `${resident.firstName} ${resident.lastName} - ${inspection.typeOfInspection}`,
              residentName: `${resident.firstName} ${resident.lastName}`,
              apartmentName: apartmentName, // add apartmentName to inspection
              type: "inspection",
            }))
          );
        })
        .flat();

      setInspections(newInspections);
    };

    fetchShifts();
    fetchInspections();
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
  // const AppointmentIcon = ({ data, children }) => {
  //   console.log(children);
  //   if (data?.type === "inspection") {
  //     return <EventIcon />;
  //   } else if (data?.type === "birthday") {
  //     return <CakeIcon />;
  //   } else {
  //     return <EventIcon />;
  //   }
  // };
  const AppointmentIcon = ({ appointmentData }) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "5px",
      }}
    >
      <EventIcon />
      <Typography variant="body2">
        {appointmentData?.startDate?.getHours()}
      </Typography>
    </div>
  );

  const CustomAppointment = ({ children, style, data, ...restProps }) => (
    <AppointmentTooltip.Content
      {...restProps}
      style={{
        ...style,
        backgroundColor:
          data?.type === "inspection"
            ? "#FF9900"
            : data?.type === "birthday"
            ? "#F48FB1"
            : "#B3E5FC",
        color: "white",
        borderRadius: "8px",
        padding: "8px",
        fontSize: "14px",
        lineHeight: "1.5",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
      }}
    >
      <AppointmentIcon appointmentData={data} children={children} />
      {children}
    </AppointmentTooltip.Content>
  );

  // Render the Scheduler component
  console.log([...data, ...inspections]);
  return (
    <Paper>
      <Scheduler data={[...data, ...inspections]}>
        <ViewState defaultCurrentDate={new Date().toDateString()} />
        <EditingState onCommitChanges={commitChanges} />
        <IntegratedEditing />

        <MonthView></MonthView>
        <WeekView startDayHour={8} endDayHour={24}></WeekView>
        <DayView startDayHour={8} endDayHour={24} />
        <Toolbar />
        <ViewSwitcher />

        <Appointments
        // appointmentComponent={CustomAppointment}
        // appointmentContentTemplate={AppointmentIcon}
        // other props
        />
        {/* <CustomAppointment data={[...data, ...inspections]} /> */}
        <AppointmentTooltip showCloseButton />
        <AppointmentForm />
        <DragDropProvider />
        <DateNavigator />
      </Scheduler>
    </Paper>
  );
}

export default SchedulerDemo;
