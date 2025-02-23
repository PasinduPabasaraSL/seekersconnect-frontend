import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, X } from 'lucide-react';
import axios from 'axios';
import MyButton from '../../common/components/MyButton/MyButton';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext.jsx';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const { login, user } = useAuth();

    useEffect(() => {
        if (user) navigate('/admin/dashboard');
    }, [user, navigate]);

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
            const response = await axios.post('http://localhost:8080/api/v1/user/login', {
                username: email,
                password: password,
                role: "ADMIN"
            });

            console.log('Login successful:');
            alert('Login successful!');

            login(response.data)

            navigate('/admin/dashboard');

        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || 'An error occurred. Please try again.');
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
                    <h2 className="text-3xl font-bold text-gray-900">SeekersConnect</h2>
                    <p className="mt-2 text-2xl text-gray-600">Admin Sign In</p>
                </div>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <form className="mt-4 space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-4">
                        {/* Email Input */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                placeholder="Admin Email address"
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
                                placeholder="Admin Password"
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
            </div>
        </div>
    );
}