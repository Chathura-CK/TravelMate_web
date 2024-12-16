import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import email_icon from '../../assets/email_icon.png';
import password_icon from '../../assets/password_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/actions/authActions';

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Send login request
      const { data } = await axios.post('http://localhost:5000/auth/login', formData);

      const user = data.user; // Assume backend sends user object
      setUser(user); // Update App state
      localStorage.setItem('user', JSON.stringify(user)); // Persist user to localStorage
      dispatch(loginSuccess(user)); // Update Redux state

      setSuccess('Login successful!');
      setTimeout(() => navigate('/'), 1000); // Redirect to home
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className='login-body'>
      <div className="login-container">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          {error && <div className="alert error">{error}</div>}
          {success && <div className="alert success">{success}</div>}

          <div className="input-group">
            <img src={email_icon} alt="Email Icon" className="icon" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <img src={password_icon} alt="Password Icon" className="icon" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn">Login</button>

          <p className="redirect-text">
            Don't have an account? <Link to="/signup">Sign Up here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
