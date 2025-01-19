import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AppRoutes />
  </Router>,
);
