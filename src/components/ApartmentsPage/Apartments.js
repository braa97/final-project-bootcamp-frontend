import "./Apartments.css";
import React, { useEffect, useState } from "react";
import Apartment from "../Apartment/Apartment";
import ApiManager from "../../apiManager/apiManager";
import LoadingWheel from "../LoadingWheel/LoadingWheel";
import { useNavigate } from "react-router";

const Apartments = () => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiManager = new ApiManager();

    let fetchApartments = async () => {
      let apartments = await apiManager.getApartments();
      setApartments(apartments);
      setLoading(false);
    };
    fetchApartments();
  }, []);

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
};

export default Apartments;
