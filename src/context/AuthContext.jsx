// src/context/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (userData) => {
    // In a real app, you'd have an API call here.
    // We'll simulate it with a dummy user.
    const fakeUser = { username: userData.username, email: userData.email };
    setUser(fakeUser);
    navigate('/'); // Navigate to the main dashboard after login
  };

  const logout = () => {
    setUser(null);
    navigate('/login'); // Navigate to login page after logout
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};