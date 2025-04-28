import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/OrganizerDashboard.css';
import OrganizerSidebar from './OrganizerSidebar';

const TrackAttendance = () => {
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
          <h2>🧾 Track Attendance</h2>
          <p>This page shows event-wise alumni attendance records.</p>

          {/* Attendance table */}
          <div className="attendance-section mt-4">
            <div className="table-responsive">
              <table className="event-table-modern">
                <thead>
                  <tr>
                    <th>Event Name</th>
                    <th>Alumni Name</th>
                    <th>Attendance Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example Row */}
                  <tr>
                    <td>Annual Meeting</td>
                    <td>John Doe</td>
                    <td><span className="badge bg-success">Present</span></td>
                    <td>12th May 2025</td>
                  </tr>
                  {/* Dynamic rows will come here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackAttendance;
