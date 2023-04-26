import "./Apartment.css";
import React from "react";
import { Link } from "react-router-dom";

const Apartment = ({ apartment }) => {

  return (
    <div className="apartment-card">
      <div className="card__container">
        <Link to={`/apartments/apartment-info/${apartment.apartmentName}`}>
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
