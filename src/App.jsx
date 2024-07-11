import { useContext, useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import Product from './components/Product'
import SideBar from './components/SideBar'
import Login from './components/Login'
import SignUp from './components/SIgnUp'

import Banner from './components/Banner/Banner'
import ChangeProduct from './components/ChangeProduct'
import AdminProfile from './components/admin/AdminProfile'
import ProtectedRoute from './components/ProtectedRoute'
import { PanelContext } from './context/PanelContext'
import Navbar from './components/Navbar'
import NotAuthorizedPage from './components/NotAuthorizedPage'


function App() {

  const navigator = useNavigate()

  const { isAuthenticated, setIsAuthenticated, role, fetchRole } = useContext(PanelContext)

  useEffect(() => {
    // to get token from the url
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token')
    console.log(token, 'token from google')
    if (token) {

      localStorage.setItem('token', token);
      // localStorage.getItem('token')
      console.log(token, 'use this token')

      setIsAuthenticated(true)
      // window.location.href = '/admin-profile'; // Redirect to home page or another route if needed
      navigator("/admin-profile")
    }
  }, [setIsAuthenticated])

  console.log(isAuthenticated, 'authenticated')
  return (
    <>
      <div className="w-full h-auto">

        
        <Navbar />
        {/* <h2 className='text-3xl text-center p-4 font-bold'>Admin Dashboard</h2> */}

        {!isAuthenticated ?
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/access-denied" element={<NotAuthorizedPage />} />
           
          </Routes>
          : (
            <>

              <div className="flex h-full  sticky top-0  flex-row gap-4 justify-around">
                <SideBar />
                <div className="w-full bg-gray-100">
                  <div className=" rounded ">
                    <Routes>
                      <Route exact path="/" element={<ProtectedRoute> <Product /> </ProtectedRoute>} />
                      <Route exact path="/banner" element={<ProtectedRoute>  <Banner /> </ProtectedRoute>} />
                      <Route exact path="/add" element={<ProtectedRoute> <AddProduct /> </ProtectedRoute>} />
                      <Route exact path="/update/:_id" element={<ProtectedRoute> <ChangeProduct /> </ProtectedRoute>} />
                      <Route exact path="/admin-profile" element={<ProtectedRoute> <AdminProfile /> </ProtectedRoute>} />
                    </Routes>
                  </div>
                </div>
              </div>
            </>
          )
        }

      </div>
    </>
  )
}

export default App
