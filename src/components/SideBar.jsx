// import React from 'react'
// import { Link, useLocation } from 'react-router-dom';



// const SideBar = () => {

//     const location = useLocation()

//     return (
//         <>
//             {/* SheetTrigger for small screens */}
        


//             <div className='md:block hidden bg-transparent  text-black-500 h-screen shadow-lg  sticky top-0 xl:w-1/4 md:2/5 w-3/5'>
//                 {/* <h2 className="text-center text-2xl text-white font-semibold m-4">Admin Panel</h2> */}


//                 <div className=" flex flex-col justify-center items-center gap-4  p-4 ">

//                     <Link



//                         to={"/"}
//                         className={`py-2 px-4  underline-offset-8 hover:underline ${location.pathname === "/" ? "text-pink-500" : ""}   focus:outline-none`}
//                     >
//                         Selections
//                     </Link>
//                     <Link



//                         to={"/banner"}
//                         className={`py-2 px-4  underline-offset-8 hover:underline ${location.pathname === "/banner" ? "text-pink-500" : ""}   focus:outline-none`}
//                     >
//                         Banners
//                     </Link>
//                     <Link

//                         to={"/categories"}
//                         className={`py-2 px-4  underline-offset-8 hover:underline ${location.pathname === "/categories" ? "text-pink-500" : ""}   focus:outline-none`}
//                     >
//                         Categories
//                     </Link>

//                     <Link


//                         to={"/orders"}
//                         className={`py-2 px-4  underline-offset-8 hover:underline ${location.pathname === "/orders" ? "text-pink-500" : ""}   focus:outline-none`}
//                     >
//                         Orders
//                     </Link>

//                     <Link


//                         to={"/users"}
//                         className={`py-2 px-4  underline-offset-8 hover:underline ${location.pathname === "/users" ? "text-pink-500" : ""}   focus:outline-none`}
//                     >
//                         Users
//                     </Link>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default SideBar





import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

const SideBar = ({ isSidebarOpen, toggleSidebar }) => {
    const location = useLocation();

    return (
        <>
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 md:hidden mt:hidden">
                    <div className="fixed inset-y-0 left-0 bg-white text-black w-3/4 max-w-xs p-4 z-50" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-4 right-4 text-2xl text-black" onClick={toggleSidebar}>
                            <IoClose />
                        </button>
                        <div className="flex flex-col gap-4 mt-10">
                            <Link to={"/"} onClick={toggleSidebar} className={`py-2 px-4 underline-offset-8 hover:underline ${location.pathname === "/" ? "text-rose-500" : ""} focus:outline-none`}>
                                Selections
                            </Link>
                            <Link to={"/banner"} onClick={toggleSidebar} className={`py-2 px-4 underline-offset-8 hover:underline ${location.pathname === "/banner" ? "text-rose-500" : ""} focus:outline-none`}>
                                Banners
                            </Link>
                            <Link to={"/categories"} onClick={toggleSidebar} className={`py-2 px-4 underline-offset-8 hover:underline ${location.pathname === "/categories" ? "text-rose-500" : ""} focus:outline-none`}>
                                Categories
                            </Link>
                            <Link to={"/orders"} onClick={toggleSidebar} className={`py-2 px-4 underline-offset-8 hover:underline ${location.pathname === "/orders" ? "text-rose-500" : ""} focus:outline-none`}>
                                Orders
                            </Link>
                            <Link to={"/users"} onClick={toggleSidebar} className={`py-2 px-4 underline-offset-8 hover:underline ${location.pathname === "/users" ? "text-rose-500" : ""} focus:outline-none`}>
                                Users
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            <div className='hidden md:block bg-transparent text-black-500 h-screen shadow-lg sticky top-0 xl:w-1/4 md:w-2/5 w-3/5'>
                <div className="fixed flex flex-col justify-center items-center gap-4 p-4">
                    <Link to={"/"} className={`py-2 px-4 underline-offset-8 hover:underline ${location.pathname === "/" ? "text-rose-500" : ""} focus:outline-none`}>
                        Selections
                    </Link>
                    <Link to={"/banner"} className={`py-2 px-4 underline-offset-8 hover:underline ${location.pathname === "/banner" ? "text-rose-500" : ""} focus:outline-none`}>
                        Banners
                    </Link>
                    <Link to={"/categories"} className={`py-2 px-4 underline-offset-8 hover:underline ${location.pathname === "/categories" ? "text-rose-500" : ""} focus:outline-none`}>
                        Categories
                    </Link>
                    <Link to={"/orders"} className={`py-2 px-4 underline-offset-8 hover:underline ${location.pathname === "/orders" ? "text-rose-500" : ""} focus:outline-none`}>
                        Orders
                    </Link>
                    <Link to={"/users"} className={`py-2 px-4 underline-offset-8 hover:underline ${location.pathname === "/users" ? "text--500" : ""} focus:outline-none`}>
                        Users
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SideBar;

