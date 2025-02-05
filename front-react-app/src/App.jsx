import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

import ThankYou from "./components/ThankYou";
import StudentProfile from "./components/StudentProfile";

function App() {
  // useEffect(() => {
  //   // Set session when component mounts (optional)
  //   fetch("http://localhost:8000/set-session", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ user: { id: 1, name: "Sahil Khan" } }),
  //   })
  //     .then((res) => res.text())
  //     .then((message) => console.log(message)); // "Session data set!"
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<StudentProfile />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
