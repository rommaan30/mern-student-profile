import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styling

const StudentEdit = () => {
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
  const { id } = useParams(); // Get the student ID from URL params

  // Fetch the existing student data on component mount
  useEffect(() => {
    const fetchStudentData = async () => {
      const response = await fetch(`http://localhost:8000/api/students/${id}`);
      const data = await response.json();
      if (data) {
        setFormData(data); // Pre-fill the form with existing student data
      }
    };

    fetchStudentData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make PUT request to update student profile
    await fetch(`http://localhost:8000/api/students/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // Redirect after successful update
    navigate("/students-list");
  };

  return (
    <div className="container mt-5">
      <h2>Edit Student Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="form-control"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Education</label>
          <input
            type="text"
            name="education"
            className="form-control"
            placeholder="Enter education"
            value={formData.education}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input
            type="text"
            name="contact"
            className="form-control"
            placeholder="Enter contact number"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Institution Name</label>
          <input
            type="text"
            name="institutionName"
            className="form-control"
            placeholder="Enter institution name"
            value={formData.institutionName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Company Name</label>
          <input
            type="text"
            name="companyName"
            className="form-control"
            placeholder="Enter company name"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Skills</label>
          <input
            type="text"
            name="skills"
            className="form-control"
            placeholder="Enter skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">LinkedIn Profile</label>
          <input
            type="url"
            name="linkedinProfile"
            className="form-control"
            placeholder="Enter LinkedIn profile URL"
            value={formData.linkedinProfile}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Social Handle</label>
          <input
            type="text"
            name="socialHandle"
            className="form-control"
            placeholder="Enter social handle"
            value={formData.socialHandle}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">About Me</label>
          <textarea
            name="aboutMe"
            className="form-control"
            placeholder="Write about yourself"
            rows="3"
            value={formData.aboutMe}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default StudentEdit;
