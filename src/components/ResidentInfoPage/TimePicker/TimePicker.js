import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { useState } from 'react';
import Utility from '../../../utilities/utility/util';

export default function TimePicker({defaultTime, handleTimeChange}) {
  const utility = new Utility()
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimeField']}>
        <TimeField
          label={utility.timeFormatter(defaultTime)}
          value={defaultTime}
          onChange={(newValue) => handleTimeChange(newValue)}
          format="HH:mm"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}