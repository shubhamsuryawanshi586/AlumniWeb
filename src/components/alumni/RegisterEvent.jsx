import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/RegisterEvent.css';
import AlumniSidebar from './AlumniSidebar';

const RegisterEvent = () => {
  const navigate = useNavigate();

  return (
    <div className="alumni-dashboard d-flex">
     <AlumniSidebar/>

      {/* Main content */}
      <div className="content p-4 w-100">
        <h2>📝 Register for Events</h2>
        <p>Here are the available events you can register for:</p>

        <div className="row">
          {/* Example Event Card */}
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Event 1</h5>
                <p className="card-text">Description for Event 1</p>
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Event 2</h5>
                <p className="card-text">Description for Event 2</p>
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterEvent;
