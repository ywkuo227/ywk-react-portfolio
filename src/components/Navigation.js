import React from "react";
import fileResume from "../resources/resume.pdf"

export default function Navigation() {
    return (
        <nav>
          <div>
            <a href="#about-me">About Me</a>
          </div>
          <div>
            <a href="#work">Work</a>
          </div>
          <div>
            <a href="#contact-me">Contact Me</a>
          </div>
          <div>
            <a href={fileResume}>Resume</a>
          </div>
        </nav>
    )
}