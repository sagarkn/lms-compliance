// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = () => {
  const { user } = useAuth();

  if (!user) {
    // If no user is logged in, redirect to the /login page
    return <Navigate to="/login" />;
  }

  // If user is logged in, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;