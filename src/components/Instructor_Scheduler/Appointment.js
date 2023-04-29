import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";

const useStyles = makeStyles({
  appointment: {
    borderRadius: "4px",
    padding: "10px",
    backgroundColor: "#F6BF99",
    color: "black",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#FFD4A3",
    },
  },
  text: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "1.5",
  },
});

const Appointment = ({ children, style, ...restProps }) => {
  const classes = useStyles();
  return (
    <div className={classes.appointment} style={style} {...restProps}>
      <Chip label={<div className={classes.text}>{children}</div>} />
    </div>
  );
};

export default Appointment;
