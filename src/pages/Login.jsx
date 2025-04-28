import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AuthService from '../services/AuthService';
import './css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('alumni'); // ⭐ Role selection
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "role") setRole(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let user;
      if (role === 'alumni') {
        user = await AuthService.alumniLogin(email, password);
        localStorage.setItem('alumni', JSON.stringify(user));
        Swal.fire('Welcome Alumni!', 'Login successful', 'success');
        navigate('/alumni/dashboard');
      } else if (role === 'organizer') {
        user = await AuthService.organizerLogin(email, password);
        localStorage.setItem('organizer', JSON.stringify(user));
        Swal.fire('Welcome Organizer!', 'Login successful', 'success');
        navigate('/organizer/dashboard');
      }
      window.location.reload();
    } catch (err) {
      Swal.fire('Login Failed', 'Please check your credentials.', 'error');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>🎓Login</h2>

        <select name="role" value={role} onChange={handleChange} required>
          <option value="alumni">Alumni</option>
          <option value="organizer">Organizer</option>
        </select>

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
