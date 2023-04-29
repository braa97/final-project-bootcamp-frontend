import "./report.css";
import React, { useCallback, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { AppContext } from "./Context";

export default function ThirdStep() {
  const {
    setGeneralActivities,
    generalActivities,
    generalActivitiesForumInput,
    handleBack,
    handleNext,
  } = useContext(AppContext);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setGeneralActivities((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  
  return (
    <>
      <Grid className="report-field-grid-container" container spacing={2}>
        {generalActivitiesForumInput.map((input) => (
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={generalActivities[input.name]}
                  onChange={handleChange}
                  name={input.name}
                  color="primary"
                />
              }
              label={input.label}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </>
  );
}
