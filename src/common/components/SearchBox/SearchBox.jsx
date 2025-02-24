import MyButton from "../MyButton/MyButton";
import React, { useState } from 'react';

export default function SearchBox(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');

    const locations = [
        "Colombo, Sri Lanka", "New York, NY", "San Francisco, CA", "London, UK",
        "Remote", "Chicago, IL", "Boston, MA"
    ]; // api call

    return (
        <div className="bg-[#212121] rounded-xl shadow-2xl p-4 mt-8">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-[#FFFFFF]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-[#FFFFFF] bg-[#212121] text-[#FFFFFF] placeholder-[#B0BEC5] transition-colors focus:border-[#1976D2] focus:outline-none"
                        placeholder="Job title, keywords, or company"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-[#FFFFFF]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <select
                        className="w-full pl-10 pr-10 py-3 rounded-lg border-2 border-[#FFFFFF] bg-[#212121] text-[#FFFFFF] transition-colors focus:border-[#1976D2] focus:outline-none appearance-none"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        <option value="" className="text-[#B0BEC5]">All Locations</option>
                        {locations.map((loc, index) => (
                            <option key={index} value={loc} className="text-[#FFFFFF] bg-[#212121]">{loc}</option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-[#FFFFFF]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                <MyButton
                    name="Search Jobs"
                    txtColor="#FFFFFF"
                    backgroundColor="#D32F2F"
                    height="54px"
                    radius="10px"
                    hoverBackgroundColor="#B71C1C"
                />
            </div>
        </div>
    );
}