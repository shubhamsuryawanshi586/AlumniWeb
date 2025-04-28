// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import AuthService from '../services/AuthService';

// const ProtectedRoute = ({ children, allowedRoles = [] }) => {
//   const user = AuthService.getCurrentAccount();

//   // If user is not logged in
//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   // If allowedRoles is specified, enforce role access
//   if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
//     return <Navigate to="/" />;
//   }

//   return children;
// };

// export default ProtectedRoute;
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user || !allowedRoles.includes(user.role)) {
    // Redirect to login if the user is not authenticated or doesn't have the right role
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
