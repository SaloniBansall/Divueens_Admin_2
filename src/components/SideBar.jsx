import React from 'react'

import { Link, useLocation } from 'react-router-dom';



const SideBar = () => {

    const location = useLocation()
    console.log(location,"pathname")

    return (
        <div className='bg-transparent  text-black-500 h-screen shadow-lg  sticky top-0 xl:w-1/4 md:2/5 w-3/5'>
            {/* <h2 className="text-center text-2xl text-white font-semibold m-4">Admin Panel</h2> */}

            <div className=" flex flex-col justify-center items-center gap-4  p-4 ">

                <Link


                    to={"/"}
                    className={`py-2 px-4  underline-offset-8 hover:underline ${location.pathname==="/" ? "text-pink-500" : "" }   focus:outline-none`}
                >
                    Product List
                </Link>
                <Link


                    to={"/banner"}
                    className={`py-2 px-4  underline-offset-8 hover:underline ${location.pathname==="/banner" ? "text-pink-500" : "" }   focus:outline-none`}
                >
                    Banner
                </Link>
                <Link


                    to={"/categories"}
                    className={`py-2 px-4  underline-offset-8 hover:underline ${location.pathname==="/categories" ? "text-pink-500" : "" }   focus:outline-none`}
                >
                    categories
                </Link>

                <Link


                    to={"/orders"}
                    className={`py-2 px-4  underline-offset-8 hover:underline ${location.pathname==="/orders" ? "text-pink-500" : "" }   focus:outline-none`}
                >
                    orders
                </Link>





            </div>
        </div>
    )
}

export default SideBar
