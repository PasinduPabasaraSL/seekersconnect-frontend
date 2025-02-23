import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
            <div className="text-center max-w-xl">
                {/* Error Code */}
                <h1 className="text-9xl font-bold text-gray-900">404</h1>

                {/* Main Message */}
                <div className="mt-4 mb-8">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-2">Page not found</h2>
                    <p className="text-gray-600">Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.</p>
                </div>

                {/* Helpful Links */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <Link to="/">
                        <span className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
                            <Home className="w-4 h-4" />
                            Back to Home
                        </span>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>
                </div>

                {/* Additional Help */}
                <div className="mt-12 text-sm text-gray-500">
                    <p>Need assistance? <a href="/contact" className="text-indigo-600 hover:text-indigo-800 font-medium">Contact our support team</a></p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;