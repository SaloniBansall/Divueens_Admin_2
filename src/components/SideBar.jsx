import React from 'react'

import { Link } from 'react-router-dom';



const SideBar = () => {


    return (
        <div className='bg-pink-500 h-screen  border-gray-300  sticky top-0 xl:w-1/4 md:2/5 w-3/5'>
            <h2 className="text-center text-2xl text-white font-semibold m-4">Admin Panel</h2>

            <div className=" flex flex-col justify-center items-center gap-4  p-4 ">

                <Link


                    to={"/"}
                    className="py-2 px-4  underline-offset-8 hover:underline text-white  focus:outline-none"
                >
                    Product List
                </Link>
                <Link


                    to={"/banner"}
                    className="py-2 px-4  underline-offset-8 hover:underline text-white  focus:outline-none"
                >
                    Banner
                </Link>
                <Link


                    to={"/banner"}
                    className="py-2 px-4  underline-offset-8 hover:underline text-white  focus:outline-none"
                >
                    categories
                </Link>

                <Link


                    to={"/orders"}
                    className="py-2 px-4  underline-offset-8 hover:underline text-white  focus:outline-none"
                >
                    categories
                </Link>





            </div>
        </div>
    )
}

export default SideBar
