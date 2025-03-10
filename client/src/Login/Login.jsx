import React, { useState } from 'react';
import './Login.css';
import loginimg from '../asset/Login.jpg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username === 'Aayush' && password === 'rockandroll') {
      // Successful login
      navigate("/home");
    } else {
      // Failed login
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <div className='LogPage'>
        <img src={loginimg} className='Logimg'/> 
        <div className='LoginBlock'>
          <h1>Login</h1>
          <input type='text' className='user' placeholder='Username' onChange={handleUsernameChange} />
          <input type='password' className='password' placeholder='Password' onChange={handlePasswordChange} />
          <button className='Form-submit' onClick={handleLogin}>LOGIN</button>
        </div>
      </div>
    </>
  );
};

export default Login;
