import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Create and style this file similarly to your Login.css
import logo from '../assets/PeoplesHR.webp'; // Update with the correct path to your logo
import background from '../assets/backgroundHR.jpg'; // Update with the correct path to your background image

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/register', {
        email,
        password,
        confirmPassword,
      });

      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('token', response.data.token);
      alert('Registration successful');
      // Optionally, redirect to login or next step
      window.location.href = '/registerDetails';
    } catch (err) {
      setError(err.response.data.message || 'Registration failed');
    }
  };

  return (
    <div className="register-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="register-box">
        <img src={logo} alt="Peoples HR Logo" className="register-logo" />
        <h2>Register to Peoples HR</h2>
        {error && <p className="register-error">{error}</p>}
        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              className="form-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
