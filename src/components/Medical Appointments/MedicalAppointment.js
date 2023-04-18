import "./MedicalAppointment.css";
import { useEffect, useState } from "react";
import ApiManager from "../../apiManager/apiManager";

const MedicalAppointment = ({ residentId }) => {
  const [medicalAppointments, setMedicalAppointments] = useState([]);

  useEffect(() => {
    const apiManager = new ApiManager();
    const fetchMedicalAppointments = async () => {
      let response = await apiManager.getResidentDetailsByQueryString(
        residentId,
        "medicalAppointments"
      );
      setMedicalAppointments(response.medicalAppointments);
    };
    fetchMedicalAppointments();
  }, []);

  return (
    <>
      <div className="appointment-card">
        <div className="appointment-details-header-list-container">
          <div className="appointment-details-header-container">
            <div className="appointment-details-header">
              Medical Appointment:
            </div>
          </div>
          <ul>
            {medicalAppointments.map((appointment, index) => {
              return <li key={index}>{appointment.typeOfInspection}</li>;
            })}
          </ul>
        </div>
        <div className="add-appointment-button">
          <button>Add Appointment</button>
        </div>
      </div>
    </>
  );
};

export default MedicalAppointment;
