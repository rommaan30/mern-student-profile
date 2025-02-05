// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // const StudentProfile = () => {
// //   const [profileData, setProfileData] = useState({});
// //   const navigate = useNavigate();

// //   // Fetch the logged-in user's data
// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       const response = await fetch(
// //         `http://localhost:8000/api/students/me`,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem("token")}`, // Pass JWT token
// //           },
// //         }
// //       );

// //       const data = await response.json();
// //       if (response.ok) {
// //         setProfileData(data);
// //       } else {
// //         alert(data.message || "Failed to fetch profile");
// //         // navigate("/login"); // Redirect to login if unauthorized
// //       }
// //     };

// //     fetchProfile();
// //   }, [navigate]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setProfileData({ ...profileData, [name]: value });
// //   };

// //   const handleSave = async (e) => {
// //     e.preventDefault();

// //     const response = await fetch(
// //       `http://localhost:8000/api/students/${profileData._id}`,
// //       {
// //         method: "PUT",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //         },
// //         body: JSON.stringify(profileData),
// //       }
// //     );

// //     if (response.ok) {
// //       alert("Profile updated successfully");
// //     } else {
// //       alert("Failed to update profile");
// //     }
// //   };
// //   return (
// //     <div className="container mt-5">
// //       <h2>Student Profile</h2>
// //       <form onSubmit={handleSave}>
// //         <div className="mb-3">
// //           <label className="form-label">Name</label>
// //           <input
// //             type="text"
// //             name="name"
// //             value={profileData.name || ""}
// //             onChange={handleChange}
// //             className="form-control"
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label className="form-label">Username</label>
// //           <input
// //             type="text"
// //             name="username"
// //             value={profileData.username || ""}
// //             onChange={handleChange}
// //             className="form-control"
// //             disabled
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label className="form-label">Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={profileData.email || ""}
// //             onChange={handleChange}
// //             className="form-control"
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label className="form-label">Date of Birth</label>
// //           <input
// //             type="date"
// //             name="dob"
// //             value={profileData.dob || ""}
// //             onChange={handleChange}
// //             className="form-control"
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label className="form-label">Education</label>
// //           <input
// //             type="text"
// //             name="education"
// //             value={profileData.education || ""}
// //             onChange={handleChange}
// //             className="form-control"
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label className="form-label">Contact</label>
// //           <input
// //             type="text"
// //             name="contact"
// //             value={profileData.contact || ""}
// //             onChange={handleChange}
// //             className="form-control"
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label className="form-label">Institution Name</label>
// //           <input
// //             type="text"
// //             name="institutionName"
// //             value={profileData.institutionName || ""}
// //             onChange={handleChange}
// //             className="form-control"
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label className="form-label">Company Name</label>
// //           <input
// //             type="text"
// //             name="companyName"
// //             value={profileData.companyName || ""}
// //             onChange={handleChange}
// //             className="form-control"
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label className="form-label">Skills</label>
// //           <input
// //             type="text"
// //             name="skills"
// //             value={profileData.skills || ""}
// //             onChange={handleChange}
// //             className="form-control"
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label className="form-label">LinkedIn Profile</label>
// //           <input
// //             type="url"
// //             name="linkedinProfile"
// //             value={profileData.linkedinProfile || ""}
// //             onChange={handleChange}
// //             className="form-control"
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label className="form-label">Social Handle</label>
// //           <input
// //             type="text"
// //             name="socialHandle"
// //             value={profileData.socialHandle || ""}
// //             onChange={handleChange}
// //             className="form-control"
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label className="form-label">About Me</label>
// //           <textarea
// //             name="aboutMe"
// //             value={profileData.aboutMe || ""}
// //             onChange={handleChange}
// //             className="form-control"
// //           />
// //         </div>
// //         <button type="submit" className="btn btn-primary">
// //           Save
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default StudentProfile;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const StudentProfile = () => {
//   const [userData, setUserData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // Function to fetch session data
//   const getSessionData = async () => {
//     try {
//       const response = await fetch("http://localhost:8000/get-session");
//       const data = await response.json();
//       setUserData(data);
//     } catch (error) {
//       console.error("Error fetching session data:", error);
//       navigate("/login");
//     }
//   };

//   // Use useEffect to fetch data when the component mounts
//   useEffect(() => {
//     getSessionData();
//   }, [navigate]);

// useEffect(() => {
//   const fetchUserProfile = async () => {
//     try {
//       const response = await fetch("http://localhost:8000/api/students/me", {
//         method: "GET",
//         credentials: "include", // Make sure to include session cookies
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch profile data");
//       }

//       const data = await response.json();
//       setUserData(data);
//     } catch (error) {
//       console.error("Error fetching profile:", error);
//       navigate("/login"); // Redirect to login page if not authorized
//     }
//   };

//   fetchUserProfile();
// }, [navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         "http://localhost:8000/api/students/update",
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           credentials: "include",
//           body: JSON.stringify(userData),
//         }
//       );

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.message || "Failed to update profile");
//       }

//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Error updating profile:", error.message);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="text-center my-4">Your Profile</h2>
//       <form
//         onSubmit={handleUpdate}
//         className="bg-dark text-light p-4 rounded shadow-lg"
//       >
//         <div className="mb-3">
//           <label className="form-label">Full Name</label>
//           <input
//             type="text"
//             name="name"
//             className="form-control bg-secondary text-white"
//             value={userData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Username</label>
//           <input
//             type="text"
//             name="username"
//             className="form-control bg-secondary text-white"
//             value={userData.username}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input
//             type="email"
//             name="email"
//             className="form-control bg-secondary text-white"
//             value={userData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Date of Birth</label>
//           <input
//             type="date"
//             name="dob"
//             className="form-control bg-secondary text-white"
//             value={userData.dob}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Education</label>
//           <input
//             type="text"
//             name="education"
//             className="form-control bg-secondary text-white"
//             value={userData.education}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Contact</label>
//           <input
//             type="text"
//             name="contact"
//             className="form-control bg-secondary text-white"
//             value={userData.contact}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">About Me</label>
//           <textarea
//             name="aboutMe"
//             className="form-control bg-secondary text-white"
//             rows="3"
//             value={userData.aboutMe}
//             onChange={handleChange}
//           ></textarea>
//         </div>
//         <button type="submit" className="btn btn-light w-100">
//           Update Profile
//         </button>
//       </form>
//     </div>

//   );
// };

// export default StudentProfile;

import React, { useEffect, useState } from "react";

const StudentProfile = () => {
  const [sessionData, setSessionData] = useState(null); // State to store user data
  useEffect(() => {
    fetch("http://localhost:8000/get-session", {
      method: "GET",
      credentials: "include", // Required for sessions
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Session Data:", data);
        setSessionData(data.user || null);
      })
      .catch((err) => console.error("Error fetching session data:", err));
  }, []);

  return (
    <div>
      <h2>Student Profile</h2>
      {sessionData ? (
        <div>
          <p>
            <strong>ID:</strong> {sessionData.id}
          </p>
          <p>
            <strong>userName:</strong> {sessionData.username}
          </p>
          <p>
            <strong>Email:</strong> {sessionData.email}
          </p>
        </div>
      ) : (
        <p>Loading session data...</p>
      )}
    </div>
  );
};

export default StudentProfile;
