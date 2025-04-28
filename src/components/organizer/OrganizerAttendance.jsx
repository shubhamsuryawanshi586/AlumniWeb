import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/OrganizerDashboard.css';

const OrganizerAttendance = () => {
  return (
    <>
      <OrganizerSidebar />

      {/* Content Area */}
      <div className={`content-area p-4 ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
        <h2>🧾 Track Attendance</h2>
        <p>This page shows event-wise alumni attendance records.</p>

        {/* More content related to attendance tracking can go here */}
      </div>
    </>
  );
};

export default OrganizerAttendance;
