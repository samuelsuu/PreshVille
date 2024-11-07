import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get in Touch</h2>

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="phone-number">
          <h3>Phone Number</h3>
          <p>
            <a href="tel:+2349031344516" className="phone-link">
              +234 903 134 4516
            </a>
          </p>
        </div>

        {/* Location Section with Google Map */}
        <div className="location">
          <h3>Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6186143470586!2d6.983748274037465!3d4.835369140477378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069ce6a967c533b%3A0xdb2114d017b8ee9d!2s397%20Ikwerre%20Rd%2C%20WIMPEY%2C%20Port%20Harcourt%20500272%2C%20Rivers!5e0!3m2!1sen!2sng!4v1730978242089!5m2!1sen!2sng"
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
