import React, { useState } from 'react';
import {
    Users,
    Briefcase,
    GraduationCap,
    Building,
    BookOpen,
    BarChart3,
    MonitorCog,
    Bell,
    Settings,
    MessageSquare,
} from 'lucide-react';

export default function SideBar({ onItemClick }) {

    const [activeTab, setActiveTab] = useState('overview');

    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: MonitorCog },
        { id: 'users', label: 'Users', icon: Users },
        { id: 'jobs', label: 'Jobs', icon: Briefcase },
        { id: 'seekers', label: 'Job Seekers', icon: GraduationCap },
        { id: 'employers', label: 'Employers', icon: Building },
        { id: 'skills', label: 'Skills & Courses', icon: BookOpen },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 },
        // { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'settings', label: 'Settings', icon: Settings },
        { id: 'support', label: 'Support', icon: MessageSquare }
    ];


    return (
        <div>
            <div className="hidden md:flex w-64 flex-col fixed inset-y-0">
                <div className="flex flex-col flex-grow bg-white border-r border-gray-200">
                    <div className="px-4 py-5 pb-4 flex items-center justify-between pointer-events-none">
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">SeekersConnect</h1>
                            <p className="text-sm text-gray-500">Admin Dashboard</p>
                        </div>
                    </div>

                    <nav className="mt-5 flex-1 px-2 space-y-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.id}
                                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${activeTab === item.id
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    onClick={() => {
                                        setActiveTab(item.id);
                                        onItemClick(item.id);
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
        </div>
    );
}