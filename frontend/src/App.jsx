import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.body.className = darkMode ? "bg-dark text-white" : "bg-light text-dark";
  }, [darkMode]);

  return (
    <div>
      {/* Dark Mode Button */}
      <div className="text-center py-3">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="btn btn-outline-secondary btn-sm"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      
      {/* Main Content Wrapped in Container Fluid for Full Width */}
      <div className="container-fluid">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
