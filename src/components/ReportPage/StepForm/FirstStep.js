import "./report.css";
import React, { useCallback, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "./Context";
import ApiManager from "../../../apiManager/apiManager";
import { Avatar } from "@mui/material";

export default function FirstStep({ apartmentName }) {
  const apiManager = new ApiManager();
  const [residents, setResidents] = useState([]);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const {residentData, setResidentData, setApartment, handleNext, variant, margin } = useContext(AppContext);
  const [emptyFields, setEmptyFields] = useState(
    residents.reduce(
      (acc, resident) => ({ ...acc, [resident.firstName]: false }),
      {}
    )
  );
  const [touchedFields, setTouchedFields] = useState(
    residents.reduce(
      (acc, resident) => ({ ...acc, [resident.firstName]: false }),
      {}
    )
  );

  useEffect(() => {
    const fetchResidentsFromDB = async () => {
      const response = await apiManager.getResidentsByApartmentName(
        apartmentName
      );
      const apartment = await apiManager.getApartmentByName(apartmentName)
      setResidents(response);
      setApartment(apartment)
    };
    fetchResidentsFromDB();
  }, []);

  const handleBlur = useCallback((event) => {
    const { name } = event.target;
    setTouchedFields((prevState) => ({ ...prevState, [name]: true }));
  }, []);

  const checkAllFieldsFilled = useCallback(() => {
    const allFieldsFilled = residents.every(
      (resident) => residentData[`${resident.firstName}_${resident.lastName}`]
    );
    setAllFieldsFilled(allFieldsFilled);
  }, [residents, residentData]);

  useEffect(() => {
    checkAllFieldsFilled();
  }, [checkAllFieldsFilled, residentData]);

  const handleValidate = useCallback(() => {
    const emptyFieldsObj = {};
    for (const resident of residents) {
      if (
        !residentData[`${resident.firstName}_${resident.lastName}`] &&
        touchedFields[`${resident.firstName}_${resident.lastName}`]
      ) {
        emptyFieldsObj[`${resident.firstName}_${resident.lastName}`] = true;
      } else {
        emptyFieldsObj[`${resident.firstName}_${resident.lastName}`] = false;
      }
    }
    setEmptyFields(emptyFieldsObj);
  }, [residents, residentData, touchedFields]);

  useEffect(() => {
    handleValidate();
  }, [handleValidate]);

  return (
    <>
      <Grid className="report-field-grid-container" container spacing={2}>
        {residents.map((resident) => (
          <Grid className="report-field-grid-container" item xs={12} sm={6}>
            <div className="report-field-label">
              <Avatar
                alt={`${resident.firstName} ${resident.lastName}`}
                src={resident.image}
              />
              <label>
                {resident.firstName} {resident.lastName}
              </label>
            </div>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              name={`${resident.firstName}_${resident.lastName}`}
              placeholder="Resident Status"
              value={residentData[`${resident.firstName}_${resident.lastName}`] || ""}
              onChange={(event) => {
                setResidentData((prevState) => ({
                  ...prevState,
                  [event.target.name]: event.target.value,
                }));
              }}
              onBlur={handleBlur}
              multiline
              error={
                emptyFields[`${resident.firstName}_${resident.lastName}`] &&
                !residentData[`${resident.firstName}_${resident.lastName}`]
              }
              helperText={
                emptyFields[`${resident.firstName}_${resident.lastName}`] &&
                !residentData[`${resident.firstName}_${resident.lastName}`]
                  ? "This field is required."
                  : ""
              }
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          disabled={!allFieldsFilled}
          // disabled={false}
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </>
  );
}
