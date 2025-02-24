import React from 'react';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import MyButton from '../../common/components/MyButton/MyButton';
import CoverImage from '../../assets/cover.png';
import { Link } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const WhySeekersConnect = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerChildren = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const scaleIn = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <div>
            <NavBar />
            <div className="container mx-auto px-6 py-16 lg:px-20 mt-5">
                {/* Page Introduction with fade-in animation */}
                <motion.section
                    className="text-center mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                        Why Choose SeekersConnect?
                    </h1>
                    <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                        SeekersConnect is your go-to job portal and skill development platform designed to help you build a better career. Whether you're looking for your first job or advancing to the next level, SeekersConnect offers tools that make the process easier, faster, and more personalized.
                    </p>
                    <motion.div
                        className="mt-8"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/sign-up">
                            <MyButton
                                name="Get Started"
                                txtColor="white"
                                backgroundColor="#10B981"
                                height="50px"
                                radius="24px"
                                width="150px"
                            />
                        </Link>
                    </motion.div>
                </motion.section>

                {/* Key Features with stagger animation */}
                <section className="mb-16">
                    <motion.h2
                        className="text-4xl font-semibold text-gray-900 text-center mb-12"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >
                        Key Features & Benefits
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
                        variants={staggerChildren}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Feature cards with hover animation */}
                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            variants={scaleIn}
                            whileHover={{ y: -10 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800">Personalized Job Recommendations</h3>
                            <p className="text-gray-600 mt-4">
                                Receive job suggestions tailored to your skills and interests, helping you find the best match for your career.
                            </p>
                            <motion.div
                                className="flex items-center mt-6 text-indigo-600"
                                whileHover={{ x: 10 }}
                            >
                                <Briefcase size={20} className="mr-3" />
                                <span className="font-medium">Job Opportunities</span>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            variants={scaleIn}
                            whileHover={{ y: -10 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800">Easy Application Process</h3>
                            <p className="text-gray-600 mt-4">
                                Apply to multiple job openings with just a few clicks. Streamlined processes to save you time.
                            </p>
                            <motion.div
                                className="flex items-center mt-6 text-indigo-600"
                                whileHover={{ x: 10 }}
                            >
                                <MapPin size={20} className="mr-3" />
                                <span className="font-medium">Location Flexibility</span>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            variants={scaleIn}
                            whileHover={{ y: -10 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800">Real-Time Job Alerts</h3>
                            <p className="text-gray-600 mt-4">
                                Get notified instantly when new job opportunities that match your profile are posted.
                            </p>
                            <motion.div
                                className="flex items-center mt-6 text-indigo-600"
                                whileHover={{ x: 10 }}
                            >
                                <Clock size={20} className="mr-3" />
                                <span className="font-medium">Instant Notifications</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Testimonials with fade-in animation */}
                <motion.section
                    className="text-center mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-semibold text-gray-900 mb-8">What Our Users Say</h2>
                    <motion.div
                        className="max-w-3xl mx-auto"
                        whileHover={{ scale: 1.02 }}
                    >
                        <blockquote className="italic text-gray-600 text-lg mb-6">
                            "SeekersConnect helped me find my dream job in just two weeks. The personalized job recommendations were spot-on!"
                        </blockquote>
                        <cite className="text-gray-500 text-xl">- John Doe, Software Engineer</cite>
                    </motion.div>
                    <motion.div
                        className="max-w-3xl mx-auto mt-8"
                        whileHover={{ scale: 1.02 }}
                    >
                        <blockquote className="italic text-gray-600 text-lg mb-6">
                            "I love the skill development section of SeekersConnect. It helped me upgrade my skills and land a better position."
                        </blockquote>
                        <cite className="text-gray-500 text-xl">- Jane Smith, Web Developer</cite>
                    </motion.div>
                </motion.section>

                {/* How It Works section with scroll animation */}
                <motion.section
                    className="bg-gray-100 p-12 rounded-lg mb-16 bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${CoverImage})` }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-semibold text-gray-900 text-center mb-8">How It Works</h2>
                    <motion.div
                        className="flex justify-between items-center max-w-5xl mx-auto"
                        variants={staggerChildren}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[1, 2, 3].map((step) => (
                            <motion.div
                                key={step}
                                className="text-center w-1/3"
                                variants={scaleIn}
                            >
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {step === 1 && "Step 1: Create Your Profile"}
                                    {step === 2 && "Step 2: Discover Opportunities"}
                                    {step === 3 && "Step 3: Apply & Grow"}
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    {step === 1 && "Sign up and complete your profile with your skills, experience, and preferences."}
                                    {step === 2 && "Explore job openings and skill development courses tailored to your goals."}
                                    {step === 3 && "Apply for jobs with a single click and take skill courses to advance your career."}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                <div className="flex flex-row gap-10">
                    {/* Trust & Security with hover animation */}
                    <motion.section
                        className="text-center mb-16"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-4xl font-semibold text-gray-900 mb-6">Your Data is Safe with Us</h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            We prioritize your privacy and security. Your data is protected, and we only share it with employers you choose.
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <MyButton name="Learn More" txtColor="white" backgroundColor="#14a800" height="50px" radius="24px" width="150px" />
                        </motion.div>
                    </motion.section>

                    {/* Call to Action with hover animation */}
                    <motion.section
                        className="text-center"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-4xl font-semibold text-gray-900 mb-6">Ready to Find Your Dream Job?</h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                            Join SeekersConnect today and begin your journey toward career success!
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/sign-up">
                                <MyButton
                                    name="Join Now"
                                    txtColor="white"
                                    backgroundColor="#C60C30"
                                    height="50px"
                                    radius="24px"
                                    width="150px"
                                />
                            </Link>
                        </motion.div>
                    </motion.section>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WhySeekersConnect;