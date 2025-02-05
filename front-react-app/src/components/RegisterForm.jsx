import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    dob: "",
    education: "",
    contact: "",
    institutionName: "",
    companyName: "",
    skills: "",
    linkedinProfile: "",
    socialHandle: "",
    aboutMe: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to register");
      }

      alert("Registration successful!");
      navigate("/thank-you"); // Redirect to Thank You Page
    } catch (error) {
      console.error("Registration error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="  container d-flex justify-content-center align-items-center ">
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <h2 className=" text-center mb-4">Student Registration</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-dark text-light p-4  rounded shadow-lg"
        >
          <div className="mb-3">
            <label className="form-label text-white">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control bg-secondary text-white border-light"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Username</label>
            <input
              type="text"
              name="username"
              className="form-control bg-secondary text-white border-light"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Email</label>
            <input
              type="email"
              name="email"
              className="form-control bg-secondary text-white border-light"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="form-control bg-secondary text-white border-light"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Education</label>
            <input
              type="text"
              name="education"
              className="form-control bg-secondary text-white border-light"
              placeholder="Enter education"
              value={formData.education}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Contact Number</label>
            <input
              type="text"
              name="contact"
              className="form-control bg-secondary text-white border-light"
              placeholder="Enter contact number"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Institution Name</label>
            <input
              type="text"
              name="institutionName"
              className="form-control bg-secondary text-white border-light"
              placeholder="Enter institution name"
              value={formData.institutionName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Company Name</label>
            <input
              type="text"
              name="companyName"
              className="form-control bg-secondary text-white border-light"
              placeholder="Enter company name"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Skills</label>
            <input
              type="text"
              name="skills"
              className="form-control bg-secondary text-white border-light"
              placeholder="Enter skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">LinkedIn Profile</label>
            <input
              type="url"
              name="linkedinProfile"
              className="form-control bg-secondary text-white border-light"
              placeholder="Enter LinkedIn profile URL"
              value={formData.linkedinProfile}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Social Handle</label>
            <input
              type="text"
              name="socialHandle"
              className="form-control bg-secondary text-white border-light"
              placeholder="Enter social handle"
              value={formData.socialHandle}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">About Me</label>
            <textarea
              name="aboutMe"
              className="form-control bg-secondary text-white border-light"
              placeholder="Write about yourself"
              rows="3"
              value={formData.aboutMe}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Password</label>
            <input
              type="password"
              name="password"
              className="form-control bg-secondary text-white border-light"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-light w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
