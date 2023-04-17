import "./ResidentInfoPage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiManager from "../../apiManager/apiManager";
import ResidentDetails from "../ResidentDetails/ResidentDetails";
import MedicalAppointment from "../Medical Appointments/MedicalAppointment";
import Image from "../Image/Image";

export default function ResidentInfoPage() {
  const { residentId } = useParams();
  const [resident, setResident] = useState([]);

  useEffect(() => {
    const apiManger = new ApiManager();

    const getResident = async () => {
      let tempResident = await apiManger.getResidentById(residentId);
      setResident(tempResident[0]);
    };
    getResident();
  }, []);

  console.log(resident);
  return (
    <div className="resident-page-container">
      <div className="resident-image-details-container">
        <div className="resident-info-image-container">
          <Image imageSrc={resident.image} />
        </div>
        <div className="resident-info-details-container">
          <ResidentDetails resident={resident} />
        </div>
        <div className="medical-appointment-container">
          <MedicalAppointment
            medicalAppointments={resident.medicalAppointments}
          />
        </div>
      </div>
    </div>
  );
}
