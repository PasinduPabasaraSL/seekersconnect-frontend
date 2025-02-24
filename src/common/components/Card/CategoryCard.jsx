import React from 'react';
import { Briefcase } from 'lucide-react';

export default function CategoryCard({ title, jobsCount, icon: Icon = Briefcase }) {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 flex items-center gap-4 border border-gray-100 hover:shadow-lg hover:scale-[1.03] transition-all duration-300 w-full max-w-[280px] cursor-pointer">
            {/* Icon Container */}
            <div className="w-12 h-12 bg-[#ECFDF5] text-[#059669] flex items-center justify-center rounded-lg">
                <Icon size={24} strokeWidth={2} />
            </div>

            {/* Content Section */}
            <div>
                <h3 className="text-lg font-semibold text-[#1F2937] tracking-tight line-clamp-1">
                    {title}
                </h3>
                <p className="text-[#6B7280] text-sm font-medium">
                    {jobsCount} jobs available
                </p>
            </div>
        </div>
    );
}