import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/OrganizerDashboard.css';
import OrganizerSidebar from './OrganizerSidebar';

const OrganizerDashboard = () => {
  const navigate = useNavigate();
  const [organizer, setOrganizer] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser || storedUser.role !== 'organizer') {
      navigate('/login');
    } else {
      setOrganizer(storedUser);
    }
  }, [navigate]);

  return (

    <>
      <OrganizerSidebar/>
      {/* Content */}
      <div className={`content-area p-4 ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
        <h2 className="mb-4">Welcome, {organizer?.name}</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card stat-card bg-primary text-white shadow">
              <div className="card-body">
                <h5 className="card-title">Total Events</h5>
                <p className="card-text fs-3">12</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card stat-card bg-success text-white shadow">
              <div className="card-body">
                <h5 className="card-title">Registered Alumni</h5>
                <p className="card-text fs-3">45</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card stat-card bg-info text-white shadow">
              <div className="card-body">
                <h5 className="card-title">Attendance Records</h5>
                <p className="card-text fs-3">78</p>
              </div>
            </div>
          </div>
        </div>

        {/* More features can go here */}
      </div>
    </>



  );
};

export default OrganizerDashboard;
