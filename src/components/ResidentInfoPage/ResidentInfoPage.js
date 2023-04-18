import "./ResidentInfoPage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiManager from "../../apiManager/apiManager";
import ResidentDetails from "../ResidentDetails/ResidentDetails";
import MedicalAppointment from "../Medical Appointments/MedicalAppointment";
import Image from "../Image/Image";
import RelativeContacts from "../Relative Contacts/RelativeContacts";
import { useNavigate } from "react-router-dom";

export default function ResidentInfoPage() {
  const { residentId } = useParams();
  const [resident, setResident] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiManger = new ApiManager();

    const getResident = async () => {
      let tempResident = await apiManger.getResidentById(residentId);
      if (!tempResident) {
        navigate("/server-error");
      } else {
        setResident(tempResident[0]);
      }
    };
    getResident();
  }, []);

  try {
    return (
      <div className="resident-card-container">
        <div className="resident-card">
          <Image imageSrc={resident.image} />
          <ResidentDetails resident={resident} />
        </div>
        <div className="resident-medical-appointments-container">
          <div className="resident-relative-inner-container">
            <MedicalAppointment residentId={residentId} />
          </div>
          <div className="resident-medical-inner-container">
            <RelativeContacts residentId={residentId} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
