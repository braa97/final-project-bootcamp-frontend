import "./Apartments.css";
import React, { useEffect, useState } from "react";
import ApiManager from "../../apiManager/apiManager";
import CoordinatorApiMan from "../../coordinatorApiManager/coordinatorApiMan";
import LoadingWheel from "../LoadingWheel/LoadingWheel";
import ApartmentsTable from "../ApartmentsTable/ApartmentsTable";
// import { useLocation } from "react-router-dom";

const Apartments = () => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    const apiManager = new ApiManager();
    const coordinatorApiMan = new CoordinatorApiMan();

    let fetchApartments = async () => {
      let apartments;
      if (user?.userType === "Instructor") {
        apartments = await apiManager.getApartmentsByInstructorId(user?.userId);
      } else {
        apartments = await coordinatorApiMan.getCoordinatorApartments(user?.userId);
        apartments = apartments.data
      }
      setApartments(apartments);
      setLoading(false);
    };
    fetchApartments()
  }, []);

  try {
    return (
      <>
        <div className="apartments-header-label">
          <label>{apartments.length !== 0 ? "Apartments" : null}</label>
        </div>
        <div className="loading-wheel">{loading ? <LoadingWheel /> : null}</div>
        <ApartmentsTable apartments={apartments} />
        {/* <div className='apartments-container'></div> */}
      </>
    );
  } catch (error) {
    console.log(error);
  }
};

export default Apartments;
