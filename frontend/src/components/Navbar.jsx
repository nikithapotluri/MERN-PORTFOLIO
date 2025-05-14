import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaCogs, FaBriefcase, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const navbarCollapseRef = useRef(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    const collapseElement = navbarCollapseRef.current;
    if (collapseElement) {
      const bsCollapse = new window.bootstrap.Collapse(collapseElement, {
        toggle: false,
      });

      if (isNavbarOpen) {
        bsCollapse.hide();
        setIsNavbarOpen(false);
      } else {
        bsCollapse.show();
        setIsNavbarOpen(true);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isNavbarOpen &&
        navbarCollapseRef.current &&
        !navbarCollapseRef.current.contains(event.target) &&
        !event.target.closest(".navbar-toggler")
      ) {
        const bsCollapse = new window.bootstrap.Collapse(navbarCollapseRef.current, {
          toggle: false,
        });
        bsCollapse.hide();
        setIsNavbarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isNavbarOpen]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${darkMode ? "navbar-dark bg-dark text-white" : "bg-light text-dark"}`}>
      <div className="container-fluid">

        <a className={`navbar-brand fw-bold ${darkMode ? "text-light" : "text-dark"}`} href="#">
          Nikitha Potluri
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isNavbarOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

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
