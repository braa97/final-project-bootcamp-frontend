import React, { useEffect, useState } from "react";
import InfoWidget from "../InfoWidget/InfoWidget";
import MedicalAppointments from "../MedicalAppointments/MedicalAppointments";
import RelativeContacts from "../RelativeContacts/RelativeContacts";
import "./ResidentInfoPage.css";
import CDN from "../CDN";
import ProfileCard from "../ProfileCard/ProfileCard";
import { useParams } from "react-router";
import Utility from "../../../utilities/utility/util";
import ApiManager from "../../../apiManager/apiManager";
const LINE_AWESOME_CDN =
  "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css";

const ResidentInfoPage = () => {
  const { residentId } = useParams();
  const [resident, setResident] = useState([]);
  const [medicalAppointments, setMedicalAppointments] = useState([]);
  const utility = new Utility();
  const apiManager = new ApiManager();

  const fetchResidentData = async () => {
    let response = await apiManager.getResidentById(residentId);
    setResident(response[0]);
  };

  useEffect(() => {
    fetchResidentData();
  }, [residentId]);

  try {
    return (
      <>
        <CDN href={LINE_AWESOME_CDN} />
        <div className="main">
          <ProfileCard
            img={resident.image}
            name={`${resident.firstName} ${resident.lastName}`}
            address={resident.address.value}
          />
          <div className="cards">
            <InfoWidget
              value={utility.dateFormatter(resident.dateOfBirth)}
              title="Birthday"
              icon="las la-clipboard-list"
            />
            <InfoWidget
              value={resident.allergies.join(", ")}
              title="Allergies"
              icon="las la-users"
            />
            <InfoWidget
              value={medicalAppointments.length}
              title="Appointments"
              icon="las la-users"
            />
            <InfoWidget
              value={`₪${
                resident.budget > 999
                  ? (resident.budget / 1000).toFixed(1) + "k"
                  : resident.budget
              }`}
              title="Budget"
              icon="lab la-google-wallet"
            />
          </div>
          <div className="recent-grid">
            <MedicalAppointments residentId={residentId} />
            <RelativeContacts contacts={resident.familyConnections} />
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
  }
};

export default ResidentInfoPage;
