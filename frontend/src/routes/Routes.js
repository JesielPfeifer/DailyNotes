import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '../components/Register/Register';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import App from '../App';
import PrivateRoute from '../services/PrivateRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<PrivateRoute />}>
        <Route path="/app" element={<App />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
