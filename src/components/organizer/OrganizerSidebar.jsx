// src/components/OrganizerSidebar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Sidebar.css';
import AuthService from '../../services/AuthService';

const OrganizerSidebar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleLogout = () => {
    AuthService.logout(); // Logs out by clearing session, localStorage, etc.
    setCurrentUser(null);  // Update current user state
    navigate('/');  // Redirect to homepage or login page
  };

  return (
    <div className="organizer-dashboard d-flex">

      <div className={`sidebar bg-dark text-white p-3 ${sidebarOpen ? 'open' : 'collapsed'}`}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">{sidebarOpen ? 'Organizer' : ' '}</h4>
          <button className="btn btn-sm btn-light toggle-btn" onClick={toggleSidebar}>
            {sidebarOpen ? '×' : '☰'}
          </button>
        </div>
        <ul className="nav flex-column gap-3">
          <li className="nav-item" onClick={() => navigate('/organizer/events')}>
            {sidebarOpen ? 'Manage Events' : '📅'}
          </li>
          <li className="nav-item" onClick={() => navigate('/organizer/managealumni')}>
            {sidebarOpen ? 'Manage Alumni' : '🧑'}
          </li>
          <li className="nav-item" onClick={() => navigate('/organizer/trackattendance')}>
            {sidebarOpen ? 'Track Attendance' : '📋'}
          </li>
          <li className="nav-item" onClick={() => navigate('/organizer/profile')}>
            {sidebarOpen ? 'Profile' : '⚙️'}
          </li>
          <li className="nav-item text-danger" onClick={handleLogout}>
            {sidebarOpen ? 'Logout' : '🚪'}
          </li>

        </ul>
      </div>
    </div>

  );
};

export default OrganizerSidebar;
