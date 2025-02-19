import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { JobDetailCard } from '../../common/components/Card/JobCard';
import MyButton from '../../common/components/MyButton/MyButton';
import JobList from '../../common/components/JobList/JobList';

export default function JobsPage() {
    return (
        <div className="min-h-screen bg-[#f5f6fa] mt-15">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Job title or keywords"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div className="flex-1 relative">
                            <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Location"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <MyButton
                            name="Search"
                            width="150px"
                            backgroundColor="black"
                            radius="20px"
                            txtColor="white"
                        />
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold">Filters</h2>
                                <Filter size={20} className="text-gray-500" />
                            </div>

                            {/* Job Type Filter */}
                            <div className="mb-6">
                                <h3 className="font-medium mb-3">Job Type</h3>
                                {['Full-time', 'Part-time', 'Contract', 'Remote'].map((type) => (
                                    <div key={type} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={type.toLowerCase()}
                                            className="w-4 h-4 text-black rounded border-gray-300 focus:ring-black"
                                        />
                                        <label htmlFor={type.toLowerCase()} className="ml-2 text-gray-700">
                                            {type}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            {/* Experience Level Filter */}
                            <div>
                                <h3 className="font-medium mb-3">Experience Level</h3>
                                {['Entry Level', 'Mid Level', 'Senior', 'Executive'].map((level) => (
                                    <div key={level} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={level.toLowerCase().replace(' ', '-')}
                                            className="w-4 h-4 text-black rounded border-gray-300 focus:ring-black"
                                        />
                                        <label htmlFor={level.toLowerCase().replace(' ', '-')} className="ml-2 text-gray-700">
                                            {level}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-3/4">
                        <div className="grid gap-6">
                            <JobList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}