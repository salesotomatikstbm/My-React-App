import React from "react";
import "../Css/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Welcome to Our Platform</h1>
          <p>Build fast, responsive websites with modern tools. Learn. Create. Grow.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://img.freepik.com/free-photo/3d-rendering-computer-desk_23-2151004325.jpg?ga=GA1.1.2071195669.1721226201&semt=ais_hybrid&w=740"
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
