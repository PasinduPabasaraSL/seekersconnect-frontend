import React, { useState } from 'react';
import bgImage from '../../assets/bg.jpg';
import SearchBox from '../../common/components/SearchBox/SearchBox';

export default function HeroSection() {
    return (
        <div className="relative h-[600px] bg-cover  bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="absolute inset-0 bg-black opacity-40" />
            <div className="max-w-6xl mx-auto px-4 h-full flex flex-col justify-center items-center relative">
                <div className="w-full max-w-4xl text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Find Your Dream Job Today
                    </h1>
                    <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
                        Search, learn, and connect with opportunities that match your expertise
                    </p>

                    {/* Search Box */}
                    <SearchBox bgColor="black" />
                </div>
            </div>
        </div>
    );
}