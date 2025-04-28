import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// src/components/navbar/Navbar.jsx
import AuthService from './../../services/AuthService';

import './css/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentAccount());
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // Track navbar toggle state
  const navbarRef = useRef(null); // Reference for the navbar
  const navigate = useNavigate();

  useEffect(() => {
    const updateUser = () => setCurrentUser(AuthService.getCurrentAccount());
    window.addEventListener('userChanged', updateUser);
    
    // Event listener to close navbar on outside click
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavbarOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('click', handleClickOutside);
      window.removeEventListener('userChanged', updateUser);
    };
  }, []);

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
    navigate('/');
  };

  const goToDashboard = () => {
    if (currentUser?.role === 'alumni') {
      navigate('/alumni/dashboard');
    } else if (currentUser?.role === 'organizer') {
      navigate('/organizer/dashboard');
    }
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3" ref={navbarRef}>
      <Link className="navbar-brand" to="/">🎓 AlumniConnect</Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        onClick={toggleNavbar} 
        aria-controls="navbarNav" 
        aria-expanded={isNavbarOpen ? 'true' : 'false'} 
        aria-label="Toggle navigation"
      >
        <span className={`navbar-toggler-icon ${isNavbarOpen ? 'active' : ''}`}></span>
      </button>

      <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
        </ul>
        <form className="d-flex me-3">
          <input className="form-control" type="search" placeholder="Search..." />
        </form>
        <ul className="navbar-nav">
          {!currentUser ? (
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <button className="btn btn-outline-light me-2" onClick={goToDashboard}>
                  {currentUser.role === 'alumni' ? 'Alumni Dashboard' : 'Organizer Dashboard'}
                </button>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
