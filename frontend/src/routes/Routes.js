import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from '../components/Register/Register';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      {/* <Route path="/register" element={<Register />} /> */}
    </Routes>
  );
};

export default AppRoutes;
