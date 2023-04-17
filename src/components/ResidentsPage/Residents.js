import { useParams } from "react-router-dom";
import "./Residents.css";
import React, { useEffect, useState } from "react";
import ApiManager from "../../apiManager/apiManager";
import Resident from "../Resident/Resident";

const Residents = () => {
  const { apartmentName } = useParams();
  const [residents, setResidents] = useState([]);
  const [apartment, setApartment] = useState([])

  useEffect(() => {
    const apiManger = new ApiManager();

    const getResidents = async() => {
      let tempResidents = await apiManger.getResidentsByApartmentName(apartmentName);
      setResidents(tempResidents);
    };
    
    const getApartment = async() => {
      let tempApartment = await apiManger.getApartmentByName(apartmentName)
      setApartment(tempApartment)
    }
    getResidents();
    getApartment();
  }, []);

  return (
    <>
      <div className="residents-page-container">
        <div className="residents-header-label">
          <label>Residents</label>
        </div>
        <div className="residents-container">
          {residents.map((resident) => (
            <Resident key={resident._id} resident={resident} />
          ))}
        </div>
        <div className="page-info-container">
          <div className="apartment-info">
            <label>Apartment: {apartment.apartmentName}</label>
          </div>
          <div className="apartment-info">
            <label>Budget: {apartment.budget}</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Residents;
