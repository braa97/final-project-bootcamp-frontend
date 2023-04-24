import "./Resident.css";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Resident = ({ resident }) => {
  try {
    return (
      <div className="card">
        <div className="card__container">
          <Link to={`/resident/${resident._id}`}>
            <div className="card__image">
              <img src={resident.image} />
            </div>
            <div className="card__title-container">
              <p className="title">
                {resident.firstName} {resident.lastName}
              </p>
              <span className="subtitle">{resident.residentId}</span>
            </div>
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default Resident;
