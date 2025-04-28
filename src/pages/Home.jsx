import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>🎓 Alumni Event Management System</h1>
      <div className="button-group">
        <div className="login-option">
          <img src="https://img.icons8.com/ios/452/admin-settings-male.png"  alt="Organizer" className="login-icon" />
          <button onClick={() => navigate('/login')} className="home-btn organizer-btn">
            Organizer Login
          </button>
        </div>
        <div className="login-option">
          <img  src="https://img.icons8.com/ios/452/student-registration.png"  alt="Alumni" className="login-icon" />
          <button onClick={() => navigate('/login')} className="home-btn alumni-btn">
            Alumni Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
