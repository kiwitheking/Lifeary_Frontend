import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../style/login.css';  

axios.defaults.baseURL = 'http://192.168.0.102:3001';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`/users/${username}`, { username, password });

      if (response.data.password === password) {
        console.log('Login successful!', response.data);
        navigate('/home')
      } else {
        alert('Wrong password!');
      }
    } catch (error) {
      alert('Username not exist!', error.message);
    }
  };

  return (
    <div className="login-page-container">
      <form onSubmit={handleSubmit} className="login-container">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
