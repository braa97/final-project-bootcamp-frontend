import './App.css'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Apartments from './components/ApartmentsPage/Apartments'
import Residents from './components/ResidentsPage/Residents'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router> 
      <Navbar/>
      <Routes>
          <Route path="/" element={<Apartments/>} />
          <Route path='/residents/:apartmentName' element={<Residents />} />
          {/* <Route path='' */}
        </Routes>
      </Router>
  )
}

export default App