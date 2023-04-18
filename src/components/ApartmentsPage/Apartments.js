import React, { useEffect, useState } from "react";
import "./Apartments.css";
import Apartment from "../Apartment/Apartment";
import ApiManager from "../../apiManager/apiManager";
import { useNavigate } from "react-router";

const Apartments = () => {
  const [apartments, setApartments] = useState([]);
  const navigate = useNavigate()

    useEffect(() => {
    const apiManager = new ApiManager()
    const checkServerConnection = async() => {
      let response = await apiManager.checkServerConnection()
      if (response.status != 200) {
        navigate('/server-error')
      }
    }
    checkServerConnection()
  }, [])

  useEffect(() => {
    const apiManager = new ApiManager();

    let fetchApartments = async () => {
      let apartments = await apiManager.getApartments();
      setApartments(apartments);
    };
    fetchApartments();
  }, []);



  return (
    <>
    <div className="apartments-header-label">
      <label>{apartments.length != 0 ? "Apartments" : null}</label>
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
