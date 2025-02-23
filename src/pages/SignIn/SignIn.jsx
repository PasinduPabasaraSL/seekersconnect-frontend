import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, UserCircle, X } from 'lucide-react';
import axios from 'axios';
import MyButton from '../../common/components/MyButton/MyButton';
import { Link, useNavigate } from 'react-router';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('job seeker');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleClose = () => {
        navigate("/");
    }

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
                role: formattedUserType
            });

            console.log('Login successful:', response.data);

            // Redirect based on user type
            switch (userType) {
                case 'employer':
                    // Navigate to employer dashboard
                    break;
                case 'job seeker':
                    // Navigate to job seeker dashboard
                    break;
                case 'trainer':
                    // Navigate to trainer dashboard
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
        <div className="min-h-screen flex items-center justify-center bg-gray-50 mt-8">
            <div className="relative max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
                >
                    <X className="w-6 h-6" />
                </button>
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
                    <p className="mt-2 text-sm text-gray-600">Sign in to continue your journey</p>
                </div>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <form className="mt-4 space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-4">
                        {/* Account Type Selection */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <UserCircle className="h-5 w-5 text-gray-400" />
                            </div>
                            <select
                                value={userType}
                                onChange={(e) => setUserType(e.target.value)}
                                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="job seeker">Job Seeker</option>
                                <option value="employer">Employer</option>
                                <option value="trainer">Trainer</option>
                            </select>
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                                {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">Remember me</label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <div>
                        <MyButton
                            name="Sign in"
                            width="100%"
                            backgroundColor="#2563EB"
                            txtColor="white"
                            radius="10px"
                            height="40px"
                            type="submit"
                        />
                    </div>
                </form>

                {/* Sign Up Link */}
                <div className="text-center text-sm">
                    <p className="text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/sign-up" className="font-medium text-blue-600 hover:text-blue-500">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}