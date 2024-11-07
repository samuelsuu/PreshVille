import React from "react";
import "../styles/About.css";
import img from "../assets/mum1.jpg"

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <div className="about-content">
        <img src={img} alt="Our Work" className="about-image" />
        <div className="about-text">
          <p>We are a professional tailoring business specializing in custom-made clothing.</p>
          <p>Our mission is to provide our clients with perfectly fitted, stylish, and high-quality clothing for all occasions.</p>
        </div>
      </div>
    </section>
  );
}
