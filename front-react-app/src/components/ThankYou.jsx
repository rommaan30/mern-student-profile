import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h2>🎉 Registration Successful! 🎉</h2>

      <p>Thank You for Registering. You can now log in to your account.</p>
      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  );
};

export default ThankYou;
