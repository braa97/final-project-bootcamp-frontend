import "./Resident.css";
import React from "react";
import { Link } from "react-router-dom";

const Resident = ({ resident }) => {
  return (
    <div className="card">
      <div className="card__container">
        <Link to={`/resident/${resident._id}`}>
          <div className="card__image">
            <img src={resident.image} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Resident;
