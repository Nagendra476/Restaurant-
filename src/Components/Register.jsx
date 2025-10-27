import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_number: "",
    password: "",
  });

  // ✅ Update input fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Send data to Django backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/register/", // Your Django API endpoint
        formData
      );

      console.log("✅ Data sent successfully:", response.data);
      alert("Registration successful!");
    } catch (error) {
      console.error("❌ Error sending data:", error);
      alert("Error during registration. Check backend connection!");
    }
  };

  return (
    <div style={{ width: "350px", margin: "auto", marginTop: "50px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="contact_number"
          placeholder="Contact Number"
          value={formData.contact_number}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
