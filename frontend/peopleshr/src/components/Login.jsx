import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import logo from '../assets/PeoplesHR.webp'; // Update with the correct path to your logo
import background from '../assets/backgroundHR.jpg'; // Update with the correct path to your background image

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/login', { email, password });
      alert('Login successful');
      // Store the token and redirect to the dashboard or home page
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('isAdmin', response.data.isAdmin);
      // Redirect to a different page if needed
      if (response?.data?.isAdmin) {
        window.location.href = '/admin-dashboard';
      } else {
        window.location.href = '/dashboard';
      }
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="login-box">
        <img src={logo} alt="Peoples HR Logo" className="login-logo" />
        <h2>Login to Peoples HR</h2>
        {error && <p className="login-error">{error}</p>}
        <form onSubmit={handleLogin} className="login-form">
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
          <div className="forgot-password-link">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="register-link">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
