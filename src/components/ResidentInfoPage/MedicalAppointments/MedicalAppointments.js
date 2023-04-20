import React, { useState } from "react";
import "./MedicalAppointments.css";
import AddMedicalAppointment from "../../Add_Appointment/AddMedicalAppointment";
import ApiManager from "../../../apiManager/apiManager";
import SingleMedicalAppointment from "../SingleMedicalAppointment/SingleMedicalAppointment";
import { useParams } from "react-router";

const MedicalAppointments = ({
  medicalAppointments,
  setMedicalAppointments,
  handleDelete
}) => {
  const { residentId } = useParams();

  const handleAddAppointment = (typeOfInspection, date) => {
    const apiManager = new ApiManager();
    const newMedicalAppointment = {
      typeOfInspection: typeOfInspection,
      date: date,
      attended: false,
    };
    apiManager.addMedicalAppointment(residentId, newMedicalAppointment);
    setMedicalAppointments((current) => [...current, newMedicalAppointment]);
  };

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
                  <SingleMedicalAppointment handleDelete={handleDelete} key={i} ma={ma} appointmentId={ma._id}/>
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
