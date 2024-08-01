import React, { useState } from 'react';
import SideBar from './SideBar';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="w-full h-auto">
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="flex h-full bg-gray-50 flex-row gap-4 justify-around">
                <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="w-full">
                    <div className="rounded">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
