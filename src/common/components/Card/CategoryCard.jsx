import React from 'react';
import { Briefcase } from 'lucide-react';

export default function CategoryCard({ title, jobsCount, icon: Icon = Briefcase }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center gap-3 border border-gray-200 hover:shadow-lg transition-all duration-300 w-full max-w-sm cursor-pointer transform hover:scale-105">
            {/* Icon Container */}
            <div className="w-10 h-10 bg-blue-50 text-blue-600 flex items-center justify-center rounded-lg">
                <Icon size={20} strokeWidth={2} />
            </div>
            
            {/* Content Section */}
            <div>
                <h3 className="text-base font-semibold text-gray-900 font-inter tracking-tight">
                    {title}
                </h3>
                <p className="text-gray-600 text-xs font-medium">
                    {jobsCount} jobs available
                </p>
            </div>
        </div>
    );
}