import React, { useContext, useEffect, useState } from 'react';
import profileImage from '../../assets/admin.jpg';
import { Link, useNavigate, } from 'react-router-dom';
import Swal from 'sweetalert2';
import { PanelContext } from '../../context/PanelContext';
const apiUrl = import.meta.env.VITE_API_URL;
const domain = import.meta.env.VITE_DOMAIN;


const AdminProfile = () => {
    const navigator= useNavigate()
    const { isAuthenticated } = useContext(PanelContext)
    console.log(apiUrl,isAuthenticated, 'usrllll profile comp')

    const [formData, setFormData] = useState({
        username: "",
        fullName: "",
        email: "",
        profession: "",
    });


    useEffect(() => {
        const fetchData = async () => {
            const token = `Bearer ${localStorage.getItem('token')}`;
            try {
                const response = await fetch(`${apiUrl}/auth/admin-profile`, {
                    headers: {
                        'Authorization': token,
                    },
                });

                if (!response.ok) {
                    const data = await response.json();
                    Swal.fire({
                        position: "center",
                        icon: "warning",
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    window.location.href = `${domain}/access-denied`
                    
                    // Handle redirection or other actions on error
                } else {
                    const data = await response.json();
                    setFormData({fullName: `${data?.firstName} ${data?.lastName}` , email: data.email, profession: data.role })
                    console.log('admin data:', data);
                    // Handle successful data retrieval
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error scenarios
            }
        };

        fetchData(); 

    }, [])


    // Function to handle changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };



    return (
        <>

            <div className="justify-center items-start min-h-screen bg-gray-100 py-8 ml-[3rem] mr-[3rem]">
                {/* Left Side - Profile Information */}
                <div className="flex row justify-around items-center ">
                    {/* Left Side - Circular Profile Image */}
                    <div className="flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg ">
                        <img src={profileImage} alt="Profile" className="w-20 h-20 object-cover" />
                    </div>


                    {
                        formData?.fullName ?
                            (
                                <h2 className="text-2xl font-bold ">Hello, {formData.fullName}</h2>
                            )

                            : "Hello, Admin"

                    }

                  



                </div>
                <br></br>

                <h2 className="text-2xl font-bold text-center">ACCOUNT</h2>
                <hr className="my-4 border-gray-300"></hr>

                {/* Right Side - Edit Form */}
                <div className="flex flex-col items-center   mx-auto">
                    {/* Edit Form */}
                    <form className="mt-8 w-1/2 space-y-4">
                        {formData?.fullName ?

                            <div className="flex items-center">
                                <label className="w-[15rem] text-gray-700 ml-[2rem]">Full Name:</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className=" px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-[20rem]"
                                />
                            </div> : ""
                        }
                        <div className="flex items-center">
                            <label className="w-[15rem] text-gray-700 ml-[2rem]">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className=" px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-[20rem]"
                            />
                        </div>

                      

                        <div className="flex items-center">
                            <label className="w-[15rem] text-gray-700 ml-[2rem]">Profession:</label>
                            <input
                                type="text"
                                name="profession"
                                value={formData.profession}
                                onChange={handleChange}
                                className=" px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-[20rem]"
                            />
                        </div>

                    </form>

                    {/* Buttons */}
                    <div className="mt-8 space-x-4">
                        <button
                            className="px-4 py-2 disabled bg-red-400 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                        >
                            Edit
                        </button>
                        <button
                            className="px-4 py-2 disabled bg-pink-400 text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminProfile
