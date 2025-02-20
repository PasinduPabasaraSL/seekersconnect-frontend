import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, UserCircle } from 'lucide-react';
import axios from 'axios';
import MyButton from '../../common/components/MyButton/MyButton';
import { Link } from 'react-router-dom';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('jobseeker');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post('http://localhost:8080/api/v1/user/login', {
                username: email,
                password: password,
                role: userType
            });

            console.log('Login successful:', response.data);
            
            // Redirect based on user type
            switch(userType) {
                case 'admin':
                    // Navigate to admin dashboard
                    break;
                case 'employer':
                    // Navigate to employer dashboard
                    break;
                case 'jobseeker':
                    // Navigate to job seeker dashboard
                    break;
                case 'trainer':
                    // Navigate to trainer dashboard
                    break;
                default:
                    // Default dashboard
            }
            
            alert('Login successful!');
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Login failed! Please check your credentials.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 mt-8">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
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
                                <option value="jobseeker">Job Seeker</option>
                                <option value="employer">Employer</option>
                                <option value="admin">Administrator</option>
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