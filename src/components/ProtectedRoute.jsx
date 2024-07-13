import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { PanelContext } from '../context/PanelContext';

const ProtectedRoute = ({ children }) => {
 
  // const { isAuthenticated, checkAuthStatus } = useContext(PanelContext);

  // useEffect(() => {
  //   checkAuthStatus();
  // }, [checkAuthStatus]);

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }

  // return children;

  return  localStorage.getItem('token')  ? children : <Navigate to="/login" /> ;


}

export default ProtectedRoute
// src/components/ProtectedRoute.js

