import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './components/navbar/ProtectedRoute';

import AlumniDashboard from './components/alumni/AlumniDashBoard';
import UpcomingEvents from './components/alumni/UpcomingEvents';
import RegisterEvent from './components/alumni/RegisterEvent';
import PastEvents from './components/alumni/PastEvents';
// import AlumniProfile from './components/alumni/AlumniProfile';

import OrganizerDashboard from './components/organizer/OrganizerDashboard';
import OrganizerEvents from './components/organizer/OrganizerEvents';
import OrganizerAlumni from './components/organizer/OrganizerAlumni';
import OrganizerAttendance from './components/organizer/OrganizerAttendance';
// import OrganizerProfile from './components/organizer/OrganizerProfile';


const AlumniApp = () => {
  return (
    <Router>
      <div className="box">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* Alumni Protected Routes */}
            {/* <Route
              path="/alumni/dashboard"
              element={
                <ProtectedRoute allowedRoles={['alumni']}>
                  <AlumniDashboard />
                </ProtectedRoute>
              }
            /> */}
            <Route
              path="/alumni/events/upcoming"
              element={
                <ProtectedRoute allowedRoles={['alumni']}>
                  <UpcomingEvents />
                </ProtectedRoute>
              }
            />
            <Route
              path="/alumni/events/register"
              element={
                <ProtectedRoute allowedRoles={['alumni']}>
                  <RegisterEvent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/alumni/events/past"
              element={
                <ProtectedRoute allowedRoles={['alumni']}>
                  <PastEvents />
                </ProtectedRoute>
              }
            />

            {/* <Route
              path="/alumni/profile"
              element={
                <ProtectedRoute allowedRoles={['organizer']}>
                  <AlumniProfile />
                </ProtectedRoute>
              }
            /> */}

            {/* Organizer Protected Routes */}
            <Route
              path="/organizer/dashboard"
              element={
                <ProtectedRoute allowedRoles={['organizer']}>
                  <OrganizerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/organizer/events"
              element={
                <ProtectedRoute allowedRoles={['organizer']}>
                  <OrganizerEvents />
                </ProtectedRoute>
              }
            />
            <Route
              path="/organizer/alumni"
              element={
                <ProtectedRoute allowedRoles={['organizer']}>
                  <OrganizerAlumni />
                </ProtectedRoute>
              }
            />
            <Route
              path="/organizer/attendance"
              element={
                <ProtectedRoute allowedRoles={['organizer']}>
                  <OrganizerAttendance />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="/organizer/profile"
              element={
                <ProtectedRoute allowedRoles={['organizer']}>
                  <OrganizerProfile />
                </ProtectedRoute>
              }
            /> */}

            {/* Common Protected Route */}
            {/* <Route
              path="/profile"
              element={
                <ProtectedRoute allowedRoles={['alumni', 'organizer']}>
                  <Profile />
                </ProtectedRoute>
              }
            /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AlumniApp;
