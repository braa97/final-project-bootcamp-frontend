// // import React from "react";
// // import { makeStyles } from "@material-ui/core/styles";
// // import { Chip } from "@material-ui/core";

// // const useStyles = makeStyles({
// //   appointment: {
// //     borderRadius: "4px",
// //     padding: "10px",
// //     backgroundColor: "#F6BF99",
// //     color: "black",
// //     cursor: "pointer",
// //     "&:hover": {
// //       backgroundColor: "#FFD4A3",
// //     },
// //   },
// //   text: {
// //     overflow: "hidden",
// //     whiteSpace: "nowrap",
// //     textOverflow: "ellipsis",
// //     fontSize: "14px",
// //     fontWeight: "bold",
// //     lineHeight: "1.5",
// //   },
// // });

// // const Appointment = ({ children, style, ...restProps }) => {
// //   const classes = useStyles();
// //   return (
// //     <div className={classes.appointment} style={style} {...restProps}>
// //       <Chip label={<div className={classes.text}>{children}</div>} />
// //     </div>
// //   );
// // };

// // export default Appointment;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
// import { formatDate } from "@devexpress/dx-core";
// const useStyles = makeStyles((theme) => ({
//   appointment: {
//     borderRadius: "8px",
//     padding: "10px",
//     backgroundColor: "#f1f1f1",
//     color: "#333",
//     cursor: "pointer",
//     "&:hover": {
//       backgroundColor: "#e2e2e2",
//     },
//   },
//   title: {
//     fontSize: "16px",
//     fontWeight: "bold",
//   },
//   location: {
//     fontSize: "12px",
//     fontStyle: "italic",
//   },
//   textContainer: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "flex-start",
//   },
// }));

// const CustomAppointment = ({ children, data, formatDate, ...restProps }) => {
//   console.log(data);
//   const classes = useStyles();
//   const formattedStartDate = formatDate(data.startDate, {
//     hour: "numeric",
//     minute: "numeric",
//   });
//   const formattedEndDate = formatDate(data.endDate, {
//     hour: "numeric",
//     minute: "numeric",
//   });

//   return (
//     <AppointmentTooltip.Content {...restProps} data={data}>
//       <div className={classes.appointment}>
//         <div className={classes.textContainer}>
//           <div className={classes.title}>{data.title}</div>
//           <div className={classes.location}>{data.location}</div>
//           <div>
//             {data.startDate} - {data.endDate}
//           </div>
//         </div>
//       </div>
//     </AppointmentTooltip.Content>
//   );
// };

// export default CustomAppointment;
