import './report.css'
import React, { useCallback, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { AppContext } from "./Context";

export default function SecondStep() {
  const {
    personalPlans,
    setPersonalPlans,
    personalPlansForumInput,
    handleBack,
    handleNext,
    variant,
    margin,
  } = useContext(AppContext);
  const [filledFields, setFilledFields] = useState(true);
  const [touchedFields, setTouchedFields] = useState(
    personalPlansForumInput.reduce(
      (acc, formValue) => ({ ...acc, [formValue.name]: false }),
      {}
    )
  );
  const [emptyFields, setEmptyFields] = useState(
    personalPlansForumInput.reduce(
      (acc, formValue) => ({ ...acc, [formValue.name]: false }),
      {}
    )
  );

  const isStepTwoFormValid = useCallback(() => {
    const values = Object.values(personalPlans);
    return values.every((value) => value.trim() !== "");
  }, [personalPlans]);

  const isFormValid = isStepTwoFormValid();

  const handleBlur = useCallback((event) => {
    const { name } = event.target;
    setTouchedFields((prevState) => ({ ...prevState, [name]: true }));
  }, []);

  const validateEveryField = useCallback(() => {
    const flag = !Object.values(personalPlans).every((val) => val);
    setFilledFields(flag);
  });

  useEffect(() => {
    validateEveryField();
  }, [validateEveryField]);

  const handleValidate = useCallback(() => {
    const emptyFieldsObj = {};
    for (const formValue of personalPlansForumInput) {
      if (
        !personalPlans[formValue.name] &&
        touchedFields[formValue.name]
      ) {
        emptyFieldsObj[formValue.name] = true;
      } else {
        emptyFieldsObj[formValue.name] = false;
      }
    }
    setEmptyFields(emptyFieldsObj);
  }, [personalPlans, touchedFields]);

  useEffect(() => {
    handleValidate();
  }, [handleValidate]);

  return (
    <>
      <Grid className="report-field-grid-container" container spacing={2}>
        {personalPlansForumInput.map((input) => (
          <Grid item xs={12} sm={6} key={input.id}>
            <div className="report-field-label">
              {input.icon}
              <label>
                {input.label}
              </label>
            </div>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              name={input.name}
              multiline
              onBlur={handleBlur}
              placeholder={input.placeholder}
              value={personalPlans[input.name]}
              onChange={(event) =>
                setPersonalPlans((prevState) => ({
                  ...prevState,
                  [event.target.name]: event.target.value,
                }))
              }
              error={
                emptyFields[input.name] &&
                !personalPlans[input.name]
              }
              helperText={
                emptyFields[input.name] &&
                !personalPlans[input.name]
                  ? "This field is required."
                  : ""
              }
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button
          variant="contained"
          // disabled={isFormValid}
          disabled={false}
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </>
  );
}
