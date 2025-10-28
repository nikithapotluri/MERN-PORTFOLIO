import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const skillsData = [
  { title: "Frontend", items: ["HTML", "CSS", "ReactJS", "Bootstrap"] },
  { title: "Backend", items: ["NodeJS", "ExpressJS"] },
  { title: "Databases", items: ["MongoDB", "MySQL"] },
  { title: "Languages", items: ["C", "C++", "Java"] },
  { title: "Version Control", items: ["Git", "GitHub"] },
  { title: "Tools", items: ["VSCode", "Canva"] },
];

export default function Skills({ darkMode }) {
  const scrollRef = useRef(null);

  // Smooth scroll left/right
  const scroll = (direction) => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="skills"
      className={`py-5 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}
    >
      <div className="container text-center">
        <h2 className="mb-5 animate__animated animate__fadeInDown display-5 fw-semibold">
          Skills
        </h2>

        {/* Scrollable Skills Row */}
        <div
          className="d-flex flex-nowrap overflow-auto px-2"
          ref={scrollRef}
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {skillsData.map((category, index) => (
            <div
              key={index}
              className={`card me-3 flex-shrink-0 ${darkMode ? "bg-secondary text-white" : ""}`}
              style={{ minWidth: "250px", maxWidth: "250px", minHeight: "350px" }}
            >
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">{category.title}</h5>
                <ul className="list-unstyled">
                  {category.items.map((item, i) => (
                    <li
                      key={i}
                      className="mb-2 animate__animated animate__zoomIn"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: "both",
                      }}
                    >
                      <div className="skill-card p-3 rounded shadow-sm">{item}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <div className="scroll-buttons mt-4">
          <button className="scroll-btn" onClick={() => scroll("left")}>
            <FaArrowLeft />
          </button>
          <button className="scroll-btn" onClick={() => scroll("right")}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
