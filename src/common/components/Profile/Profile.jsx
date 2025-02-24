import React, { useState } from 'react';
import { useAuth } from "../../../context/AuthContext.jsx";
import { useNavigate } from 'react-router';
import { ChevronDown } from 'lucide-react';

export default function Profile() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div>
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
    );
}