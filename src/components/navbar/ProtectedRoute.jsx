import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const alumni = JSON.parse(localStorage.getItem('alumni'));
  const organizer = JSON.parse(localStorage.getItem('organizer'));

  const user = alumni || organizer; // whoever is logged in

  if (!user || !allowedRoles.includes(user.role)) {
    // If no user or user is not in allowedRoles, redirect to login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

