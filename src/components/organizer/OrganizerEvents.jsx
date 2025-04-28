import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/OrganizerDashboard.css';

const OrganizerEvents = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser || storedUser.role !== 'organizer') {
      navigate('/login');
    }
  }, [navigate]);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <OrganizerSidebar />
      {/* Content Area */}
      <div className={`content-area p-4 ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
        <h2>📅 Manage Events</h2>
        <p>This page will allow organizers to Create, Read, Update, and Delete events.</p>

        {/* More content related to event management can go here */}
      </div>

    </>
  );
};

export default OrganizerEvents;
