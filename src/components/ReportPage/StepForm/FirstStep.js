import React, { useCallback, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "./Context";
import ApiManager from "../../../apiManager/apiManager";

export default function FirstStep({ apartmentName }) {
  const apiManager = new ApiManager();
  const [residents, setResidents] = useState([]);
  const [residentData, setResidentData] = useState({});
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
  const { handleNext, variant, margin } = useContext(AppContext);

  useEffect(() => {
    const fetchResidentsFromDB = async () => {
      const response = await apiManager.getResidentsByApartmentName(
        apartmentName
      );
      setResidents(response);
      const initialData = {};
      response.forEach((resident) => {
        initialData[resident.firstName] = "";
      });
      setResidentData(initialData);
    };
    fetchResidentsFromDB();
  }, []);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setResidentData((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const handleBlur = useCallback((event) => {
    const { name } = event.target;
    setTouchedFields((prevState) => ({ ...prevState, [name]: true }));
  }, []);

  const handleValidate = useCallback(() => {
    const emptyFieldsObj = {};
    for (const resident of residents) {
      if (
        !residentData[resident.firstName] &&
        touchedFields[resident.firstName]
      ) {
        emptyFieldsObj[resident.firstName] = true;
      } else {
        emptyFieldsObj[resident.firstName] = false;
      }
    }
    setEmptyFields(emptyFieldsObj);
  }, [residents, residentData, touchedFields]);

  useEffect(() => {
    handleValidate();
  }, [handleValidate]);

  const handleNextPageClick = () => {
    handleValidate();

    const isAnyFieldEmpty = Object.values(emptyFields).some((val) => val);
    if (isAnyFieldEmpty) {
      const newEmptyFields = {};
      residents.forEach((resident) => {
        if (!residentData[resident.firstName]) {
          newEmptyFields[resident.firstName] = true;
        } else {
          newEmptyFields[resident.firstName] = false;
        }
      });
      setEmptyFields(newEmptyFields);
    } else {
      handleNext();
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        {residents.map((resident) => (
          <Grid item xs={12} sm={6}>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              label={`${resident.firstName} ${resident.lastName}`}
              name={resident.firstName}
              placeholder="Resident Status"
              value={residentData[resident.firstName] || ""}
              onChange={handleChange}
              onFocus={() => {
                setEmptyFields((prevState) => ({
                  ...prevState,
                  [resident.firstName]: false,
                }));
              }}
              onBlur={handleBlur}
              multiline
              error={emptyFields[resident.firstName]}
              helperText={
                emptyFields[resident.firstName] ? "This field is required." : ""
              }
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          disabled={Object.values(emptyFields).some((val) => val)}
          color="primary"
          onClick={handleNextPageClick}
        >
          Next
        </Button>
      </Box>
    </>
  );
}
