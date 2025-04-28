import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AuthService from '../services/AuthService';
import './css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await AuthService.Login(email, password); // Use AuthService
      console.log(user); // Log user for debugging
      localStorage.setItem('user', JSON.stringify(user));
      if (user.role === 'alumni') {
        Swal.fire('Welcome Alumni..!', 'Login successful', 'success');
        navigate('/alumni/dashboard'); // Redirect to Alumni Dashboard
        window.location.reload(); // Refresh the page
      } else if (user.role === 'organizer') {
        Swal.fire('Welcome Organizer!', 'Login successful', 'success');
        navigate('/organizer/dashboard'); // Redirect to Organizer Dashboard
        window.location.reload(); // Refresh the page
      }

    } catch (err) {
      Swal.fire('Login Failed', 'Check credentials', 'error');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>🎓Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
