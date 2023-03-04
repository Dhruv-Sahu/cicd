import React from 'react'

const Navbar = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        <div className="logo me-auto">

          <a href="index.html"><img src={require('../Assets/Image/ClimecLabs.png')} alt="aerem logo" className="img-fluid" style={{ maxSize: "35px" }} /></a>
        </div>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero" >Home</a></li>
            <li><a className="nav-link scrollto" href="#events">Product</a></li>
            <li><a className="nav-link scrollto" href="#details">Details</a></li>
            <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
            <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#contact">Contact Us</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <a href="#book-a-table" className="book-a-table-btn scrollto">Book Now!</a>

      </div>
    </header>
  )
}

export default Navbar