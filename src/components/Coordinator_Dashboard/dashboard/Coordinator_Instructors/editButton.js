import React, { useState } from "react";
import {
    IconButton
  } from "@mui/material";
import { Edit } from "@mui/icons-material";
import EditInstructor from "./EditInstructor";

const EditButton = ({instructor, updateInstructor}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton color="primary" aria-label="edit">
            <Edit onClick={handleOpen}/>
          </IconButton>
      
      <EditInstructor
        handleClose={handleClose}
        instructor={instructor}
        open={open}
        updateInstructorState={updateInstructor}
      />
    </div>
  );
};

export default EditButton;
