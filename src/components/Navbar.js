import React from 'react'
import  './css/Navbar.css'

const Navbar = () => {
  return (
    <nav>
    <div class="nav-container">
      <a href="#" class="logo">LOGO</a>
      <ul class="nav-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Apartments</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar