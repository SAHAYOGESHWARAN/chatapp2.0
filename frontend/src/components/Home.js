import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to the  Chat Application</h1>
      <p>This is a simple chat application built.</p>
      <div>
        <Link to="/login" style={{ margin: '10px', textDecoration: 'none', color: 'blue' }}>Login</Link>
        <Link to="/register" style={{ margin: '10px', textDecoration: 'none', color: 'blue' }}>Register</Link>
        <Link to="/chat" style={{ margin: '10px', textDecoration: 'none', color: 'blue' }}>Chat</Link>
      </div>
    </div>
  );
};

export default Home;
