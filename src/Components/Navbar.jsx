import React from "react";
import '../Components/CSS/Navbar.css'

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
        <div className="container-fluid d-flex align-items-center"> {/* Utilisation de d-flex et align-items-center */}
          <a className="navbar-brand" href="#header">
            <img
              src="../../public/BRYAN.png"
              alt="image"
              className="navbar-brand-image"
            />
          </a>
          <h2 className="navbar-brand" id="title">My Portfolio</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#header">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">Experiences</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  

export default Navbar