import "./App.css";
import "./global-styles/dark-style.css";
import React, { useEffect, useState } from "react";
import Apartments from "./components/ApartmentsPage/Apartments";
import ApartmentPage from "./components/ApartmentInfo/ApartmentPage/ApartmentPage";
import ResidentInfoPage from "./components/ResidentInfoPage/ResidentInfoPage/ResidentInfoPage";
import Home from "./components/Home/Home";
import ServerError from "./components/ServerError/ServerError";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import CoordinatorHome from "./components/Coordinator_Dashboard/Coordinator_Home/CoordinatorHome";
import NewResident from "./components/ApartmentInfo/AddNewResident/AddNewResident";
import Sidebar from "./components/Sidebar/Sidebar";
import SchedulerDemo from "./components/Instructor_Scheduler/Instructor_Scheduler";
// import ResidentsTable from "./components/ApartmentInfo/ResidentsTable/ResidentsTable";

const App = () => {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(
    localStorage.getItem("instructorId") || null
  );

  useEffect(() => {
    if (!isLoggedin) {
      navigate("/login");
    }
  }, [isLoggedin, navigate]);

  return (
    <div className="main-page-container">
      <>
        {isLoggedin ? (
          <>
            <div className="navbar-container">
              <Navbar />
            </div>
            <div className="sidebar-container">
              <Sidebar />
            </div>
          </>
        ) : null}
        <Routes>
          <Route
            path="/login"
            element={
              <SignIn setIsLoggedin={setIsLoggedin} isLoggedin={isLoggedin} />
            }
          />
        </Routes>
      </>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartments" element={<Apartments />} />
          {/* <Route path="/residents" element={<Residents />} /> */}
          <Route
            path="/apartments/apartment-info/:apartmentName"
            element={<ApartmentPage />}
          />
          <Route
            path="/apartments/apartment-info/resident/:residentId"
            element={<ResidentInfoPage />}
          />
          <Route
            path="/apartments/apartment-info/resident/new-resident"
            element={<NewResident />}
          />
          <Route path="/server-error" element={<ServerError />} />
          <Route path="/scheduler" element={<SchedulerDemo shifts={[]} />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          {/* <Route
            path="/login"
            element={
              <SignIn setIsLoggedin={setIsLoggedin} isLoggedin={isLoggedin} />
            }
          /> */}
          <Route path="/apartments/:instructorId" element={<Apartments />} />
          <Route
            path="/Coordinator/dashboard/:id"
            element={<CoordinatorHome />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
