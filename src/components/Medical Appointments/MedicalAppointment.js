import '../Style/style.css'

const MedicalAppointment = ({ medicalAppointments }) => {

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
