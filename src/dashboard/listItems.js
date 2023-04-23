import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { Home as HomeIcon } from "@mui/icons-material";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

// export const mainListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Main{" "}
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Dashboard" />
//     </ListItemButton>
//   </React.Fragment>
// );

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Lists{" "}
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <PeopleIcon />
//       </ListItemIcon>
//       <ListItemText primary="Residents" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <HomeIcon />
//       </ListItemIcon>
//       <ListItemText primary="Apartments" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <CalendarMonthOutlinedIcon />
//       </ListItemIcon>
//       <ListItemText primary="Appointments" />
//     </ListItemButton>
//   </React.Fragment>
// );
// export const thirdListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Services
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <VaccinesIcon />
//       </ListItemIcon>
//       <ListItemText primary="Medication" />
//     </ListItemButton>
//   </React.Fragment>
// );
// export const fourthListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Useful
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <BarChartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Stats" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <VaccinesIcon />
//       </ListItemIcon>
//       <ListItemText primary="visualization" />
//     </ListItemButton>
//   </React.Fragment>
// );
// export const fifthListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       User
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AccountCircleIcon />
//       </ListItemIcon>
//       <ListItemText primary="Profile" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <LogoutIcon alt="Logout" />
//       </ListItemIcon>
//       <ListItemText primary="Logout" />
//     </ListItemButton>
//   </React.Fragment>
// );
export const Sidebar = ({ setSelectedItem }) => {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Main{" "}
      </ListSubheader>
      <ListItemButton onClick={() => setSelectedItem("Dashboard")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListSubheader component="div" inset>
        Lists{" "}
      </ListSubheader>
      <ListItemButton onClick={() => setSelectedItem("Residents")}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Residents" />
      </ListItemButton>
      <ListItemButton onClick={() => setSelectedItem("Apartments")}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Apartments" />
      </ListItemButton>
      <ListItemButton onClick={() => setSelectedItem("Appointments")}>
        <ListItemIcon>
          <CalendarMonthOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Appointments" />
      </ListItemButton>
      <ListSubheader component="div" inset>
        Services
      </ListSubheader>
      <ListItemButton onClick={() => setSelectedItem("Medication")}>
        <ListItemIcon>
          <VaccinesIcon />
        </ListItemIcon>
        <ListItemText primary="Medication" />
      </ListItemButton>
      <ListSubheader component="div" inset>
        Useful
      </ListSubheader>
      <ListItemButton onClick={() => setSelectedItem("Stats")}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Stats" />
      </ListItemButton>
      <ListItemButton onClick={() => setSelectedItem("Visualization")}>
        <ListItemIcon>
          <VaccinesIcon />
        </ListItemIcon>
        <ListItemText primary="visualization" />
      </ListItemButton>
      <ListSubheader component="div" inset>
        User
      </ListSubheader>
      <ListItemButton onClick={() => setSelectedItem("Profile")}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
      <ListItemButton alt="Logout" onClick={() => setSelectedItem("Logout")}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </React.Fragment>
  );
};
