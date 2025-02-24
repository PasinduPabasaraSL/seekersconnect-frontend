import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, X, Briefcase, UserCircle } from 'lucide-react'; // Added UserCircle
import { Link, useNavigate } from 'react-router';
import axios from 'axios';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        userType: 'job seeker',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const isValidEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidEmail(formData.email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        try {
            const formattedUserType = formData.userType.toUpperCase().replace(/\s+/g, '_');

            const response = await axios.post('http://localhost:8080/api/v1/user/register', {
                username: formData.fullName,
                email: formData.email,
                password: formData.password,
                role: formattedUserType,
            });

            console.log('Registration successful:', response.data);
            alert('Registration successful!');

            setFormData({
                fullName: '',
                email: '',
                password: '',
                userType: 'job seeker',
            });

            switch (formData.userType) {
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
        } catch (error) {
            setErrorMessage('Registration failed. Please try again.');
            console.error('Error during registration:', error);

            setFormData({
                fullName: '',
                email: '',
                password: '',
                userType: 'job seeker',
            });
        }
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
        >
            <div className="relative max-w-md w-full space-y-6 p-8 bg-white/95 backdrop-blur-lg rounded-2xl">
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 hover:bg-gray-200 p-1 rounded-full transition-all duration-200"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Join With Us</h2>
                    <p className="mt-1 text-sm text-gray-600">Launch your career journey today</p>
                </div>

                {errorMessage && (
                    <p className="text-red-500 text-sm text-center bg-red-50 border border-red-200 rounded-lg py-2 animate-shake">
                        {errorMessage}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="mt-4 space-y-5">
                    <div className="space-y-5">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                name="fullName"
                                type="text"
                                required
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Full Name"
                                className="pl-10 w-full px-3 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-500"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email address"
                                className="pl-10 w-full px-3 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-500"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <UserCircle className="h-5 w-5 text-gray-500" />
                            </div>
                            <select
                                name="userType"
                                value={formData.userType}
                                onChange={handleInputChange}
                                className="pl-10 w-full px-3 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-500 appearance-none"
                            >
                                <option value="job seeker">Job Seeker</option>
                                <option value="employer">Employer</option>
                                <option value="trainer">Trainer</option>
                            </select>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-500" />
                            </div>
                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Password"
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

                    <div className="flex items-center text-sm">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            required
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="terms" className="ml-2 text-gray-700">
                            I agree to the{' '}
                            <a href="#" className="text-blue-600 hover:text-blue-700">
                                Terms
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-blue-600 hover:text-blue-700">
                                Privacy Policy
                            </a>
                        </label>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 rounded-xl text-white font-medium bg-gradient-to-r from-blue-900 to-blue-500 hover:from-blue-800 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:shadow-lg"
                        >
                            Create Account
                        </button>
                    </div>

                    <div className="text-center text-sm">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <Link to="/sign-in" className="font-medium text-blue-600 hover:text-blue-700">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}