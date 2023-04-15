import './App.css'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Apartments from './components/Apartments/Apartments'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router> 
      <Navbar/>
      
      <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Apartments" element={<Apartments/>} />
        </Routes>
      </Router>
  )
}

export default App