import React, { useCallback, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { AppContext } from './Context';

export default function SecondStep() {
  const {stepTwoForumValues, setStepTwoForumValues, stepTwoForumInput, handleBack, handleNext, variant, margin} = useContext(AppContext)

  const isStepTwoFormValid = useCallback(() => {
    const values = Object.values(stepTwoForumValues);
    return values.every((value) => value.trim() !== '');
  }, [stepTwoForumValues]);
  
  const isFormValid = isStepTwoFormValid();

  return (
    <>
      <Grid container spacing={2}>
    {stepTwoForumInput.map(input => (
        <Grid item xs={12} key={input.id}>
        <TextField
          variant={variant}
          margin={margin}
          fullWidth
          label={input.label}
          name={input.name}
          multiline
          placeholder={input.placeholder}
          value={stepTwoForumValues[input.name]}
          onChange={(event) => setStepTwoForumValues((prevState) => ({...prevState, [event.target.name]: event.target.value}))}
          // error={!!city.error}
          // helperText={city.error}
          // required={city.required}
        />
      </Grid>
    ))}

      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button variant='contained' disabled={isFormValid} color='primary' onClick={handleNext}>
          Next
        </Button>
      </Box>
    </>
  );
}
