import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/OrganizerDashboard.css';
import OrganizerSidebar from './OrganizerSidebar';

const ManageAlumni = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <div className="organizer-dashboard d-flex">
        <OrganizerSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Content Area */}
        <div className={`content-area p-4 ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
          <h2>👥 Manage Alumni</h2>
          <p>This page allows organizers to register alumni and perform CRUD operations.</p>

          {/* More features for managing alumni can go here */}
        </div>
      </div>
    </>
  );
};

export default ManageAlumni;
