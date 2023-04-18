import "../Style/style.css";
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
      <div className="appointment-relatives-card">
        <div className="appointment-relatives-details-header-list-container">
          <div className="appointment-relatives-details-header-container">
            <div className="appointment-relatives-details-header">
              Medical Appointment:
            </div>
          </div>
          <ul>
            {/* {medicalAppointments.map((appointment, index) => {
              return <li key={index}>{appointment.typeOfInspection}</li>;
            })} */}
          </ul>
        </div>
        <div className="add-relatives-appointment-button">
          <button>Add Appointment</button>
        </div>
      </div>
    </>
  );
};

export default MedicalAppointment;
