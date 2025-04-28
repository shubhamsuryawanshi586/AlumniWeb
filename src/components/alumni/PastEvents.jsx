import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/PastEvents.css';  // Optional custom CSS for styling
import AlumniSidebar from './AlumniSidebar';

const PastEvents = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser || storedUser.role !== 'alumni') {
      navigate('/login'); // Redirect to login if the user is not an alumni
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  return (
    <div className="organizer-dashboard d-flex">
    <AlumniSidebar/>

      {/* Main content */}
      <div className="content p-4 w-100">
        <h2>✅ Attended/Past Events</h2>
        <p>Your attended or past events will be displayed here.</p>

        {/* Past Event Cards */}
        <div className="row">
          {/* Example Past Event Card */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Event 1</h5>
                <p className="card-text">Description for Event 1</p>
                <p className="card-text"><strong>Attended on:</strong> January 15, 2023</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Event 2</h5>
                <p className="card-text">Description for Event 2</p>
                <p className="card-text"><strong>Attended on:</strong> March 5, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
