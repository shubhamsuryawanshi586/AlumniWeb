import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/UpcomingEvents.css';  // Optional custom CSS for styling
import AlumniSidebar from './AlumniSidebar';

const UpcomingEvents = () => {
  const navigate = useNavigate();

  return (
    <div className="alumni-dashboard d-flex">
     <AlumniSidebar/>

      {/* Main content */}
      <div className="content p-4 w-100">
        <h2>📅 Upcoming Events</h2>
        <p>List of all upcoming events will be shown here.</p>

        <div className="row">
          {/* Example Event Card */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Event Title</h5>
                <p className="card-text">Event Description</p>
                <button className="btn btn-primary">Attend Event</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Another Event</h5>
                <p className="card-text">Event Details</p>
                <button className="btn btn-primary">Attend Event</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
