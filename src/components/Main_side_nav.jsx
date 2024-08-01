import React, { useState } from 'react';
import Navbar from './Navbar';
import SideBar from './SideBar';

const MainLayout = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} />
            <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <main>
                {children}
            </main>
        </>
    );
};

export default MainLayout;
