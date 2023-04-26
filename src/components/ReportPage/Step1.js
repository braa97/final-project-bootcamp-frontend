
import './Step1.css'
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Image from '../Image/Image';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import ShowerIcon from '@mui/icons-material/Shower';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SummarizeIcon from '@mui/icons-material/Summarize';


   /*  apartementResidents = [{
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
    }]*/

    const agendaFields = [{title: 'Personal Plans', icon: <AccessibilityNewIcon/>},
     {title:'Classes', icon: <SelfImprovementIcon/> },
     {title:'Meals', icon:<DinnerDiningIcon/>},
     {title: 'Showers', icon:<ShowerIcon/>},
     { title:'Additional Group Events', icon:<Diversity3Icon/>},
     {title:'General Summary', icon: <SummarizeIcon/>
    }]
const Step1 = ({apartementResidents}) => {

  return (
  <div className='container'> 

   <div className='residentsStatus'> 
   
    <h6>Personal Status</h6>
    {apartementResidents.map(resident => 
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
    
              <TextField
                id="outlined-multiline-flexible"
                label= {<div className={'status-details'}> <img src={resident.image} />{resident.firstName + ' ' + resident.lastName}</div>}
                multiline
                maxRows={4}
                
              />
          </Box>)}
   </div>

   <div className='agenda'> 
   <h6>Agenda</h6>
   {agendaFields.map(field=><Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
              <TextField
                id="outlined-multiline-flexible"
                label= {<div> {field.icon} {field.title} </div> }
                multiline
                maxRows={4}
              />
          </Box> )}
            
          
   </div>
   
   </div>


  )
}

export default Step1