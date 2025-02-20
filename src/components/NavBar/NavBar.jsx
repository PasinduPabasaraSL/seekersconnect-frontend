import { useState } from 'react';
import MyButton from '../../common/components/MyButton/MyButton';
import { Link } from 'react-router';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showTalentDropdown, setShowTalentDropdown] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-8">
                        <Link to="/">
                            <span className="text-2xl font-bold text-black">
                                Seekers
                            </span>
                            <span className="text-2xl font-bold text-black">Connect</span>
                        </Link>

                        {/* Desktop Menu - Left Side */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <Link to="/"> <li className="text-gray-600 hover:text-[#14a800] list-none"> Home </li> </Link>
                            <div className="relative group">
                                <button
                                    className="flex items-center text-gray-600 hover:text-[#14a800] py-6 "
                                    onMouseEnter={() => setShowTalentDropdown(true)}
                                    onMouseLeave={() => setShowTalentDropdown(false)}
                                >
                                    <span>Find Talent</span>
                                    <span className="ml-1">▼</span>
                                </button>
                                {showTalentDropdown && (
                                    <div
                                        className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg w-64 py-2"
                                        onMouseEnter={() => setShowTalentDropdown(true)}
                                        onMouseLeave={() => setShowTalentDropdown(false)}
                                    >
                                        <li className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#14a800] cursor-pointer">Become an Instructor</li>
                                        <li className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#14a800] cursor-pointer">Start Learning</li>
                                        <li className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#14a800] cursor-pointer">CV Booster</li>
                                    </div>
                                )}
                            </div>
                            <Link to="/jobs"> <li className="list-none text-gray-600 hover:text-[#14a800]">Find Job</li> </Link>
                            <Link to="/why">  <li className="list-none text-gray-600 hover:text-[#14a800]">Why SeekersConnect</li> </Link>
                        </div>
                    </div>

                    {/* Desktop Menu - Right Side */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link to="/sign-in">
                            <li className="text-gray-600 hover:text-[#14a800] list-none cursor-pointer">Sign In</li>
                        </Link>
                        <MyButton name="Post a Job" txtColor="white" backgroundColor="black" height="35px" radius="24px" />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center space-x-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-[#14a800] p-2 text-2xl"
                        >
                            {isOpen ? '×' : '☰'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden bg-white border-t border-gray-200`}>
                <div className="px-4 py-2 space-y-1">
                    <Link to="/"> <li className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#14a800] rounded-md">Home</li> </Link>
                    <div className="py-2">
                        <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#14a800] rounded-md flex justify-between items-center">
                            Find Talent
                            <span className="text-xs">▼</span>
                        </button>
                        <div className="pl-4 space-y-1">
                            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#14a800] rounded-md cursor-pointer">Become an Instructor</li>
                            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#14a800] rounded-md cursor-pointer">Start Learning</li>
                            <li className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#14a800] rounded-md cursor-pointer">CV Booster</li>
                        </div>
                    </div>
                    <Link to="/jobs"> <li className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#14a800] rounded-md">Find Job</li> </Link>
                    <Link to="/why"> <li className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#14a800] rounded-md">Why SeekersConnect</li> </Link>
                    <Link to="/sign-in">
                        <li className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#14a800] rounded-md">Sign In</li>
                    </Link>
                    <div className="pt-2">
                        <button className="w-full bg-[#14a800] text-white px-6 py-2 rounded-full hover:bg-[#3c8224] transition-colors">
                            Post a Job
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;