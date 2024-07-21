import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { PanelContext } from '../context/PanelContext';
const apiUrl = import.meta.env.VITE_API_URL;

const Navbar = () => {

    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const { logout } = useContext(PanelContext);
   
    useEffect(() => {

        const token = localStorage.getItem('token')

        const checkToken = async () => {
            const response = await fetch(`${apiUrl}/auth/verify-token`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          const data = await response.json()
          if(data.user){
            console.log(data.user, 'user nav')
                setIsAuthenticated(true)
          }else{
              setIsAuthenticated(false)
          }
        }
        
        checkToken()
        
    }, []);



    return (
        <nav className="sticky top-0 z-50 flex justify-between min-h-[12vh] items-center py-2 px-[.5rem] text-black bg-white border-b-pink-200 border-2 md:flex-row flex-col">
            <div className="flex items-center">
                <h2 className='text-lg font-bold mx-5'>Divueens <span className='text-pink-500'> Administration </span> </h2>
            </div>

            <ul className="flex items-center md:flex-row flex-col space-x-6 px-4">
                <li className="flex mr-6 md:mr-0">
                    <input
                        type='search'
                        placeholder="Search"
                        className='rounded-full focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-600 p-2 border-pink-400 border-2'
                    />
                </li>
                {isAuthenticated ? (
                    <>
                        <li className="flex mr-6 md:mr-0">
                            <Link onClick={logout} className="text-pink-500 font-semibold hover:bg-pink-500 hover:text-white rounded px-2 py-1">
                                Logout
                            </Link>
                        </li>
                        <Link to={"/admin-profile"} className="relative text-pink-500 hover:text-pink-700 md:relative md:flex md:items-center">
                            <FaUser />
                        </Link>
                    </>
                ) : (
                    <>
                    {location.pathname === "/login" ? (
                        <Link to={"/signup"} className="text-pink-500 font-semibold  rounded px-2 py-1 mr-[5rem]">
                            Signup
                        </Link>
                    ) : (
                        <Link to={"/login"} className="text-pink-500 font-semibold   rounded px-2 py-1 mr-[5rem]">
                            Login
                        </Link>
                    )}
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;


