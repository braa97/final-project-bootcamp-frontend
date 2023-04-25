import "./App.css";
import "./components/Style/dark-style.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Nabar-Sidebar/Navbar/Navbar";
import Sidebar from "./components/Nabar-Sidebar/Sidebar/Sidebar";
import Apartments from "./components/ApartmentsPage/Apartments";
import Residents from "./components/ResidentsPage/Residents";
import ResidentInfoPage from "./components/ResidentInfoPage/ResidentInfoPage/ResidentInfoPage";
import Home from "./components/Home/Home";
import ServerError from "./components/ServerError/ServerError";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import ApiManager from "./apiManager/apiManager";
import GoogleButton from "./components/GoogleLogin/GoogleButton";
import SignIn from "./components/SignIn/SignIn";

const App = () => {
  const navigate = useNavigate;
  const [isCollapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(
    localStorage.getItem("instructorId") || null
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

  return (
    <Router>
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
            <Route path="/residents/:apartmentName" element={<Residents />} />
            <Route
              path="/resident/:residentId"
              element={<ResidentInfoPage />}
            />
            <Route path="/server-error" element={<ServerError />} />
            {/* <Route path="*" element={<NotFound />} /> */}
            <Route
              path="/login"
              element={
                <SignIn setIsLoggedin={setIsLoggedin} isLoggedin={isLoggedin} />
              }
            />
            {/* <Route path="/:instructorId/dashboard" element={<Home />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
