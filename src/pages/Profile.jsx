import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import Swal from 'sweetalert2';
import './css/Profile.css';

function Profile() {
  const [user, setUser] = useState(AuthService.getCurrentAccount());
  const [form, setForm] = useState({ ...user });
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    AuthService.updateCurrentAccount(form);
    setUser(form);
    Swal.fire('Updated!', 'Profile info updated.', 'success');
  };

  if (!user) return <p>Loading...</p>;

  const renderSidebar = () => {
    const commonStyle = 'sidebar bg-dark text-white p-3';
    return (
      <div className={commonStyle}>
        <h4 className="text-center mb-4">
          {/* {user.user_role_name === 'alumni' ? 'Alumni Panel' : 'Organizer Panel'} */}
          {user.user_role_name === 'alumni' ? 'Alumni Panel' : 'Organizer'}
        </h4>
        <ul className="nav flex-column gap-3">
          {user.user_role_name === 'alumni' ? (
            <>
              <li className="nav-item" onClick={() => navigate('/alumni/events/upcoming')}>Upcoming Events</li>
              <li className="nav-item" onClick={() => navigate('/alumni/events/register')}>Register / Attend</li>
              <li className="nav-item" onClick={() => navigate('/alumni/events/past')}>Past Events</li>
              <li className="nav-item" onClick={() => navigate('/profile')}>Profile</li>
            </>
          ) : (
            <>
              <li className="nav-item" onClick={() => navigate('/organizer/events')}>Manage Events</li>
              <li className="nav-item" onClick={() => navigate('/organizer/alumni')}>Manage Alumni</li>
              <li className="nav-item" onClick={() => navigate('/organizer/attendance')}>Track Attendance</li>
              <li className="nav-item" onClick={() => navigate('/profile')}>Profile</li>
            </>
          )}
          <li className="nav-item text-danger" onClick={() => { localStorage.removeItem('user'); navigate('/'); }}>Logout</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="dashboard-layout">
      {renderSidebar()}

      <div className="content-area">
        <div className="profile-card">
          <h2>👤 Profile</h2>

          <div className="profile-photo">
            {form.photo ? (
              <img src={form.photo} alt="Profile" />
            ) : (
              <div className="placeholder-photo">No Photo</div>
            )}
          </div>

          <form onSubmit={handleUpdate} className="profile-form">
            <label>
              Name:
              <input type="text" name="name" value={form.name} onChange={handleChange} required />
            </label>

            <label>
              Email:
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>

            <label>
              Photo URL:
              <input type="text" name="photo" value={form.photo || ''} onChange={handleChange} />
            </label>

            <label>
              Role:
              <input type="text" value={user.user_role_name} readOnly disabled />
            </label>

            <button type="submit">Update Profile</button>
          </form>

          {user.user_role_name === 'alumni' ? (
            <div className="role-message alumni-message">
              <h3>🎓 Alumni Info</h3>
              <p>Welcome! Manage your events, track attendance, and stay connected.</p>
            </div>
          ) : (
            <div className="role-message organizer-message">
              <h3>📅 Organizer Info</h3>
              <p>Hello Organizer! Handle events and monitor alumni engagement.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
