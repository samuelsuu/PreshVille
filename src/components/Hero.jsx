import React from "react";
import "../styles/Hero.css";
import video from "../assets/vid.mp4"; // Import your video file

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Video Background */}
      <video className="hero-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">Tailored Elegance, Just for You</h1>
        <p className="hero-subtitle">
          Discover the finest custom tailoring that brings your style to life with quality and precision.
        </p>
        <div className="hero-buttons">
          <button className="button-primary">Get Started</button>
          <button className="button-outline">Learn More</button>
        </div>
      </div>
    </section>
  );
}
