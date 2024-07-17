import React, { useEffect, useState } from 'react'
import { PanelContext } from './PanelContext'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

const PanelProvider = ({children}) => {

  const navigator = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //  making this function global to check admin or a user
 


  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
      
  //     fetch(`${apiUrl}/auth/verify-token`, {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         if (data.valid) {
  //           setIsAuthenticated(true);
 
  //         } 
  //         else {
  //           localStorage.removeItem('token');
  //           setIsAuthenticated(false);
           
  //         }
  //       })
  //       .catch(error => {
  //         console.error('Error verifying token:', error);
        
  //         setIsAuthenticated(false);
  //       });
  //   }
  // }, [apiUrl]);




  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "logged out successfully!",
      showConfirmButton: false,
      timer: 1500
  });
  };


  return (
    <PanelContext.Provider value={{isAuthenticated,  setIsAuthenticated, logout}}>
      { children }
    </PanelContext.Provider>
  )
}

export default PanelProvider;
