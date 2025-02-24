import React, { useEffect, useState } from 'react';
import { useAuth } from "../../../context/AuthContext.jsx";
import { Bell } from 'lucide-react';
import { jwtDecode } from "jwt-decode";
import Profile from '../../../common/components/Profile/Profile.jsx';

export default function TopBar() {
    const [admin, setAdmin] = useState("Admin");

    const { user } = useAuth();
    const decoded = jwtDecode(user);

    useEffect(() => {
        setAdmin(decoded.sub);
    }, [user]);

    return (
        <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200">
            <div className="flex items-center justify-between px-4 h-full">
                <div className="flex-1 flex">
                    <div className="text-[22px] font-serif pointer-events-none">
                        Welcome Back <span className="text-red-700 pl-2">{admin}</span>
                    </div>
                </div>

                <div className="ml-4 flex items-center md:ml-6 space-x-4">
                    <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                        <Bell className="h-6 w-6" />
                    </button>

                    {/* Profile */}
                    <Profile />
                </div>
            </div>
        </div>
    );
}