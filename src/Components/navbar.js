import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/Logo.jpg";

//Navigation bar component
const NavbarComponent = () => {
  const btnToggleRef = useRef();

  const toggleMenu = () => {
    if (window.innerWidth < 992) {
      btnToggleRef.current.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-blue"> {/*Navigation bar styling*/}
      <div className="container-fluid">
        <div>
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo-icon"
            style={{ width: "270px", height: "auto" }}
          />
          <span className="navbar-logo-text">Greenfuture</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={btnToggleRef}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={toggleMenu}> {/*Link to pages*/}
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={toggleMenu}>
              <Link className="nav-link" to="/AboutPage">
              About Us
              </Link>
            </li>
            <li className="nav-item" onClick={toggleMenu}>
              <Link className="nav-link" to="/Signup">
              Sign up
              </Link>
            </li>
            <li className="nav-item" onClick={toggleMenu}>
              <Link className="nav-link" to="/Login">
               Login
              </Link>
            </li>
            <li className="nav-item" onClick={toggleMenu}>
              <Link className="nav-link" to="/voting">
                Voting
              </Link>
            </li>
            <li className="nav-item" onClick={toggleMenu}>
              <Link className="nav-link" to="/ContactUs.page">
              Contact us
              </Link>
            </li>
            
            <li className="nav-item" onClick={toggleMenu}>
              <Link className="nav-link" to="/FAQ">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
