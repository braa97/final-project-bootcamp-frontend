import "../Style/style.css";
import { useEffect, useState } from "react";
import ApiManager from "../../apiManager/apiManager";

const RelativeContacts = ({ residentId }) => {
  const [familyConnections, setFamilyConnections] = useState([]);

  useEffect(() => {
    const apiManager = new ApiManager();
    const fetchFamilyConnections = async () => {
      let response = await apiManager.getResidentDetailsByQueryString(
        residentId,
        "familyConnections"
      );
      setFamilyConnections(response.familyConnections);
    };
    fetchFamilyConnections();
  }, []);

  return (
    <div className="appointment-relatives-card">
      <div className="appointment-relatives-details-header-list-container">
        <div className="appointment-relatives-details-header-container">
          <div className="appointment-relatives-details-header">Relative Contacts:</div>
        </div>
        <ul>
          {familyConnections.map((relative, index) => {
            return (<li key={index}>{relative.name} : {relative.contactNumber}</li>);
          })}
        </ul>
      </div>
      <div className="add-relatives-appointment-button">
        <button>Add Appointment</button>
      </div>
    </div>
  );
};

export default RelativeContacts;
