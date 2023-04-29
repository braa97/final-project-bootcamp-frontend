import React, { useContext, useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ApiManager from "../../../apiManager/apiManager";
import Utility from "../../../utilities/utility/util";
import { AppContext } from "./Context";
import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import Snackbar_Top_Right from "../../Helper-Components/Snackbar/Snackbar_Top_Right";
import { useNavigate } from "react-router-dom";

export default function Confirm() {
  const apiManager = new ApiManager();
  const navigate = useNavigate()
  const utility = new Utility();
  const componentRef = useRef();
  const [fileName, setFileName] = useState(null);
  const [instructorId, setInstructorId] = useState(null);
  const [snackbarProps, setSnackbarProps] = useState("")
  const {
    residentData,
    personalPlans,
    generalActivities,
    generalActivitiesForumInput,
    handleBack,
    apartment,
  } = useContext(AppContext);

  const generatePdfFile = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${fileName}`,
  });

  const handleSubmit = async () => {
    const date = new Date();
    let report = {
      residentsSummary: residentData,
      personalPlans: personalPlans,
      generalActivities: generalActivities,
      date: `${utility.convertToISO(date)}Z`,
      apartmentId: apartment._id,
      apartmentName: apartment.apartmentName,
      instructorId: instructorId,
      reportName: fileName,
    };

    const reportData = { instructorId, report };
    const response = await apiManager.addNewReport(reportData);
    if (response) {
      setSnackbarProps({message: response.message, severity: "success"})
      setTimeout(() => {
        navigate('/reports')
      }, 3000)
    }
    else {
      setSnackbarProps({message: "Something went wrong!", severity: "error"})
    }
  };

  useEffect(() => {
    setInstructorId(localStorage.getItem("instructorId"));
    const reportNameGenerator = (apartmentName, date, instructorId) => {
      const formattedDate = utility.dateFormatter(date).replaceAll("/", "");
      const formattedTime = utility.timeFormatter(date).replace(":", "");
      const shortName = apartmentName.toLowerCase().slice(0, 2);
      const shortId = instructorId.slice(-3);
      const reportName = `${shortName}_${shortId}_${formattedDate}${formattedTime}`;
      setFileName(reportName);
    };
    reportNameGenerator(
      apartment.apartmentName,
      new Date(),
      localStorage.getItem("instructorId")
    );
  }, []);

  return (
    <>
    {snackbarProps && <Snackbar_Top_Right props={snackbarProps} />}
      <div className="centered-content" ref={componentRef}>
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
                <label>
                  {key.charAt(0).toLocaleUpperCase() + key.slice(1)}
                </label>
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
      </div>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 3 }}>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={() => generatePdfFile()}
        >
          Save as PDF
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Create Report
        </Button>
      </Box>
    </>
  );
}
