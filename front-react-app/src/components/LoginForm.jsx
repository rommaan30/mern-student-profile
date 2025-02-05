// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";

// const LoginForm = () => {
//   // const [credentials, setCredentials] = useState({});
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   const response = await fetch("http://localhost:8000/api/auth/login", {
//   //     method: "POST",
//   //     headers: { "Content-Type": "application/json" },
//   //     body: JSON.stringify(credentials),
//   //   });

//   //   const data = await response.json();

//   //   if (data.token) {
//   //     localStorage.setItem("token", data.token);
//   //     navigate("/students-profile");
//   //   } else {
//   //     alert("Login failed!");
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:8000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include", // For session-based authentication
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       console.log("Response from server:", data);

//       if (!response.ok) {
//         throw new Error(data.message || "Login failed");
//       }

//       alert("Login successful!");

//       window.location.href = "/students-profile"; // Redirect to profile page
//     } catch (error) {
//       console.error("Login error:", error.message);
//       alert(error.message);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-dark text-light p-4 rounded shadow-lg"
//     >
//       <div className="mb-3">
//         <label className="form-label text-white">Username</label>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           onChange={handleChange}
//           className="form-control bg-secondary text-white border-light"
//         />
//       </div>

//       <div className="mb-3">
//         <label className="form-label text-white">Password</label>
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           className="form-control bg-secondary text-white border-light"
//         />
//       </div>

//       <button type="submit" className="btn btn-light w-100">
//         Login
//       </button>
//     </form>
//   );
// };

// export default LoginForm;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Required for session-based auth
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      alert("Login successful!");
      console.log("Logged in user:", data.User);

      // Store session data
      fetch("http://localhost:8000/set-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: {
            id: data.user.id,
            name: data.user.name,
            username: data.user.username,
          },
        }),
      })
        .then((res) => res.text())
        .then((message) => console.log(message)); // Output: "Session data set!"

      navigate("/profile"); // Redirect to Student Profile Page
    } catch (error) {
      console.error("Login error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2>Login</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-dark text-light p-4 rounded shadow-lg"
      >
        <div className="mb-3">
          <label className="form-label text-white">Username</label>
          <input
            type="text"
            name="username"
            className="form-control bg-secondary text-white border-light"
            placeholder="Enter username"
            value={credentials.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Password</label>
          <input
            type="password"
            name="password"
            className="form-control bg-secondary text-white border-light"
            placeholder="Enter password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-light w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
