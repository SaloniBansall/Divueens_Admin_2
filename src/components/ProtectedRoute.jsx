import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'

// import { PanelContext } from '../context/PanelContext';

const ProtectedRoute = ({ children }) => {
 
  // const { isAuthenticated } = useContext(PanelContext);

  return  localStorage.getItem('token')  ? children : <Navigate to="/login" />;


}

export default ProtectedRoute
// src/components/ProtectedRoute.js

