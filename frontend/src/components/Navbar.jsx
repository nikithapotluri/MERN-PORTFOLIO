import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaCogs, FaBriefcase, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Add this line
import "./Navbar.css";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const navbarCollapseRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarCollapseRef.current &&
        !navbarCollapseRef.current.contains(event.target) &&
        document.querySelector(".navbar-collapse.show")
      ) {
        const collapse = new window.bootstrap.Collapse(navbarCollapseRef.current, {
          toggle: false,
        });
        collapse.hide(); // Smoothly hides the open navbar
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${darkMode ? "navbar-dark bg-dark text-white" : "bg-light text-dark"}`}>
      <div className="container-fluid">

        <a className={`navbar-brand fw-bold ${darkMode ? "text-light" : "text-dark"}`} href="#">
          Nikitha Potluri
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Ref is attached here */}
        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link to="hero" smooth={true} duration={500} className={`nav-link ${darkMode ? "text-white" : "text-dark"}`}>
                <FaHome className="me-2" /> Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="about" smooth={true} duration={500} className={`nav-link ${darkMode ? "text-white" : "text-dark"}`}>
                <FaUser className="me-2" /> About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="skills" smooth={true} duration={500} className={`nav-link ${darkMode ? "text-white" : "text-dark"}`}>
                <FaCogs className="me-2" /> Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link to="projects" smooth={true} duration={500} className={`nav-link ${darkMode ? "text-white" : "text-dark"}`}>
                <FaBriefcase className="me-2" /> Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link to="contact" smooth={true} duration={500} className={`nav-link ${darkMode ? "text-white" : "text-dark"}`}>
                <FaEnvelope className="me-2" /> Contact
              </Link>
            </li>

            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button
                onClick={toggleDarkMode}
                className={`btn btn-sm ${darkMode ? "btn-light" : "btn-dark"}`}
              >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
