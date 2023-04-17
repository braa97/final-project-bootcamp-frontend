<<<<<<< HEAD
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Apartments from "./components/ApartmentsPage/Apartments";
import Residents from "./components/Residents/Residents";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
=======
import './App.css'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Apartments from './components/ApartmentsPage/Apartments'
import Residents from './components/ResidentsPage/Residents'
import ResidentInfoPage from './components/ResidentDetails/ResidentDetails'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



>>>>>>> c626fda8f86124b4012c270e9d49fd455f271531

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Apartments />} />
        <Route path="/residents/:apartmentName" element={<Residents />} />
      </Routes>
    </Router>
  );
};
=======
          <Route path="/" element={<Apartments/>} />
          <Route path='/residents/:apartmentName' element={<Residents />} />
          <Route path='resident/:residentId' element={<ResidentInfoPage />} />
        </Routes>
      </Router>
  )
}
>>>>>>> c626fda8f86124b4012c270e9d49fd455f271531

export default App;
