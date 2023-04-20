import React, { useState } from "react";
import "./MedicalAppointments.css";
import Utility from "../../../utilities/utility/util";
import AddMedicalAppointment from '../../Add_Appointment/AddMedicalAppointment'
import ApiManager from '../../../apiManager/apiManager'
import { useParams } from "react-router";
import UpdateAppointmentAttend from "../../AppointmentAttendStatus/UpdateAppointmentAttend";

const MedicalAppointments = ({ medicalAppointments, setMedicalAppointments }) => {
    const utility = new Utility()
    const {residentId} = useParams()
    
    const handleAddAppointment = (typeOfInspection, date) =>{
      const apiManager = new ApiManager();
      const newMedicalAppointment = {typeOfInspection : typeOfInspection, date : date, attended: false}
      apiManager.addMedicalAppointment(residentId, newMedicalAppointment)
      setMedicalAppointments(current => [...current, newMedicalAppointment])
    }

    const handleAttendClick = (ma)=>{
      const apiManager = new ApiManager();
      apiManager.updateAttendStatus(ma._id)
      let newMedicalAppointment = [...medicalAppointments]
      setMedicalAppointments( newMedicalAppointment)
    }
    
  return (
    <>
      <div className="appointments">
        <div className="card-header">
          <h3>Medical Appointments</h3>
          {/* <button>
            Schedule appointment 
            <span className="las la-arrow-right"></span>
          </button> */}
          <AddMedicalAppointment onClickEvent={handleAddAppointment} />
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table width="100%">
              <thead>
                <tr>
                  <td>Title</td>
                  <td>Date</td>
                  <td>Time</td>
                  <td>Attended</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {medicalAppointments.map((ma, i) => (
                  <tr key={i}>
                    <td>{ma.typeOfInspection}</td>
                    <td>{utility.dateFormatter(ma.date)}</td>
                    <td>{utility.timeFormatter(ma.date)}</td>
                    <td>
                      <span
                        className={`status ${ma.attended ? "green" : "red"}`}
                      ></span>
                      {ma.attended ? "Attended" : "Not Attended"}
                    </td>
                    <td>
                      <button className="action-btn edit">Edit</button>
                      <button className="action-btn delete">Delete</button>
                      {!ma.attended ?  <button className="action-btn " onClick={event =>handleAttendClick(ma)}>Attend</button>:<div></div>}
                     
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalAppointments;
