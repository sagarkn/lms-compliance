// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Layout from './component/LMS/Layout';
import ProtectedRoute from './component/Navigation/ProtectedRoute';

import LoginPage from './pages/login/index';
import DashboardPage from './pages/Dashboard';

import SettingsPage from './pages/Settings';
import DefineLimitPattern from './pages/DefineLimitPattern';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/define" element={<DefineLimitPattern />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;