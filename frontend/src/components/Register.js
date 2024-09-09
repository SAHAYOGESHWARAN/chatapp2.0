import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      // Make the API request
      const response = await axios.post('http://localhost:5000/api/auth/register', { email, password });
      
      // Check if response data exists
      if (response && response.data) {
        setMessage(response.data.message); // Show server message
        navigate('/login'); // Navigate to login page on success
      } else {
        setMessage('Unexpected response from server');
      }
    } catch (error) {
      // Check if error response exists
      if (error.response && error.response.data) {
        setMessage(error.response.data.message || 'Registration failed');
      } else {
        setMessage('An error occurred');
      }
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      {message && <p>{message}</p>} {/* Display the message */}
    </div>
  );
};

export default Register;
