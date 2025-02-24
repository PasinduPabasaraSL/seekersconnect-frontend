import React from 'react';
import { Briefcase, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';
import MyButton from '../../common/components/MyButton/MyButton';
import CoverImage from '../../assets/cover.png';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const WhySeekersConnect = () => {
    return (
        <div className="bg-[#361111]">
            <NavBar />
            <div className="container mx-auto px-4 py-10 lg:px-8 mt-18">
                {/* Header Section */}
                <section className="bg-[#2D2D2D]  text-white rounded-lg p-8 mb-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Why Choose SeekersConnect?
                        </h1>
                        <p className="text-lg mb-8">
                            SeekersConnect is your go-to job portal and skill development platform designed to help you build a better career. Whether you're looking for your first job or advancing to the next level, we offer tools that make the process easier, faster, and more personalized.
                        </p>
                        <Link to="/sign-up" className="inline-block">
                            <MyButton
                                name="Get Started"
                                txtColor="white"
                                backgroundColor="#D32F2F"
                                height="50px"
                                radius="4px"
                                width="180px"
                            />
                        </Link>
                    </div>
                </section>

                {/* Key Features Section */}
                <section className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
                        Key Features & Benefits
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Feature Card 1 */}
                        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <div className="bg-blue-700 h-2"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-black mb-4">Personalized Job Recommendations</h3>
                                <p className="text-gray-800 mb-4">
                                    Receive job suggestions tailored to your skills and interests, helping you find the best match for your career.
                                </p>
                                <div className="flex items-center text-blue-700">
                                    <Briefcase size={20} className="mr-2" />
                                    <span className="font-medium">Job Opportunities</span>
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 2 */}
                        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <div className="bg-blue-700 h-2"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-black mb-4">Easy Application Process</h3>
                                <p className="text-gray-800 mb-4">
                                    Apply to multiple job openings with just a few clicks. Streamlined processes to save you time.
                                </p>
                                <div className="flex items-center text-blue-700">
                                    <MapPin size={20} className="mr-2" />
                                    <span className="font-medium">Location Flexibility</span>
                                </div>
                            </div>
                        </div>

                        {/* Feature Card 3 */}
                        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <div className="bg-blue-700 h-2"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-black mb-4">Real-Time Job Alerts</h3>
                                <p className="text-gray-800 mb-4">
                                    Get notified instantly when new job opportunities that match your profile are posted.
                                </p>
                                <div className="flex items-center text-blue-700">
                                    <Clock size={20} className="mr-2" />
                                    <span className="font-medium">Instant Notifications</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="mb-16 bg-[#ebe1e1] rounded-lg shadow-md p-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="bg-blue-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">Create Your Profile</h3>
                            <p className="text-gray-800">
                                Sign up and complete your profile with your skills, experience, and preferences.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="bg-blue-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">Discover Opportunities</h3>
                            <p className="text-gray-800">
                                Explore job openings and skill development courses tailored to your goals.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="bg-blue-700 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">Apply & Grow</h3>
                            <p className="text-gray-800">
                                Apply for jobs with a single click and take skill courses to advance your career.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
                        What Our Users Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Testimonial 1 */}
                        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600">
                            <blockquote className="text-gray-800 text-lg mb-4">
                                "SeekersConnect helped me find my dream job in just two weeks. The personalized job recommendations were spot-on!"
                            </blockquote>
                            <cite className="text-black font-medium block">- John Doe, Software Engineer</cite>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600">
                            <blockquote className="text-gray-800 text-lg mb-4">
                                "I love the skill development section of SeekersConnect. It helped me upgrade my skills and land a better position."
                            </blockquote>
                            <cite className="text-black font-medium block">- Jane Smith, Web Developer</cite>
                        </div>
                    </div>
                </section>

                {/* Trust & CTA Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {/* Trust & Security */}
                    <div className="bg-black text-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Data is Safe with Us</h2>
                        <p className="text-gray-300 mb-6">
                            We prioritize your privacy and security. Your data is protected, and we only share it with employers you choose.
                        </p>
                        <ul className="mb-6">
                            <li className="flex items-center mb-2">
                                <CheckCircle size={20} className="text-blue-500 mr-2" />
                                <span>End-to-end encryption</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <CheckCircle size={20} className="text-blue-500 mr-2" />
                                <span>GDPR compliant</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle size={20} className="text-blue-500 mr-2" />
                                <span>Control over your data</span>
                            </li>
                        </ul>
                        <MyButton
                            name="Learn More"
                            txtColor="white"
                            backgroundColor="#1976D2"
                            height="50px"
                            radius="4px"
                            width="150px"
                        />
                    </div>

                    {/* Call to Action */}
                    <div className="bg-red-600 text-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Find Your Dream Job?</h2>
                        <p className="text-white mb-6">
                            Join SeekersConnect today and begin your journey toward career success! Our platform connects you with top employers looking for your skills.
                        </p>
                        <p className="text-white mb-8">
                            Over 10,000 professionals have already found their ideal positions through our platform.
                        </p>
                        <Link to="/sign-up">
                            <MyButton
                                name="Join Now"
                                txtColor="white"
                                backgroundColor="#212121"
                                height="50px"
                                radius="4px"
                                width="150px"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WhySeekersConnect;