import "./App.css";
import "./components/Style/dark-style.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Nabar-Sidebar/Navbar/Navbar";
import Sidebar from "./components/Nabar-Sidebar/Sidebar/Sidebar";
import Apartments from "./components/ApartmentsPage/Apartments";
import Residents from './components/ApartmentInfo/ResidentsPage/ResidentsPage'
import ResidentInfoPage from "./components/ResidentInfoPage/ResidentInfoPage/ResidentInfoPage";
import Home from "./components/Home/Home";
import ServerError from "./components/ServerError/ServerError";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ApiManager from "./apiManager/apiManager";
import GoogleButton from "./components/GoogleLogin/GoogleButton";
import SignIn from "./components/SignIn/SignIn";

const App = () => {
  const navigate = useNavigate();
  const [isCollapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(
    localStorage.getItem("instructorId")
  );

  const handleSidebarCollapse = function () {
    setCollapsed(!isCollapsed);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (!isLoggedin) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const onWindowClose = () => {
      localStorage.removeItem("instructorId")
    };

    window.addEventListener("beforeunload", onWindowClose);

    return () => {
      window.removeEventListener("beforeunload", onWindowClose);
    };
  }, []);

  return (
    <div className="main-page-container">
      {isLoggedin ? (
        <>
          <div className="navbar-container">
            <Navbar
              handleSidebarCollapse={handleSidebarCollapse}
              handleDarkMode={handleDarkMode}
            />
          </div>
          <div className="sidebar-container">
            <Sidebar isCollapsed={isCollapsed} />
          </div>
        </>
      ) : null}
      <div className="main-content">
      <Routes>
        {/* <Route path="/" element={<Dashboard/>} /> */}
        <Route path="/" element={<Apartments />} />
        <Route path="/apartment-info/resident/:residentId" element={<ResidentInfoPage />} />
        <Route path="/server-error" element={<ServerError />} />
        <Route path="/apartment-info/:apartmentName" element={<Residents />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route
          path="/login"
          element={
            <SignIn setIsLoggedin={setIsLoggedin} isLoggedin={isLoggedin} />
          }
        />
      </Routes>
      </div>
    </div>
  );
};

export default App;
