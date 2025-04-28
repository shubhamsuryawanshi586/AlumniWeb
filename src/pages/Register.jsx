import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import './css/Register.css'; // Create this for styling

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await AuthService.userRegister(form);
      Swal.fire('Success', 'Registration complete!', 'success');n
      navigate('/login');
    } catch (error) {
      Swal.fire('Error', 'Registration failed. Please try again.', 'error');
    }
  };
  

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>🎓 Alumni Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>

        <p className="login-link ">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
