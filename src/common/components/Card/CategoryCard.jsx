import React from 'react';
import { Briefcase } from 'lucide-react';

export default function CategoryCard({ title, jobsCount, icon: Icon = Briefcase }) {
    return (
        <div className="bg-[#2D2D2D] shadow-md rounded-xl p-4 flex items-center gap-4 border border-[#212121] hover:shadow-lg hover:scale-[1.03] hover:border-[#1976D2] transition-all duration-300 w-full max-w-[280px] cursor-pointer">
            {/* Icon Container */}
            <div className="w-12 h-12 bg-[#D32F2F] text-[#FFFFFF] flex items-center justify-center rounded-lg">
                <Icon size={24} strokeWidth={2} />
            </div>

            {/* Content Section */}
            <div>
                <h3 className="text-lg font-semibold text-[#FFFFFF] tracking-tight line-clamp-1 hover:text-[#D32F2F] transition-colors duration-200">
                    {title}
                </h3>
                <p className="text-[#B0BEC5] text-sm font-medium">
                    {jobsCount} jobs available
                </p>
            </div>
        </div>
    );
}