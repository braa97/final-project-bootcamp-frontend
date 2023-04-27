import React, { useState } from "react";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler as SchedulerBase,
  DayView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Scheduler = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  const handleDateChange = (ranges) => {
    setDateRange([ranges.selection]);
  };
  const theme = createMuiTheme({ palette: { type: "light", primary: blue } });
  return (
    <MuiThemeProvider theme={theme}>
      <SchedulerBase data={[]} height={660}>
        <ViewState
          defaultCurrentDate={currentDate}
          onCurrentDateChange={setCurrentDate}
          defaultCurrentViewName="Day"
        />
        <DayView startDayHour={9} endDayHour={19} />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <DateRangePicker
          ranges={dateRange}
          onChange={handleDateChange}
          moveRangeOnFirstSelection={false}
          showSelectionPreview={true}
          months={2}
          direction="horizontal"
        />
        <Appointments />
      </SchedulerBase>
    </MuiThemeProvider>
  );
};

export default Scheduler;
