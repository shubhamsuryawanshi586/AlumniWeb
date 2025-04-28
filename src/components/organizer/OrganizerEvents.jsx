import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/OrganizerEvents.css';
import OrganizerSidebar from './OrganizerSidebar';
import AuthService from '../../services/AuthService';

const OrganizerEvents = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [organizer, setOrganizer] = useState(null);

  useEffect(() => {
    const currentUser = AuthService.getCurrentAccount();
    if (!currentUser || currentUser.role !== 'organizer') {
      navigate('/login');
    } else {
      setOrganizer(currentUser);
    }
  }, [navigate]);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <div className="organizer-dashboard d-flex">
        <OrganizerSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Content Area */}
        <div className={`content-area p-4 ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
          <h2>📅 Manage Events</h2>
          <p>This page allows organizers to Create, Read, Update, and Delete events.</p>

          <div className="event-management-buttons d-flex gap-4">
            <button className="btn btn-primary">Create Event</button>
            <button className="btn btn-secondary">View Events</button>
          </div>


          {/* Event CRUD Operations */}
          <div className="event-crud-section mt-4">
            <h5>Event List (To be populated from the database)</h5>
            {/* Table or list of events */}
            <div className="table-responsive">
              <table className="event-table-modern">
                <thead>
                  <tr>
                    <th>Event Name</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Annual Meeting</td>
                    <td>12th May 2025</td>
                    <td>Conference Hall A</td>
                    <td className="table-actions">
                      <button className="edit-btn">Edit</button>
                      <button className="delete-btn">Delete</button>
                    </td>
                  </tr>
                  {/* More rows dynamically */}
                </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizerEvents;
