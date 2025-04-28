import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/AlumniDashboard.css';
import AlumniSidebar from './AlumniSidebar';

const AlumniDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser || storedUser.role !== 'alumni') {
      navigate('/login');
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="alumni-dashboard d-flex">
    <AlumniSidebar/>
      {/* Main Content */}
      <div className={`content-area p-4 ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
        <h2 className="mb-4">Welcome, {user?.name}</h2>

        {/* Stats */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card stat-card bg-primary text-white shadow">
              <div className="card-body">
                <h5 className="card-title">Upcoming Events</h5>
                <p className="card-text fs-3">5</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card stat-card bg-success text-white shadow">
              <div className="card-body">
                <h5 className="card-title">Events Attended</h5>
                <p className="card-text fs-3">8</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card stat-card bg-info text-white shadow">
              <div className="card-body">
                <h5 className="card-title">Total Registered</h5>
                <p className="card-text fs-3">3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add more features if needed */}
      </div>
    </div>
  );
};

export default AlumniDashboard;
