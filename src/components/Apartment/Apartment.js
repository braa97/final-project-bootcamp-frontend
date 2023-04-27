import "./Apartment.css";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Apartment = ({ apartment }) => {
  const location = useLocation()
  const myObject = location.state;

  return (
    <div className="apartment-card">
      <div className="card__container">
        <Link to={myObject?.location ? `/reports/create-report/${apartment.apartmentName}` : `/apartments/apartment-info/${apartment.apartmentName}`}>
          <div className="card__image">
            <img src={apartment.image} />
          </div>
          <div className="card__title-container">
            <p className="title">{apartment.apartmentName}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Apartment;
