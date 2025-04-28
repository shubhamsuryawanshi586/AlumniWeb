// src/components/OrganizerSidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Sidebar.css';

const OrganizerSidebar = () => {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(true);
  
    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (!storedUser || storedUser.role !== 'organizer') {
        navigate('/login');
      }
    }, [navigate]);
  
    const toggleSidebar = () => {
      setSidebarOpen((prev) => !prev);
    };

  return (
    <div className="organizer-dashboard d-flex">
    {/* Sidebar */}
    <div className={`sidebar bg-dark text-white p-3 ${sidebarOpen ? 'open' : 'collapsed'}`}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">{sidebarOpen ? 'Organizer' : 'O'}</h4>
        <button className="btn btn-sm btn-light toggle-btn" onClick={toggleSidebar}>
          {sidebarOpen ? '×' : '☰'}
        </button>
      </div>
      <ul className="nav flex-column gap-3">
        <li className="nav-item" onClick={() => navigate('/organizer/events')}>
          {sidebarOpen ? 'Manage Events' : '📅'}
        </li>
        <li className="nav-item" onClick={() => navigate('/organizer/alumni')}>
          {sidebarOpen ? 'Manage Alumni' : '🧑'}
        </li>
        <li className="nav-item" onClick={() => navigate('/organizer/attendance')}>
          {sidebarOpen ? 'Track Attendance' : '📋'}
        </li>
        <li className="nav-item" onClick={() => navigate('/organizer/profile')}>
          {sidebarOpen ? 'Profile' : '⚙️'}
        </li>
        <li className="nav-item text-danger" onClick={() => { localStorage.clear(); navigate('/'); }}>
          {sidebarOpen ? 'Logout' : '🚪'}
        </li>
      </ul>
    </div>
</div>

  );
};

export default OrganizerSidebar;
