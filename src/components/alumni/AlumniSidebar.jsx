// src/components/AlumniSidebar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Sidebar.css';
import AuthService from '../../services/AuthService';  // Make sure this path is correct

const AlumniSidebar = ({ setCurrentUser }) => {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    const handleLogout = () => {
        AuthService.logout(); // Logs out by clearing session, localStorage, etc.
        setCurrentUser(null);  // Update current user state
        navigate('/');  // Redirect to homepage or login page
    };

    return (
        <div className={`sidebar ${sidebarOpen ? 'open' : 'collapsed'} bg-dark text-white p-3`}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0">{sidebarOpen ? 'Alumni' : 'A'}</h4>
                <button className="btn btn-sm btn-light toggle-btn" onClick={toggleSidebar}>
                    {sidebarOpen ? '×' : '☰'}
                </button>
            </div>
            <ul className="nav flex-column gap-3">
                <li className="nav-item" onClick={() => navigate('/alumni/events/upcoming')}>
                    {sidebarOpen ? 'Upcoming Events' : '📅'}
                </li>
                <li className="nav-item" onClick={() => navigate('/alumni/events/register')}>
                    {sidebarOpen ? 'Register / Attend' : '📝'}
                </li>
                <li className="nav-item" onClick={() => navigate('/alumni/events/past')}>
                    {sidebarOpen ? 'Past Events' : '📖'}
                </li>

                <li className="nav-item" onClick={() => navigate('/alumni/profile')}>Profile</li>
                
                <li className="nav-item text-danger" onClick={handleLogout}>
                    {sidebarOpen ? 'Logout' : '🚪'}
                </li>
            </ul>
        </div>
    );
};

export default AlumniSidebar;
