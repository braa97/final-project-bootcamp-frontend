import "./Apartment.css";
import React from "react";
import { Link } from "react-router-dom";

const Apartment = ({ apartment }) => {
  
  const generateRandomNumber = () => {
    return Math.round(Math.random() * 255)
  }
  const generateColor = () => {
    return `rgb(` + generateRandomNumber() + ',' + generateRandomNumber() + ',' + generateRandomNumber() + ')'
  }
  
  return (
      <div className="apartment-card">
        <div className="card__container">
        <Link to={`/residents/${apartment.apartmentName}`}>
          <div className="card__image" style={{backgroundColor: `${generateColor()}`}}></div>
          <div className="card__title-container">
            <p className="title">{apartment.apartmentName}</p>
          </div>
          </Link>
        </div>
      </div>
  );
};

export default Apartment;
