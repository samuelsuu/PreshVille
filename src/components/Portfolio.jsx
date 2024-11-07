import React from "react";
import "../styles/Portfolio.css";
import img from "../assets/mum.jpg";
import img1 from "../assets/mum1.jpg"

export default function Portfolio() {
  const items = [
    { imageUrl: img, description: "Wedding Dress" },
    { imageUrl: img1, description: "Formal Suit" }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio-items">
        {items.map((item, index) => (
          <div className="portfolio-item" key={index}>
            <img src={item.imageUrl} alt={item.description} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
