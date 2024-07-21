import React from 'react'
import SideBar from './SideBar'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (


        <div className="w-full h-auto">
            <Navbar />
            <div className="flex h-full  bg-gray-50   flex-row gap-4 justify-around">

                <SideBar />

                <div className="w-full">
                    <div className=" rounded ">
                        {children}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>


    )
}

export default Layout
