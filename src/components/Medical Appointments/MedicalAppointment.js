import '../Style/style.css'

const MedicalAppointment = ({ medicalAppointments }) => {
  /*let medicalAppointments=  [
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
]*/

  return (
    <>
      <div class="relative-appointment-contacts-card">
        <h2> Medical Appointment:</h2>
        <ul>
          {medicalAppointments.map(appointment => {
            return <li>{appointment.typeOfInspection}</li>
          })}
        </ul>
        <button>Add Appointment</button>
      </div>
    </>
  );
};

export default MedicalAppointment;
