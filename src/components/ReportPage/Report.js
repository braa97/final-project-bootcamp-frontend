import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Step1 from './Step1';
import Step2 from './Step2';
const steps = ['Step 1', 'Step 2'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [reportData, setReportData] = React.useState({});

  let apartementResidents = [{
    residentId: 'RES001',
    firstName: 'David',
    lastName: 'Cohen',
    dateOfBirth: '1979-06-15',
    gender: 'Male',
    image: 'https://media.licdn.com/dms/image/C5603AQHBRGTKfjlZdg/profile-displayphoto-shrink_800_800/0/1621533275711?e=2147483647&v=beta&t=F0HxYugSexf7IvPbHEuJWRscBjWiAS6caoM4UP9zN-Q',
    address: {
        value: '15 Dizengoff St, Tel Aviv, Israel',
        wazeLink: 'https://waze.com/ul/rt64kj8d',
    },
    budget: 5000,
    allergies: ['Peanuts', 'Shellfish'],
    medicalAppointments: [
        {
            attended: false,
            time: '09:15',
            typeOfInspection: 'Throat Infection Examination',
            date: '2023-04-20',
        },
        {
            attended: false,
            time: '11:30',
            typeOfInspection: 'Hearing Loss Evaluation',
            date: '2023-04-22',
        },
    ],
    familyConnections: [
        {
            name: 'Rina Levi',
            contactNumber: '054-1234567',
        },
        {
            name: 'Avi Cohen',
            contactNumber: '052-9876543',
        },
    ],
    medications: {
        morning: [
            {
                medicationName: 'Antihistamine',
                dosage: '1 tablet',
                status: false,
            },
        ],
        afternoon: [
            {
                medicationName: 'Nasal Spray',
                dosage: '2 sprays',
                status: false,
            },
            {
                medicationName: 'Pain Reliever',
                dosage: '1 tablet',
                status: false,
            },
        ],
        evening: [
            {
                medicationName: 'Decongestant',
                dosage: '1 tablet',
                status: false,
            },
        ],
    },
},
{
    residentId: 'RES002',
    firstName: 'Sarah',
    lastName: 'Levy',
    dateOfBirth: '1985-04-18',
    gender: 'Female',
    image: 'https://cdn2-sr-application.sportsrecruits.com/images/lacrosserecruits/2020/11/f61520752a0d4325cc877425ca0b0ba1.jpg',
    address: {
        value: '15 Dizengoff St, Tel Aviv, Israel',
        wazeLink: 'https://waze.com/ul/rt64kj8d',
    },
    budget: 3500,
    allergies: ['Eggs', 'Fish'],
    medicalAppointments: [
        {
            attended: false,
            time: '14:45',
            typeOfInspection: 'Sinusitis Assessment',
            date: '2023-04-25',
        },
    ],
    familyConnections: [
        {
            name: 'Rachel Green',
            contactNumber: '052-1234567',
        },
        {
            name: 'Monica Geller',
            contactNumber: '058-7654321',
        },
    ],
    medications: {
        morning: [
            {
                medicationName: 'Cough Syrup',
                dosage: '2 teaspoons',
                status: false,
            },
        ],
        afternoon: [
            {
                medicationName: 'Inhaler',
                dosage: '1 puff',
                status: false,
            },
        ],
        evening: [
            {
                medicationName: 'Expectorant',
                dosage: '1 tablet',
                status: false,
            },
        ],
    },
},
{
    residentId: 'RES003',
    firstName: 'Ethan',
    lastName: 'Cohen',
    dateOfBirth: '1993-11-07',
    gender: 'Male',
    image: 'https://media.licdn.com/dms/image/C4D03AQGkBk7PbsXI5w/profile-displayphoto-shrink_800_800/0/1634674720491?e=2147483647&v=beta&t=xp-opkIF4wGDd7Cw8qOpf6zsGz1U3FepZhJKKY0LMD8',
    address: {
        value: '15 Dizengoff St, Tel Aviv, Israel',
        wazeLink: 'https://waze.com/ul/rt64kj8d',
    },
    budget: 4000,
    allergies: ['Milk', 'Tree Nuts'],
    medicalAppointments: [
        {
            attended: false,
            time: '16:30',
            typeOfInspection: 'Tonsillitis Diagnosis',
            date: '2023-04-27',
        },
        {
            attended: false,
            time: '10:00',
            typeOfInspection: 'Sleep Apnea Screening',
            date: '2023-04-30',
        },
    ],
    familyConnections: [
        {
            name: 'Daniel Levin',
            contactNumber: '053-9876543',
        },
        {
            name: 'Natalie Cohen',
            contactNumber: '056-3456789',
        },
    ],
    medications: {
        morning: [
            {
                medicationName: 'Antacid',
                dosage: '1 tablet',
                status: false,
            },
        ],
        afternoon: [],
        evening: [
            {
                medicationName: 'Probiotic',
                dosage: '1 capsule',
                status: false,
            },
        ],
    },
}]


  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
       
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
            {activeStep+1 == 1 ? <Typography><Step1 apartementResidents={apartementResidents}/></Typography> : <Typography><Step2 apartementResidents={apartementResidents}/></Typography>}
       
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}