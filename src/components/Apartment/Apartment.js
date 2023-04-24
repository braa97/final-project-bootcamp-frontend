import "./Apartment.css";
import React from "react";
import { Link } from "react-router-dom";

const Apartment = ({ apartment }) => {
  const generateRandomNumber = () => {
    return Math.round(Math.random() * 255);
  };
  const generateColor = () => {
    return (
      `rgb(` +
      generateRandomNumber() +
      "," +
      generateRandomNumber() +
      "," +
      generateRandomNumber() +
      ")"
    );
  };

  return (
    <div className="apartment-card">
      <div className="card__container">
        <div
          className="card__image"
          style={{ backgroundColor: `${generateColor()}` }}
        ></div>
        <div className="card__title-container">
          <p className="title">{apartment.apartmentName}</p>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
