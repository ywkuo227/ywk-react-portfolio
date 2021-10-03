import React from "react";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
      <div>
        <a href="#about-me" onClick={() => handlePageChange("AboutMe")}>About Me</a>
      </div>
      <div>
        <a href="#work" onClick={() => handlePageChange("Portfolio")}>Portfolio</a>
      </div>
      <div>
        <a href="#contact-me" onClick={() => handlePageChange("ContactMe")}>Contact Me</a>
      </div>
      <div>
        <a href="#resume" onClick={() => handlePageChange("Resume")}>Resume</a>
      </div>
    </nav>
  )
}