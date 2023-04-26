import "./Apartments.css";
import React, { useEffect, useState } from "react";
import Apartment from "../Apartment/Apartment";
import ApiManager from "../../apiManager/apiManager";
import LoadingWheel from "../LoadingWheel/LoadingWheel";
import { useLocation } from "react-router-dom";

const Apartments = ({ coordinatorApartments }) => {
  const location = useLocation();
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [instructorId, setInstructorId] = useState(
    localStorage.getItem("instructorId")
  );

  useEffect(() => {
    const apiManager = new ApiManager();

    let fetchApartments = async () => {
      let apartments = await apiManager.getApartmentsByInstructorId(
        instructorId
      );
      // console.log(instructorId);
      setApartments(apartments);
      console.log(apartments);
      setLoading(false);
    };
    if (localStorage.getItem("instructorId")) {
      fetchApartments();
    } else {
      setLoading(false);
      setApartments(coordinatorApartments);
    }
  }, [coordinatorApartments]);

  try {
    return (
      <>
        <div className="apartments-header-label">
          <label>{apartments.length != 0 ? "Apartments" : null}</label>
        </div>
        <div className="loading-wheel">{loading ? <LoadingWheel /> : null}</div>
        <div className="apartments-container">
          {apartments.map((apartment) => (
            <Apartment key={apartment._id} apartment={apartment} />
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
  }
};

export default Apartments;
