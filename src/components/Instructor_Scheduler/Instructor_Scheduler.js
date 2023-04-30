import React, { useEffect, useState, useRef } from "react";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import Typography from "@material-ui/core/Typography";
import { Popover } from "@material-ui/core";

import {
  Scheduler,
  Toolbar,
  MonthView,
  AllDayPanel,
  WeekView,
  DayView,
  ViewSwitcher,
  Appointments,
  AppointmentTooltip,
  AppointmentForm,
  DragDropProvider,
  DateNavigator,
} from "@devexpress/dx-react-scheduler-material-ui";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { orange, indigo, pink } from "@material-ui/core/colors";
import { Event as EventIcon, Cake as CakeIcon } from "@material-ui/icons";
import ApiManager from "../../apiManager/apiManager";
import Appointment from "./Appointment";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";

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
  const [birthdays, setBirthdays] = useState([]);

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
            title: `Shift: ${name.data.apartmentName}`,
            type: "Shift",
            appointmentData: {
              startDate: convertUtcToLocalDate(appointment?.startDate),
              endDate: convertUtcToLocalDate(appointment?.endDate),
              type: "shift",
            },
          };
        })
      );
      setData(appointments);
    };
    const fetchBirthdays = async function () {
      const apiManager = new ApiManager();
      const response = await apiManager.getResidentsbirthdays(
        localStorage.getItem("instructorId")
      );
      const birthdayAppointments = response.map((birthday, index) => {
        const startDate = new Date(birthday.startDate);
        startDate.setFullYear(2023);
        const endDate = new Date(birthday.endDate);
        endDate.setFullYear(2023);

        return {
          id: index,
          startDate: convertUtcToLocalDate(startDate),
          endDate: new Date(convertUtcToLocalDate(endDate).getTime() + 60000),
          title: birthday.residentName + "-" + birthday.apartmentName,
          type: "birthday",
          appointmentData: {
            title: `${birthday.residentName}`,
            type: "birthday",
            startDate: convertUtcToLocalDate(new Date(birthday.startDate)),
            endDate: new Date(2023, 3, 30, 10, 2),
          },
        };
      });
      setBirthdays(birthdayAppointments);
    };
    const fetchInspections = async function () {
      const apiManager = new ApiManager();
      const response = await apiManager.getInspections(
        localStorage.getItem("instructorId")
      );
      const newInspections = response.data.apartments
        .flatMap((apartment) => {
          const apartmentName = apartment.apartmentName;
          return apartment.residents.map((resident) =>
            resident.medicalAppointments.map((inspection) => ({
              id: inspection._id,
              startDate: convertUtcToLocalDate(inspection.date),
              endDate: new Date(
                convertUtcToLocalDate(inspection.date).getTime() + 60000
              ),
              title: `${resident.firstName} ${resident.lastName} - ${inspection.typeOfInspection}`,
              residentName: `${resident.firstName} ${resident.lastName}`,
              apartmentName: apartmentName, // add apartmentName to inspection
              type: "inspection",
              appointmentData: {
                title: `${resident.firstName} ${resident.lastName}`,
                type: "inspection",
                startDate: convertUtcToLocalDate(inspection.date),
                endDate: convertUtcToLocalDate(inspection.date),
              },
            }))
          );
        })
        .flat();

      setInspections(newInspections);
    };

    fetchShifts();
    fetchInspections();
    fetchBirthdays();
  }, []);

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

  function CustomAppointment({
    children,
    style,
    data,
    tooltipContent,
    onAppointmentClick,

    ...restProps
  }) {
    const backgroundColor =
      data.type === "inspection"
        ? orange[500]
        : data.type === "birthday"
        ? pink[500]
        : indigo[500];
    const icon =
      data.type === "inspection" ? (
        <MedicalInformationIcon />
      ) : data.type === "birthday" ? (
        <CakeIcon />
      ) : (
        <EventIcon />
      );
    const handleClick = () => {
      onAppointmentClick(data);
    };
    return (
      <div
        style={{
          ...style,
          backgroundColor,
          color: "#fff",
          padding: "5px",
          borderRadius: "3px",
          boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.15)",
          cursor: "pointer",
        }}
        data={data}
        onClick={handleClick}
        {...restProps}
      >
        <span>
          {data.type}
          {icon}
        </span>
        {/* {children} */}
      </div>
    );
  }

  const useStyles = makeStyles((theme) => ({
    popover: {
      padding: theme.spacing(2),
      width: 400, // Adjust the width as per your requirement
      backgroundColor: ({ type }) =>
        type === "inspection"
          ? "orange"
          : type === "birthday"
          ? "pink"
          : "lightblue",
      color: "#fff",
    },
    title: {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(1),
    },
    type: {
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(1),
    },
    notes: {
      whiteSpace: "pre-wrap",
      marginBottom: theme.spacing(1),
    },
    dates: {
      color: theme.palette.text.secondary,
    },
  }));

  function CustomTooltip({ appointmentData, handleCloseTooltip, openTooltip }) {
    const classes = useStyles({ type: appointmentData.type });

    const handleClose = () => {
      handleCloseTooltip();
    };

    return (
      <Popover
        open={Boolean(openTooltip)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className={classes.popover}>
          <Typography variant="subtitle1" className={classes.title}>
            {appointmentData.title}
          </Typography>
          <Typography variant="body2" className={classes.type}>
            {appointmentData.title}
          </Typography>
          <Typography variant="body2" className={classes.notes}>
            {appointmentData.notes}
          </Typography>
          <Typography variant="body2" className={classes.dates}>
            {`Start: ${appointmentData.startDate.toLocaleString()}`}
          </Typography>
          <Typography variant="body2" className={classes.dates}>
            {`End: ${appointmentData.endDate.toLocaleString()}`}
          </Typography>
        </div>
      </Popover>
    );
  }
  const [customTooltipData, setCustomTooltipData] = useState(null);
  const [openTooltip, setOpenTooltip] = useState(false);

  const handleAppointmentClick = (data) => {
    setCustomTooltipData(data);
    setOpenTooltip(true);
  };

  const handleCloseTooltip = () => {
    setCustomTooltipData(null);
    setOpenTooltip(false);
  };
  return (
    <Paper>
      <Scheduler data={[...data, ...inspections, ...birthdays]}>
        <ViewState defaultCurrentDate={new Date().toDateString()} />
        <EditingState onCommitChanges={commitChanges} />
        <IntegratedEditing />

        <MonthView />
        <WeekView startDayHour={8} endDayHour={24}></WeekView>
        <DayView startDayHour={8} endDayHour={24} />
        <Toolbar />
        <ViewSwitcher />
        <Appointments
          appointmentComponent={(props) => (
            <CustomAppointment
              {...props}
              onAppointmentClick={handleAppointmentClick}
            />
          )}
        />
        {openTooltip ? (
          <CustomTooltip
            appointmentData={customTooltipData}
            handleCloseTooltip={handleCloseTooltip}
            openTooltip={openTooltip}
          />
        ) : null}
        <AppointmentForm />
        <DragDropProvider />
        <DateNavigator />
      </Scheduler>
    </Paper>
  );
}

export default SchedulerDemo;
