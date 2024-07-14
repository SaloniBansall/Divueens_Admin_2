import React, { useEffect, useState } from 'react'
import { PanelContext } from './PanelContext'
// import { useNavigate } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_API_URL;

const PanelProvider = ({children}) => {

  // const navigator = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //  making this function global to check admin or a user
 

    const checkAuthStatus = () => {

   
    const token = localStorage.getItem('token');
    if (token) {

      // setIsAuthenticated(true)
      
      // fetch(`${apiUrl}/auth/verify-token`, {
      //   headers: {
      //     'Authorization': `Bearer ${token}`
      //   }
      // })
      //   .then(response => response.json())
      //   .then(data => {
      //     if (data.valid) {
      //       console.log(data, 'data')
      //       setIsAuthenticated(true);
 
      //     } 
      //     else {
      //       console.log('removing token from client')
      //       localStorage.removeItem('token');
      //       setIsAuthenticated(false);
           
      //     }
      //   })
      //   .catch(error => {
      //     console.error('Error verifying token:', error);
        
      //     setIsAuthenticated(false);
      //   });
    }else{
      setIsAuthenticated(false)
    }

  }
 




  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    window.location.href = '/login'; // Redirect to login or any other page
    //  navigator("/login")
    
  };


  return (
    <PanelContext.Provider value={{isAuthenticated,  setIsAuthenticated, checkAuthStatus, logout}}>
      { children }
    </PanelContext.Provider>
  )
}

export default PanelProvider;
