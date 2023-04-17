import React, { useEffect, useState } from "react";
import "./Apartments.css";
import Apartment from "../Apartment/Apartment";
import ApiManager from "../../apiManager/apiManager";

const Apartments = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    let apiManger = new ApiManager();

    let fetchApartments = async () => {
      let apartments = await apiManger.getApartments();
      setApartments(apartments);
    };
    fetchApartments();
  }, []);

  return (
    <>
    <div className="apartments-header-label">
      <label>Apartments</label>
    </div>
      <div className="apartments-container">
        {apartments.map((apartment) => (
          <Apartment key={apartment._id} apartment={apartment} />
        ))}
      </div>
    </>
  );
};

export default Apartments;
