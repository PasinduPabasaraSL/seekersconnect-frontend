import TopBar from '../../components/AdminDashboard/TopBar/TopBar.jsx';
import Dashboard from '../../components/AdminDashboard/Dashboard/Dashboard.jsx';
import SideBar from '../../components/AdminDashboard/SideBar/SideBar.jsx';
import React, { useState } from 'react';

const AdminPage = () => {
    const [currentContent, setCurrentContent] = useState('dashboard');

    const changeContent = (content) => {
        setCurrentContent(content);
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar - Desktop */}
            <SideBar onItemClick={changeContent} />

            {/* Main content */}
            <div className="flex-1 min-w-0 flex flex-col md:ml-64">
                {/* Top bar */}
                <TopBar />

                {/*content area */}
                {currentContent === 'dashboard' && <Dashboard />}
                

            </div>
        </div>
    );
};

export default AdminPage;