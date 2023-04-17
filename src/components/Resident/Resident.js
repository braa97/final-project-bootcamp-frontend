import './Resident.css'
import React from 'react'
import { Link } from "react-router-dom";

const Resident = ({resident}) => {

  const generateRandomNumber = () => {
    return Math.round(Math.random() * 255)
  }
  const generateColor = () => {
    return `rgb(` + generateRandomNumber() + ',' + generateRandomNumber() + ',' + generateRandomNumber() + ')'
  }

  return (
    <div className="card">
    <div className="card__container">
    <Link to={`/residents/${resident.residentId}`}>
      <div className="card__image" style={{backgroundColor: `${generateColor()}`}}></div>
      <div className="card__title-container">
        <p className="title">{resident.firstName} {resident.lastName}</p>
        <span className="subtitle">{resident.residentId}</span>
      </div>
      </Link>
    </div>
  </div>
  )
}

export default Resident