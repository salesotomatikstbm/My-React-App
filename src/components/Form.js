import React from 'react';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    if (name.trim() !== '' && email.trim() !== '') {
      alert(`Name: ${name}\nEmail: ${email}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input type="text" name="name" required />
        </div>
        <br />
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" required />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
