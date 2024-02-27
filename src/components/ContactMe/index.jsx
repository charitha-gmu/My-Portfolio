import React, { useState } from "react";

const ContactMe = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (value, key) => {
    setData({ ...data, [key]: value });
  };

  return (
    <div className="contact-me-container" id="contactMe">
      <div className="contact-me-header">Contact Me</div>
      <div className="contact-me-content">
        <input
          placeholder="Name"
          className="input-field"
          value={data.name}
          onChange={(e) => handleChange(e.target.value, "name")}
        />
        <input
          placeholder="Email"
          type="email"
          className="input-field"
          value={data.email}
          onChange={(e) => handleChange(e.target.value, "name")}
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="input-field textarea"
          value={data.message}
          onChange={(e) => handleChange(e.target.value, "name")}
        />
        <div className="button-container">
          <button className="button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
