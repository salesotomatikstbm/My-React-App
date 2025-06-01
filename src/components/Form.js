import React from "react";
import "../css/Form.css";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();

    if (name !== "" && email !== "") {
      alert(`Name: ${name}\nEmail: ${email}`);
      e.target.reset(); // Clear the form after submission
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="your@email.com" required />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
