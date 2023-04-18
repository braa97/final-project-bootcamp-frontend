import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Apartments from "./components/ApartmentsPage/Apartments";
import Residents from "./components/ResidentsPage/Residents";
import ResidentInfoPage from "./components/ResidentInfoPage/ResidentInfoPage";
import ServerError from "./components/ServerError/ServerError";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import ApiManager from "./apiManager/apiManager";

const App = () => {
  // const [isServerOnline, setIsServerOnline] = useState(false)
  // const navigate = useNavigate()

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Dashboard/>} /> */}
        <Route path="/" element={<Apartments />} />
        <Route path="/residents/:apartmentName" element={<Residents />} />
        <Route path="/resident/:residentId" element={<ResidentInfoPage />} />
        <Route path="/server-error" element={<ServerError />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
