import React, { useEffect, useState } from "react";
import "./ApartmentsList.css";
//import AddMedicalAppointment from "../../Add_Appointment/AddMedicalAppointment";
import ApiManager from "../../../apiManager/apiManager";
import SingleApartment from "../SingleApartment/SingleApartment";

const ApartmentsList = ({ instructors }) => {
  const apiManager = new ApiManager();
  const [apartments, setApartments] = useState([]);

  const fetchApartments = async () => {
    let totalApartments = []
    for (let instructor of instructors) {
      let response = await apiManager.getApartmentsByInstructorId(instructor._id);
      totalApartments = [...totalApartments, ...response]
      
    }

    //A function to prevent duplicates in the array 
    const uniqueArray = Array.from(new Set(totalApartments.map((apartment) => apartment._id))).map((_id) => {
      return totalApartments.find((apartment) => apartment._id === _id);
    });
     
    setApartments(uniqueArray)
  }


  useEffect(() => {
    fetchApartments();
  },[]);

  /*const handleAddAppointment = async (typeOfInspection, date) => {
    const newMedicalAppointment = {
      typeOfInspection: typeOfInspection,
      date: date,
      attended: false,
    };
    await apiManager.addMedicalAppointment(residentId, newMedicalAppointment);
    fetchResidentAppointment();
  };

  const handleDeleteAppointment = async (appointmentId) => {
    await apiManager.deleteAppointment(appointmentId, residentId);
    fetchResidentAppointment();
  };

  const handleAttendClick = (ma) => {
    const apiManager = new ApiManager();
    apiManager.updateAttendStatus(ma._id);
    let newMedicalAppointment = [...medicalAppointments];
    setMedicalAppointments(newMedicalAppointment);
  };*/

  try {
    return (
      <>
        <div className="Apartments">
          <div className="card-header">
            <h3> Apartments</h3>
           {/* <AddMedicalAppointment onClickEvent={handleAddAppointment} />*/}
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table width="100%">
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Address</td>
                    <td>Budget</td>
                    <td>Number Of Residents</td>
                  </tr>
                </thead>
                <tbody>
                  {apartments.map((apartment) => (
                    <SingleApartment
                    name={apartment.apartmentName}
                    address={apartment.address}
                    budget={apartment.budget}
                    numberOfResidents={apartment.residents.length}
                  />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
  }
};

export default ApartmentsList;
