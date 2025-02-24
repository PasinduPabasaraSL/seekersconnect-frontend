import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, UserCircle, X } from 'lucide-react';
import axios from 'axios';
import MyButton from '../../common/components/MyButton/MyButton';
import { Link, useNavigate } from 'react-router';
import SignImg from '../../assets/signin.jpeg';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('job seeker');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleClose = () => {
        navigate("/");
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        try {
            const formattedUserType = userType.toUpperCase().replace(/\s+/g, '_');
            const response = await axios.post('http://localhost:8080/api/v1/user/login', {
                username: email,
                password: password,
                role: formattedUserType,
            });

            console.log('Login successful:', response.data);

            switch (userType) {
                case 'employer':
                    navigate('/employer-dashboard');
                    break;
                case 'job seeker':
                    navigate('/job-seeker-dashboard');
                    break;
                case 'trainer':
                    navigate('/trainer-dashboard');
                    break;
                default:
                    navigate('/');
                    break;
            }

            alert('Login successful!');
            setEmail('');
            setPassword('');
            setUserType('job seeker');
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message || 'An error occurred. Please try again.');
            } else if (error.request) {
                setError('Network error. Please check your internet connection.');
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
            setEmail('');
            setPassword('');
            setUserType('job seeker');
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${SignImg})`,
            }}
        >
            {/* Form Container */}
            <div className="relative max-w-md w-full space-y-6 p-8 bg-white/95 backdrop-blur-lg rounded-2xl">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 hover:bg-gray-200 p-1 rounded-full transition-all duration-200"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Header with Icon */}
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">SeekersConnect</h2>
                    <p className="mt-1 text-sm text-gray-600">Unlock your career opportunities</p>
                </div>

                {/* Error Message */}
                {error && (
                    <p className="text-red-500 text-sm text-center bg-red-50 border border-red-200 rounded-lg py-2 animate-shake">
                        {error}
                    </p>
                )}

                {/* Form */}
                <form className="mt-4 space-y-5" onSubmit={handleLogin}>
                    <div className="space-y-5">
                        {/* User Type */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <UserCircle className="h-5 w-5 text-gray-500" />
                            </div>
                            <select
                                value={userType}
                                onChange={(e) => setUserType(e.target.value)}
                                className="pl-10 w-full px-3 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-500 appearance-none"
                            >
                                <option value="job seeker">Job Seeker</option>
                                <option value="employer">Employer</option>
                                <option value="trainer">Trainer</option>
                            </select>
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="pl-10 w-full px-3 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-500"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="pl-10 w-full px-3 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                                {showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 text-gray-700">Remember me</label>
                        </div>
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-700">
                            Forgot password?
                        </a>
                    </div>

                    {/* Sign In Button */}
                    <div>
                        <MyButton
                            name="Sign in"
                            width="100%"
                            backgroundColor="linear-gradient(90deg, #1E3A8A, #3B82F6)"
                            txtColor="white"
                            radius="12px"
                            height="48px"
                            type="submit"
                            className="my-button hover:shadow-lg transition-all duration-300"
                        />
                    </div>
                </form>

                {/* Sign Up Link */}
                <div className="text-center text-sm">
                    <p className="text-gray-600">
                        New to SeekersConnect?{' '}
                        <Link to="/sign-up" className="font-medium text-blue-600 hover:text-blue-700">
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}