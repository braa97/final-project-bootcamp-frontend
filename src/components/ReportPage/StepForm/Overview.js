import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ApiManager from "../../../apiManager/apiManager";
import Utility from "../../../utilities/utility/util";
import { AppContext } from "./Context";
import { Checkbox, Container, FormControlLabel, Grid } from "@mui/material";

export default function Confirm() {
  const apiManager = new ApiManager()
  const utility = new Utility()
  const [instructorId, setInstructorId] = useState(null);
  const {
    residentData,
    personalPlans,
    generalActivities,
    generalActivitiesForumInput,
    handleBack,
    apartmentId
  } = useContext(AppContext);

  

  const handleSubmit = async() => {
    const date = new Date()
    let report = {
      residentsSummary: residentData,
      personalPlans: personalPlans,
      generalActivities: generalActivities,
      date: `${utility.convertToISO(date)}Z`,
      apartmentId: apartmentId
    };

    const reportData = {instructorId, report}
    const response = await apiManager.addNewReport(reportData)
    console.log(report);
    alert("Report have been added.")
  };

  useEffect(() => {
    setInstructorId(localStorage.getItem("instructorId"));
  }, []);

  return (
    <>
      <label className="overview-label">Overview</label>
      <h2 className="report-overview-header">Residents Status</h2>
      <Grid className="report-field-grid-container" container spacing={2}>
        {Object.entries(residentData).map(([key, value]) => (
          <Grid className="report-field-grid-container" item xs={12} sm={6}>
            <div className="report-overview-data">
              <label>{key.replace("_", " ")}</label>
              <p>{value}</p>
            </div>
          </Grid>
        ))}
      </Grid>

      <h2 className="report-overview-header">Personal Plans</h2>
      <Grid className="report-field-grid-container" container spacing={2}>
        {Object.entries(personalPlans).map(([key, value]) => (
          <Grid className="report-field-grid-container" item xs={12} sm={6}>
            <div className="report-overview-data">
              <label>{key.charAt(0).toLocaleUpperCase() + key.slice(1)}</label>
              <p>{value}</p>
            </div>
          </Grid>
        ))}
      </Grid>

      <h2 className="report-overview-header">General Activities</h2>
      <Grid className="report-field-grid-container" container spacing={2}>
        {Object.entries(generalActivitiesForumInput).map(([key, value]) => (
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={
                    generalActivities[generalActivitiesForumInput[key].name]
                      ? true
                      : false
                  }
                  color="primary"
                />
              }
              label={generalActivitiesForumInput[key].label}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Confirm &amp; Continue
        </Button>
      </Box>
    </>
  );
}
