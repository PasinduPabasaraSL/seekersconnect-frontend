import React, { useState } from 'react';
import { useAuth } from "../../../context/AuthContext.jsx";
import { useNavigate } from 'react-router';
import {
    Bell,
    Search,
    ChevronDown,
} from 'lucide-react';

export default function TopBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
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
    );
}