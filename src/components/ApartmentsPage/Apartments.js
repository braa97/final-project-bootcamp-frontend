import "./Apartments.css";
import React, { useEffect, useState } from "react";
import Apartment from "../Apartment/Apartment";
import ApiManager from "../../apiManager/apiManager";
import LoadingWheel from "../LoadingWheel/LoadingWheel";
import { useLocation } from "react-router-dom";

const Apartments = () => {
  const location = useLocation();
  const object = location.state;
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [instructorId, setInstructorId] = useState(localStorage.getItem("instructorId"))
  
  
  useEffect(() => {
    const apiManager = new ApiManager();

    let fetchApartments = async () => {
      let apartments = await apiManager.getApartmentsByInstructorId(instructorId);
      setApartments(apartments);
      setLoading(false);
    };
    fetchApartments();
  }, [instructorId]);

  try {
    return (
      <>
        <div className="apartments-header-label">
          <label>{apartments.length != 0 ? "Apartments" : null}</label>
        </div>
        <div className="loading-wheel">{loading ? <LoadingWheel /> : null}</div>
        <div className="apartments-container">
          {apartments.map((apartment) => (
            <Apartment
              key={apartment._id}
              apartment={apartment}
            />
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
  }
};

export default Apartments;
