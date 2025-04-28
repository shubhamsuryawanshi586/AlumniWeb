// src/components/AlumniProfile.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/AlumniProfile.css';
import AuthService from '../../services/AuthService'; // Assuming you have AuthService
import AlumniSidebar from './AlumniSidebar'; // Optional: if you want a sidebar

const AlumniProfile = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [alumni, setAlumni] = useState(null);
  const [editAlumni, setEditAlumni] = useState({
    name: '',
    email: '',
    batch: '',
    department: '',
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const currentAlumni = AuthService.getCurrentAccount(); // Replace this with localStorage if needed
    if (!currentAlumni || currentAlumni.role !== 'alumni') {
      navigate('/login');
    } else {
      setAlumni(currentAlumni);
      setEditAlumni({
        name: currentAlumni.name,
        email: currentAlumni.email,
        batch: currentAlumni.batch,
        department: currentAlumni.department,
      });
    }
  }, [navigate]);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleEditChange = (e) => {
    setEditAlumni({
      ...editAlumni,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveChanges = () => {
    // Save to localStorage or API
    localStorage.setItem('alumni', JSON.stringify(editAlumni));
    setAlumni(editAlumni);
    setShowModal(false);
  };

  const handleLogout = () => {
    AuthService.logout();
    navigate('/');
  };

  return (
    <>
      <div className="alumni-dashboard d-flex">
        {/* Optional Sidebar */}
        <AlumniSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        <div className={`content-area p-4 ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
          <div className="profile-container">
            <h2 className="profile-title">🎓 Alumni Profile</h2>
            <p className="profile-subtitle">View and update your profile details here.</p>

            {alumni ? (
              <div className="profile-card">
                <div className="profile-header">
                  <div className="profile-img-container">
                    <img
                      src={alumni.profilePicture || 'https://via.placeholder.com/150'}
                      alt="Profile"
                      className="profile-picture"
                    />
                  </div>
                  <div className="profile-info">
                    <h3>{alumni.name}</h3>
                    <p>{alumni.email}</p>
                    <p><strong>Batch:</strong> {alumni.batch}</p>
                    <p><strong>Department:</strong> {alumni.department}</p>
                  </div>
                </div>

                <div className="profile-actions">
                  <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                    Edit Profile
                  </button>
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <p>Loading profile...</p>
            )}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h5>Edit Profile</h5>

            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={editAlumni.name}
                onChange={handleEditChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={editAlumni.email}
                onChange={handleEditChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Batch:</label>
              <input
                type="text"
                name="batch"
                value={editAlumni.batch}
                onChange={handleEditChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Department:</label>
              <input
                type="text"
                name="department"
                value={editAlumni.department}
                onChange={handleEditChange}
                className="form-control"
              />
            </div>

            <div className="modal-actions">
              <button className="btn btn-success" onClick={handleSaveChanges}>
                Save
              </button>
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AlumniProfile;
