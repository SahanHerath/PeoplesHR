import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component }) => {
  const isAuthenticated = localStorage.getItem('token'); // Check if the user is authenticated

  return isAuthenticated ? Component : <Navigate to="/login" />;
};

export default PrivateRoute;