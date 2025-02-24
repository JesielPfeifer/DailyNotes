import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '../components/Register/Register';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import App from '../App';
import PrivateRoute from '../services/PrivateRoutes';
import ClientArea from '../components/ClientArea/ClientArea';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<ClientArea />} />
      <Route path="/contact" element={<Register />} />
      <Route element={<PrivateRoute />}>
        <Route path="/app" element={<App />} />
        <Route path="/client" element={<App />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
