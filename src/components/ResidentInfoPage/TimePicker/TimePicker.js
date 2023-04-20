import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { useState } from 'react';
import Utility from '../../../utilities/utility/util';

export default function TimePicker({isEditable, defaultTime, handleTimeChange}) {
  const utility = new Utility()
  const [newTime, setNewTime] = useState(defaultTime)

  console.log(defaultTime);
  const handleNewTimeChange = (newValue) => {
    setNewTime(newValue)
    console.log(newValue);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimeField']}>
        <TimeField
          onChange={(newValue) => handleNewTimeChange(newValue)}
          format="HH:mm"
          disabled={isEditable}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}