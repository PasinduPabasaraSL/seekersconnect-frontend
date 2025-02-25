import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, X, ArrowRight, AlertCircle } from 'lucide-react';
import axios from 'axios';
import MyButton from '../../common/components/MyButton/MyButton';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext.jsx';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formTouched, setFormTouched] = useState(false);
    const navigate = useNavigate();
    const { login, user } = useAuth();

    useEffect(() => {
        if (user) navigate('/admin/dashboard');
    }, [user, navigate]);

    const handleClose = () => navigate('/');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setFormTouched(true);
        setError(null);

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:8080/api/v1/user/login', {
                username: email,
                password,
                role: 'ADMIN',
            });

            console.log('Login successful:', response.data);
            login(response.data);
            navigate('/admin/dashboard');
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <div className="relative max-w-md w-full p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl transition-all duration-300 border border-white/20">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
                    aria-label="Close"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-8">
                    <div className="inline-block p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" fill="url(#paint0_linear)" />
                                <path d="M12 6L16 8.5V13.5L12 16L8 13.5V8.5L12 6Z" fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#6366F1" />
                                        <stop offset="1" stopColor="#A855F7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">SeekersConnect</h2>
                    <p className="mt-1 text-gray-600 font-medium">Admin Portal Access</p>
                </div>

                {error && (
                    <div className="mb-6 p-3 bg-red-50 border border-red-100 rounded-lg flex items-center gap-2 text-red-600" role="alert">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p className="text-sm">{error}</p>
                    </div>
                )}

                <form className="space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-5">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="admin@seekersconnect.com"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setFormTouched(true);
                                    }}
                                    required
                                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-800"
                                />
                            </div>
                            {formTouched && email && !validateEmail(email) && (
                                <p className="mt-1 text-sm text-red-500">Please enter a valid email address</p>
                            )}
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setFormTouched(true);
                                    }}
                                    required
                                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-800"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                    )}
                                </button>
                            </div>
                            {formTouched && password && password.length < 6 && (
                                <p className="mt-1 text-sm text-red-500">Password must be at least 6 characters</p>
                            )}
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 text-gray-700">
                                Remember me
                            </label>
                        </div>
                        <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                        >
                            Forgot password?
                        </a>
                    </div>

                    {/* Sign In Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                {isLoading ? (
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    <Lock className="h-5 w-5 text-indigo-300 group-hover:text-indigo-200" aria-hidden="true" />
                                )}
                            </span>
                            {isLoading ? 'Authenticating...' : 'Sign in to Dashboard'}
                            {!isLoading && (
                                <ArrowRight className="ml-1 -mr-1 w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                            )}
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                        Need support? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Contact Admin</a>
                    </p>
                </div>
            </div>
        </div>
    );
}