import React, { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to handle smooth scrolling
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <nav className="navbar">
      {/* PreshVille title with link to the hero section */}
      <h1
        className="navbar-title"
        onClick={(e) => scrollToSection(e, "#hero")}
        style={{ cursor: "pointer" }} // Make it clear that it's clickable
      >
        PreshVille
      </h1>
      <ul className={`navbar-links ${isOpen ? "navbar-links-mobile" : ""}`}>
        <li>
          <a href="#about" onClick={(e) => scrollToSection(e, "#about")}>
            About
          </a>
        </li>
        <li>
          <a href="#services" onClick={(e) => scrollToSection(e, "#services")}>
            Services
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={(e) => scrollToSection(e, "#portfolio")}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
    </nav>
  );
}
