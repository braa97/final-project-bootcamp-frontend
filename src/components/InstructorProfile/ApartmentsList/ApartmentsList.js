import React, { useEffect, useState } from "react";
import "./ApartmentsList.css";
//import AddMedicalAppointment from "../../Add_Appointment/AddMedicalAppointment";
import ApiManager from "../../../apiManager/apiManager";
import SingleApartment from "../SingleApartment/SingleApartment";

const ApartmentsList = ({ instructorID }) => {
  const apiManager = new ApiManager();
  const [apartments, setApartments] = useState([]);

  const fetchApartments = async () => {
      let response = await apiManager.getApartmentsByInstructorId(instructorID);
    setApartments(response)
  }


  useEffect(() => {
    fetchApartments();
  });

  try {
    return (
      <>
        <div className="Apartments">
          <div className="card-header">
            <h3> Apartments</h3>
          
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
