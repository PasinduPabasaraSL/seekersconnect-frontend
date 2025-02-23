import React, { useState } from 'react';
import {
    Users,
    Briefcase,
    GraduationCap,
    Building,
    BookOpen,
    BarChart3,
    Bell,
    Settings,
    MessageSquare,
} from 'lucide-react';
import TopBar from '../../components/AdminDashboard/TopBar/TopBar.jsx';

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const stats = [
        { title: 'Total Users', value: '5,231', change: '+12%' },
        { title: 'Active Jobs', value: '1,423', change: '+5%' },
        { title: 'Applications', value: '8,742', change: '+18%' },
        { title: 'Success Rate', value: '67%', change: '+3%' }
    ];

    const navigationItems = [
        { id: 'users', label: 'Users', icon: Users },
        { id: 'jobs', label: 'Jobs', icon: Briefcase },
        { id: 'seekers', label: 'Job Seekers', icon: GraduationCap },  // Updated
        { id: 'employers', label: 'Employers', icon: Building },       // Updated
        { id: 'skills', label: 'Skills & Courses', icon: BookOpen },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'settings', label: 'Settings', icon: Settings },
        { id: 'support', label: 'Support', icon: MessageSquare }
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar - Desktop */}
            <div className="hidden md:flex w-64 flex-col fixed inset-y-0">
                <div className="flex flex-col flex-grow bg-white border-r border-gray-200">
                    <div className="px-4 py-5 pb-4 flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">SeekersConnect</h1>
                            <p className="text-sm text-gray-500">Admin Dashboard</p>
                        </div>
                    </div>

                    <nav className="mt-5 flex-1 px-2 space-y-1">
                        {navigationItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.id}
                                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${activeTab === item.id
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    onClick={() => setActiveTab(item.id)}
                                >
                                    <Icon className="mr-3 h-5 w-5" />
                                    {item.label}
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 min-w-0 flex flex-col md:ml-64">
                {/* Top bar */}
                <TopBar />

                {/* Main content area */}
                <main className="flex-1 p-6">
                    {/* Stats grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white overflow-hidden shadow rounded-lg"
                            >
                                <div className="p-5">
                                    <div className="flex items-center justify-between">
                                        <div className="font-medium text-gray-500">{stat.title}</div>
                                        <div
                                            className={`text-sm ${stat.change.startsWith('+')
                                                ? 'text-green-600'
                                                : 'text-red-600'
                                                }`}
                                        >
                                            {stat.change}
                                        </div>
                                    </div>
                                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                                        {stat.value}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Content area */}
                    <div className="bg-white shadow rounded-lg">
                        <div className="px-4 py-5 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Recent Activity
                                </h3>
                            </div>
                        </div>
                        <div className="px-4 py-5">
                            <p className="text-gray-500 text-sm">No recent activities</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminPage;