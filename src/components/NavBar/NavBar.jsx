import { useState, useEffect } from 'react';
import MyButton from '../../common/components/MyButton/MyButton';
import { Link } from 'react-router';
import Profile from '../../common/components/Profile/Profile.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showTalentDropdown, setShowTalentDropdown] = useState(false);
    const { user } = useAuth();
    const [isUser, setIsUser] = useState();
    const [showSignIn, setShowSignIn] = useState(true);

    useEffect(() => {
        if (user) {
            setIsUser(true);
            setShowSignIn(false);
        }
    }, [user]);

    const handleLogout = () => {
        console.log('User logged out');
        setIsUser(false);
        setShowSignIn(true);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#F9FAFB] border-b border-gray-200 z-50 shadow-sm">
            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-10">
                        <Link to="/" className="flex items-center">
                            <span className="text-2xl font-extrabold text-[#1E3A8A]">Seekers</span>
                            <span className="text-2xl font-extrabold text-[#10B981]">Connect</span>
                        </Link>

                        {/* Desktop Menu - Left Side */}
                        <div className="hidden lg:flex items-center space-x-10">
                            <Link to="/" className="text-[#1F2937] font-medium hover:text-[#10B981] transition-colors duration-200">
                                Home
                            </Link>
                            <div className="relative group">
                                <button
                                    className="flex items-center text-[#1F2937] font-medium hover:text-[#10B981] py-6 transition-colors duration-200"
                                    onMouseEnter={() => setShowTalentDropdown(true)}
                                    onMouseLeave={() => setShowTalentDropdown(false)}
                                >
                                    <span>Find Talent</span>
                                    <span className="ml-2 text-sm">▼</span>
                                </button>
                                {showTalentDropdown && (
                                    <div
                                        className="absolute top-full left-0 bg-white shadow-md rounded-lg w-72 py-3 border border-gray-100"
                                        onMouseEnter={() => setShowTalentDropdown(true)}
                                        onMouseLeave={() => setShowTalentDropdown(false)}
                                    >
                                        <Link to="/sign-up" className="block px-5 py-3 text-[#1F2937] hover:bg-[#F9FAFB] hover:text-[#10B981] transition-colors duration-200">
                                            Become an Instructor
                                        </Link>
                                        <div className="block px-5 py-3 text-[#1F2937] hover:bg-[#F9FAFB] hover:text-[#10B981] transition-colors duration-200">
                                            Start Learning
                                        </div>
                                        <div className="block px-5 py-3 text-[#1F2937] hover:bg-[#F9FAFB] hover:text-[#10B981] transition-colors duration-200">
                                            CV Booster
                                        </div>
                                    </div>
                                )}
                            </div>
                            <Link to="/jobs" className="text-[#1F2937] font-medium hover:text-[#10B981] transition-colors duration-200">
                                Find Job
                            </Link>
                            <Link to="/why" className="text-[#1F2937] font-medium hover:text-[#10B981] transition-colors duration-200">
                                Why SeekersConnect
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Menu - Right Side */}
                    <div className="hidden lg:flex items-center space-x-6 ml-60">
                        {showSignIn && <Link to="/sign-in" className="text-[#1F2937] font-medium hover:text-[#10B981] transition-colors duration-200">
                            Sign In
                        </Link>}

                        <MyButton
                            name="Post a Job"
                            txtColor="white"
                            backgroundColor="#10B981"
                            height="40px"
                            radius="8px"
                            hoverBackgroundColor="#059669"
                        />
                        {isUser && <Profile onLogout={handleLogout} />}

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[#1F2937] hover:text-[#10B981] p-2 text-3xl transition-colors duration-200"
                        >
                            {isOpen ? '×' : '☰'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden bg-white border-t border-gray-200`}
            >
                <div className="px-6 py-4 space-y-2">
                    <Link to="/" className="block px-4 py-3 text-[#1F2937] font-medium hover:bg-[#F9FAFB] hover:text-[#10B981] rounded-md transition-colors duration-200">
                        Home
                    </Link>
                    <div className="py-2">
                        <button className="w-full text-left px-4 py-3 text-[#1F2937] font-medium hover:bg-[#F9FAFB] hover:text-[#10B981] rounded-md flex justify-between items-center transition-colors duration-200">
                            Find Talent
                            <span className="text-sm">▼</span>
                        </button>
                        <div className="pl-6 space-y-1 mt-2">
                            <Link to="/sign-up" className="block px-4 py-3 text-[#1F2937] hover:bg-[#F9FAFB] hover:text-[#10B981] rounded-md transition-colors duration-200">
                                Become an Instructor
                            </Link>
                            <div className="block px-4 py-3 text-[#1F2937] hover:bg-[#F9FAFB] hover:text-[#10B981] rounded-md transition-colors duration-200">
                                Start Learning
                            </div>
                            <div className="block px-4 py-3 text-[#1F2937] hover:bg-[#F9FAFB] hover:text-[#10B981] rounded-md transition-colors duration-200">
                                CV Booster
                            </div>
                        </div>
                    </div>
                    <Link to="/jobs" className="block px-4 py-3 text-[#1F2937] font-medium hover:bg-[#F9FAFB] hover:text-[#10B981] rounded-md transition-colors duration-200">
                        Find Job
                    </Link>
                    <Link to="/why" className="block px-4 py-3 text-[#1F2937] font-medium hover:bg-[#F9FAFB] hover:text-[#10B981] rounded-md transition-colors duration-200">
                        Why SeekersConnect
                    </Link>
                    <Link to="/sign-in" className="block px-4 py-3 text-[#1F2937] font-medium hover:bg-[#F9FAFB] hover:text-[#10B981] rounded-md transition-colors duration-200">
                        Sign In
                    </Link>
                    <div className="pt-2">
                        <button className="w-full bg-[#10B981] text-white px-6 py-3 rounded-lg hover:bg-[#059669] transition-colors duration-200 font-medium">
                            Post a Job
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;