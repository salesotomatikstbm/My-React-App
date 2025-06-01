import React from "react";
import "../css/Services.css";

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <h3>Web Development</h3>
          <p>Building responsive and modern websites tailored to your needs.</p>
        </div>
        <div className="service-item">
          <h3>UI/UX Design</h3>
          <p>Creating user-friendly interfaces with attractive designs.</p>
        </div>
        <div className="service-item">
          <h3>Digital Marketing</h3>
          <p>Helping you reach your audience and grow your brand online.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
