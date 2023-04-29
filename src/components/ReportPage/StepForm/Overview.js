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
import ReportDisplayPage from "../ReportDisplayPage/ReportDisplayPage";

export default function Confirm() {
  const apiManager = new ApiManager();
  const navigate = useNavigate();
  const utility = new Utility();
  const componentRef = useRef();
  const [fileName, setFileName] = useState(null);
  const [instructorId, setInstructorId] = useState(null);
  const [snackbarProps, setSnackbarProps] = useState("");
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
      setSnackbarProps({ message: response.message, severity: "success" });
      setTimeout(() => {
        navigate("/reports");
      }, 3000);
    } else {
      setSnackbarProps({ message: "Something went wrong!", severity: "error" });
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
      <ReportDisplayPage
        componentRef={componentRef}
        residentData={residentData}
        personalPlans={personalPlans}
        generalActivitiesForumInput={generalActivitiesForumInput}
        generalActivities={generalActivities}
      />
      <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 3 }}>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" onClick={() => generatePdfFile()}>
          Save as PDF
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Create Report
        </Button>
      </Box>
    </>
  );
}
