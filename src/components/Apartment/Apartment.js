import "./Apartment.css";
import React from "react";
import { Link } from "react-router-dom";

const Apartment = ({ apartment }) => {
  return (
    <Link to={`/residents/${apartment.apartmentName}`}>
      <div className="card">
        <div className="card__container">
          <div className="card__image"></div>
          <div className="card__title-container">
            <p className="title">{apartment.apartmentName}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Apartment;
