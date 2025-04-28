import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/OrganizerProfile.css';
import OrganizerSidebar from './OrganizerSidebar';
import AuthService from '../../services/AuthService'; // Assuming you have AuthService

const OrganizerProfile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [organizer, setOrganizer] = useState(null);
  const [editOrganizer, setEditOrganizer] = useState({ name: '', phone: '' });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = AuthService.getCurrentAccount();
    if (!currentUser || currentUser.role !== 'organizer') {
      navigate('/login');
    } else {
      setOrganizer(currentUser);
      setEditOrganizer({
        name: currentUser.name,
        phone: currentUser.phone,
      });
    }
  }, [navigate]);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleEditChange = (e) => {
    setEditOrganizer({
      ...editOrganizer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveChanges = () => {
    // For now just update local state (you can call API here)
    setOrganizer((prev) => ({
      ...prev,
      name: editOrganizer.name,
      phone: editOrganizer.phone,
    }));

    setShowModal(false);
  };

  return (
    <>
      <div className="organizer-dashboard d-flex">
        <OrganizerSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Content Area */}
        <div className={`content-area p-4 ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
          <h2>🧑‍💼 Organizer Profile</h2>
          <p>View and update your profile details here.</p>

          {organizer ? (
            <div className="profile-card mt-4">
              <h5>Profile Information</h5>
              <div className="profile-details">
                <p><strong>Name:</strong> {organizer.name}</p>
                <p><strong>Email:</strong> {organizer.email}</p>
                <p><strong>Phone:</strong> {organizer.phone}</p>
              </div>
              <button className="btn btn-primary mt-3" onClick={() => setShowModal(true)}>
                Edit Profile
              </button>
            </div>
          ) : (
            <p>Loading profile...</p>
          )}
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
                value={editOrganizer.name}
                onChange={handleEditChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={editOrganizer.phone}
                onChange={handleEditChange}
                className="form-control"
              />
            </div>

            <div className="modal-actions mt-3">
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

export default OrganizerProfile;
