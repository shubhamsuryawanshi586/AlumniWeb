import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/OrganizerDashboard.css';
import OrganizerSidebar from './OrganizerSidebar';
import AuthService from '../../services/AuthService';

const OrganizerDashboard = () => {
  const navigate = useNavigate();
  const [organizer, setOrganizer] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const currentUser = AuthService.getCurrentAccount();
    if (!currentUser || currentUser.role !== 'organizer') {
      navigate('/login');
    } else {
      setOrganizer(currentUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('organizer');
    window.location.href = '/'; // Reload and navigate to home
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="organizer-dashboard d-flex">
      <OrganizerSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`content-area p-4 ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
        <h2 className="mb-4">Welcome, {organizer?.name}</h2>

        {/* Stats */}
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="card stat-card bg-primary text-white shadow">
              <div className="card-body">
                <h5 className="card-title">Total Events</h5>
                <p className="card-text fs-3">12</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card stat-card bg-success text-white shadow">
              <div className="card-body">
                <h5 className="card-title">Registered Alumni</h5>
                <p className="card-text fs-3">45</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card stat-card bg-info text-white shadow">
              <div className="card-body">
                <h5 className="card-title">Attendance Records</h5>
                <p className="card-text fs-3">78</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add more features if needed */}
      </div>
    </div>
  );
};

export default OrganizerDashboard;
