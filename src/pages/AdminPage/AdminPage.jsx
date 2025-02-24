import TopBar from '../../components/AdminDashboard/TopBar/TopBar.jsx';
import Dashboard from '../../components/AdminDashboard/Dashboard/Dashboard.jsx';
import SideBar from '../../components/AdminDashboard/SideBar/SideBar.jsx';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import UserManager from '../../components/AdminDashboard/UserManager/UserManager.jsx';
import JobsManager from '../../components/AdminDashboard/JobsManager/JobsManager.jsx';
import JobSeekerManager from '../../components/AdminDashboard/JobSeekerManager/JobSeekerManager.jsx';
import EmployerManager from '../../components/AdminDashboard/EmployerManager/EmployerManager.jsx';
import CourseManager from '../../components/AdminDashboard/CourseManager/CourseManager.jsx';
import Analytics from '../../components/AdminDashboard/Analytics/Analytics.jsx';
import Settings from '../../components/AdminDashboard/Settings/Settings.jsx';
import Support from '../../components/AdminDashboard/Support/Support.jsx';

const AdminPage = () => {
    const [currentContent, setCurrentContent] = useState('dashboard');
    const navigate = useNavigate();

    const changeContent = (content) => {
        setCurrentContent(content);
    };

    const { user } = useAuth();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

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
                {currentContent == 'users' && <UserManager />}
                {currentContent == 'jobs' && <JobsManager />}
                {currentContent == 'seekers' && <JobSeekerManager />}
                {currentContent == 'employers' && <EmployerManager />}
                {currentContent == 'skills' && <CourseManager />}
                {currentContent == 'analytics' && <Analytics />}
                {currentContent == 'settings' && <Settings />}
                {currentContent == 'support' && <Support />}

            </div>
        </div>
    );
};

export default AdminPage;