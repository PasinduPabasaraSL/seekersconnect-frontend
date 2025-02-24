import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext.jsx';
import { useNavigate } from 'react-router';
import { ChevronDown, User, Settings, LogOut } from 'lucide-react';

export default function Profile(props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        if (props.onLogout) {
            props.onLogout();
        }
        logout();
        navigate('/');
    };

    return (
        <div className="relative">
            {/* Profile Button */}
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 text-sm text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-200"
            >
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-md hover:shadow-lg transition-shadow duration-200">
                    <User className="h-5 w-5" />
                </div>
                <ChevronDown
                    className={`h-4 w-4 transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-3 w-56 rounded-xl shadow-lg bg-white ring-1 ring-gray-200 overflow-hidden transition-all duration-200 ease-in-out transform scale-95 opacity-0 animate-dropdown">
                    <div className="py-2">
                        <a
                            href="#profile"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                        >
                            <User className="h-4 w-4 mr-2" />
                            Your Profile
                        </a>
                        <a
                            href="#settings"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                        >
                            <Settings className="h-4 w-4 mr-2" />
                            Settings
                        </a>
                        <button
                            onClick={handleLogout}
                            className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-red-600 transition-colors duration-150"
                        >
                            <LogOut className="h-4 w-4 mr-2" />
                            Sign out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}