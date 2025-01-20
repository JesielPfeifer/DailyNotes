import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('authToken');
  console.log(token);
  return token ? <Outlet /> : <Navigate to="/app" />;
};

export default PrivateRoute;
