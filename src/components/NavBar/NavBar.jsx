import { useState, useEffect } from 'react';
import MyButton from '../../common/components/MyButton/MyButton';
import { NavLink, Link } from 'react-router';
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
        // console.log('User logged out');
        setIsUser(false);
        setShowSignIn(true);
    };

    const activeClassName = "text-[#D32F2F] font-medium";
    const inactiveClassName = "text-[#FFFFFF] font-medium hover:text-[#1976D2] transition-colors duration-200";

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#212121] border-b border-[#D32F2F] z-50 shadow-sm">
            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-10">
                        <Link to="/" className="flex items-center">
                            <span className="text-2xl font-extrabold text-[#FFFFFF]">Seekers</span>
                            <span className="text-2xl font-extrabold text-[#D32F2F]">Connect</span>
                        </Link>

                        {/* Desktop Menu - Left Side */}
                        <div className="hidden lg:flex items-center space-x-10">
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? activeClassName : inactiveClassName}
                            >
                                Home
                            </NavLink>
                            <div className="relative group">
                                <button
                                    className="flex items-center text-[#FFFFFF] font-medium hover:text-[#1976D2] py-6 transition-colors duration-200"
                                    onMouseEnter={() => setShowTalentDropdown(true)}
                                    onMouseLeave={() => setShowTalentDropdown(false)}
                                >
                                    <span>Find Talent</span>
                                    <span className="ml-2 text-sm">▼</span>
                                </button>
                                {showTalentDropdown && (
                                    <div
                                        className="absolute top-full left-0 bg-[#212121] shadow-lg rounded-lg w-72 py-3 border border-[#D32F2F]"
                                        onMouseEnter={() => setShowTalentDropdown(true)}
                                        onMouseLeave={() => setShowTalentDropdown(false)}
                                    >
                                        <NavLink
                                            to="/sign-up"
                                            className={({ isActive }) =>
                                                `block px-5 py-3 ${isActive
                                                    ? "bg-[#D32F2F] text-[#FFFFFF]"
                                                    : "text-[#FFFFFF] hover:bg-[#D32F2F] hover:text-[#FFFFFF]"} transition-colors duration-200`
                                            }
                                        >
                                            Become an Instructor
                                        </NavLink>
                                        <div className="block px-5 py-3 text-[#FFFFFF] hover:bg-[#D32F2F] hover:text-[#FFFFFF] transition-colors duration-200">
                                            Start Learning
                                        </div>
                                        <div className="block px-5 py-3 text-[#FFFFFF] hover:bg-[#D32F2F] hover:text-[#FFFFFF] transition-colors duration-200">
                                            CV Booster
                                        </div>
                                    </div>
                                )}
                            </div>
                            <NavLink
                                to="/jobs"
                                className={({ isActive }) => isActive ? activeClassName : inactiveClassName}
                            >
                                Find Job
                            </NavLink>
                            <NavLink
                                to="/why"
                                className={({ isActive }) => isActive ? activeClassName : inactiveClassName}
                            >
                                Why SeekersConnect
                            </NavLink>
                        </div>
                    </div>

                    {/* Desktop Menu - Right Side */}
                    <div className="hidden lg:flex items-center space-x-6 ml-60">
                        {showSignIn && (
                            <NavLink
                                to="/sign-in"
                                className={({ isActive }) => isActive ? activeClassName : inactiveClassName}
                            >
                                Sign In
                            </NavLink>
                        )}
                        <MyButton
                            name="Post a Job"
                            txtColor="#FFFFFF"
                            backgroundColor="#D32F2F"
                            height="40px"
                            radius="8px"
                            hoverBackgroundColor="#B71C1C"
                        />
                        {isUser && <Profile onLogout={handleLogout} />}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[#FFFFFF] hover:text-[#1976D2] p-2 text-3xl transition-colors duration-200"
                        >
                            {isOpen ? '×' : '☰'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden bg-[#212121] border-t border-[#D32F2F]`}
            >
                <div className="px-6 py-4 space-y-2">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `block px-4 py-3 font-medium rounded-md transition-colors duration-200 ${isActive
                                ? "bg-[#D32F2F] text-[#FFFFFF]"
                                : "text-[#FFFFFF] hover:bg-[#1976D2] hover:text-[#FFFFFF]"
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <div className="py-2">
                        <button className="w-full text-left px-4 py-3 text-[#FFFFFF] font-medium hover:bg-[#1976D2] hover:text-[#FFFFFF] rounded-md flex justify-between items-center transition-colors duration-200">
                            Find Talent
                            <span className="text-sm">▼</span>
                        </button>
                        <div className="pl-6 space-y-1 mt-2">
                            <NavLink
                                to="/sign-up"
                                className={({ isActive }) =>
                                    `block px-4 py-3 rounded-md transition-colors duration-200 ${isActive
                                        ? "bg-[#D32F2F] text-[#FFFFFF]"
                                        : "text-[#FFFFFF] hover:bg-[#D32F2F] hover:text-[#FFFFFF]"
                                    }`
                                }
                            >
                                Become an Instructor
                            </NavLink>
                            <div className="block px-4 py-3 text-[#FFFFFF] hover:bg-[#D32F2F] hover:text-[#FFFFFF] rounded-md transition-colors duration-200">
                                Start Learning
                            </div>
                            <div className="block px-4 py-3 text-[#FFFFFF] hover:bg-[#D32F2F] hover:text-[#FFFFFF] rounded-md transition-colors duration-200">
                                CV Booster
                            </div>
                        </div>
                    </div>
                    <NavLink
                        to="/jobs"
                        className={({ isActive }) =>
                            `block px-4 py-3 font-medium rounded-md transition-colors duration-200 ${isActive
                                ? "bg-[#D32F2F] text-[#FFFFFF]"
                                : "text-[#FFFFFF] hover:bg-[#1976D2] hover:text-[#FFFFFF]"
                            }`
                        }
                    >
                        Find Job
                    </NavLink>
                    <NavLink
                        to="/why"
                        className={({ isActive }) =>
                            `block px-4 py-3 font-medium rounded-md transition-colors duration-200 ${isActive
                                ? "bg-[#D32F2F] text-[#FFFFFF]"
                                : "text-[#FFFFFF] hover:bg-[#1976D2] hover:text-[#FFFFFF]"
                            }`
                        }
                    >
                        Why SeekersConnect
                    </NavLink>
                    <NavLink
                        to="/sign-in"
                        className={({ isActive }) =>
                            `block px-4 py-3 font-medium rounded-md transition-colors duration-200 ${isActive
                                ? "bg-[#D32F2F] text-[#FFFFFF]"
                                : "text-[#FFFFFF] hover:bg-[#1976D2] hover:text-[#FFFFFF]"
                            }`
                        }
                    >
                        Sign In
                    </NavLink>
                    <div className="pt-2">
                        <button className="w-full bg-[#D32F2F] text-[#FFFFFF] px-6 py-3 rounded-lg hover:bg-[#B71C1C] transition-colors duration-200 font-medium">
                            Post a Job
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;