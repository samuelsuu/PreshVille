import React from "react";
import "../styles/Services.css";

export default function Services() {
  const services = [
   
    { title: "Custom Tailoring", description: "Tailored to fit you perfectly." },
    { title: "Alterations", description: "Make your clothes fit just right." },
    { title: "Custom Tailoring", description: "Tailored to fit you perfectly." },
    { title: "Alterations", description: "Make your clothes fit just right." },
    { title: "Custom Tailoring", description: "Tailored to fit you perfectly." },
    { title: "Alterations", description: "Make your clothes fit just right." }
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
