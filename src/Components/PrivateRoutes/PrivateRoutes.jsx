import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("user")) !== null;
  const location = useLocation();

  return isAuthenticated ? (
    Element
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;