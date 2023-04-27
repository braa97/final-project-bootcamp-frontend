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
  const [filledFields, setFilledFields] = useState(true)
  const {residentData, setResidentData} = useContext(AppContext);
  const { handleNext, variant, margin } = useContext(AppContext);
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
      setResidents(response);
      const initialData = {};
      response.forEach((resident) => {
        initialData[resident.firstName] = "";
      });
      setResidentData(initialData);
    };
    fetchResidentsFromDB();
  }, []);

  const handleBlur = useCallback((event) => {
    const { name } = event.target;
    setTouchedFields((prevState) => ({ ...prevState, [name]: true }));
  }, []);

  const validateEveryField = useCallback(() => {
    const flag = !Object.values(residentData).every((val) => val)
    setFilledFields(flag)
  })

  useEffect(() => {
    validateEveryField();
  }, [validateEveryField]);

  const handleValidate = useCallback(() => {
    const emptyFieldsObj = {};
    for (const resident of residents) {
      if (!residentData[resident.firstName] && touchedFields[resident.firstName]) {
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
              onChange={(event) => {setResidentData((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))}}
              onBlur={handleBlur}
              multiline
              error={
                emptyFields[resident.firstName] &&
                !residentData[resident.firstName]
              }
              helperText={
                emptyFields[resident.firstName] &&
                !residentData[resident.firstName]
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
          disabled={filledFields}
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </>
  );
}

