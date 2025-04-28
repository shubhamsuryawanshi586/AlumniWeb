import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/OrganizerDashboard.css';
import OrganizerSidebar from './OrganizerSidebar';

const OrganizerAlumni = () => {
  return (  
   <>
    <OrganizerSidebar/>
      {/* Content Area */}
      <div className={`content-area p-4 ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
        <h2>👥 Manage Alumni</h2>
        <p>This page allows organizers to register alumni and perform CRUD operations.</p>

        {/* More features for managing alumni can go here */}
      </div>
   </>
    
  );
};

export default OrganizerAlumni;
