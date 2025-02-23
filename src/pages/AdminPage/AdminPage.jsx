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
    Search,
    ChevronDown,
    X,
    Menu
} from 'lucide-react';
import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from 'react-router';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

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

            {/* Mobile menu button */}
            <div className="md:hidden fixed top-0 left-0 p-4 z-50">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-gray-600 hover:text-gray-900"
                >
                    {isMobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-white">
                    <div className="pt-16 pb-4 px-4">
                        <nav className="space-y-1">
                            {navigationItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.id}
                                        className={`flex items-center px-3 py-2 text-base font-medium rounded-md w-full ${activeTab === item.id
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                        onClick={() => {
                                            setActiveTab(item.id);
                                            setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        <Icon className="mr-3 h-5 w-5" />
                                        {item.label}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            )}

            {/* Main content */}
            <div className="flex-1 min-w-0 flex flex-col md:ml-64">
                {/* Top bar */}
                <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200">
                    <div className="flex items-center justify-between px-4 h-full">
                        <div className="flex-1 flex">
                            <div className="relative w-full max-w-xs">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    placeholder="Search..."
                                />
                            </div>
                        </div>

                        <div className="ml-4 flex items-center md:ml-6 space-x-4">
                            <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                                <Bell className="h-6 w-6" />
                            </button>

                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center space-x-2 text-sm text-gray-700 hover:text-gray-900 focus:outline-none"
                                >
                                    <div className="h-8 w-8 rounded-full bg-gray-200" />
                                    <ChevronDown className="h-4 w-4" />
                                </button>

                                {isDropdownOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1">
                                            <a
                                                href="#profile"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Your Profile
                                            </a>
                                            <a
                                                href="#settings"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Settings
                                            </a>
                                            <a
                                                href="#signout"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={handleLogout}
                                            >
                                                Sign out
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

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

export default AdminDashboard;