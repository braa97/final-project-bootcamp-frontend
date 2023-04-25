import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import InstructorDialog from "./InctructoDialog";

const CustomButton = styled(Button)({
  background: "#1E1E1E",
  borderRadius: 3,
  border: 0,
  color: "#FFFFFF",
  height: 48,
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
});

const BeautifulButton = ({ text, coordinatorId, fetchInstructors }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CustomButton
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        {text}
      </CustomButton>
      <InstructorDialog
        handleClose={handleClose}
        coordinatorId={coordinatorId}
        open={open}
        fetchInstructors={fetchInstructors}
      />
    </div>
  );
};

export default BeautifulButton;
