<<<<<<< HEAD
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Apartments from "./components/ApartmentsPage/Apartments";
import Residents from "./components/ResidentsPage/Residents";
import ResidentInfoPage from "./components/ResidentInfoPage/ResidentInfoPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
=======
import './App.css'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Apartments from './components/ApartmentsPage/Apartments'
import Residents from './components/ResidentsPage/Residents'
import ResidentInfoPage from './components/ResidentInfoPage/ResidentInfoPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard'



>>>>>>> f5da444ce9827790ee7cfd03d94f3f2421fd9e4c

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Apartments />} />
        <Route path="/residents/:apartmentName" element={<Residents />} />
        <Route path="/resident/:residentId" element={<ResidentInfoPage />} />
      </Routes>
    </Router>
  );
};
=======
          {/* <Route path="/" element={<Dashboard/>} /> */}
          <Route path="/" element={<Apartments/>} />
          <Route path='/residents/:apartmentName' element={<Residents />} />
          <Route path='/resident/:residentId' element={<ResidentInfoPage />} />
        </Routes>
      </Router>
  )
}
>>>>>>> f5da444ce9827790ee7cfd03d94f3f2421fd9e4c

export default App;
