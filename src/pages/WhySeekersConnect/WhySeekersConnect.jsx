import React from 'react';
import { DatabaseZap, MapPin, BellPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import MyButton from '../../common/components/MyButton/MyButton';
import { Link } from 'react-router';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const WhySeekersConnect = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } },
    };

    const slideIn = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <div className="bg-[#000000] text-[#FFFFFF] font-sans">
            <NavBar />
            <div className="container mx-auto px-6 py-12 lg:px-16 mt-15">
                {/* Page Introduction */}
                <motion.section
                    className="mb-20 text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#FFFFFF] leading-tight mb-6">
                        Why SeekersConnect?
                    </h1>
                    <p className="text-lg text-[#FFFFFF] opacity-80 mb-8">
                        Your ultimate job portal and skill development platform. Build a better career with personalized tools designed for every step of your journey—whether it’s landing your first job or leveling up to the next big role.
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/sign-up">
                            <MyButton
                                name="Get Started"
                                txtColor="#FFFFFF"
                                backgroundColor="#D32F2F"
                                height="50px"
                                radius="12px"
                                width="160px"
                            />
                        </Link>
                    </motion.div>
                </motion.section>

                {/* Key Features */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-[#FFFFFF] text-center mb-12">Key Features & Benefits</h2>
                    <div className="space-y-12">
                        {[
                            { title: "Personalized Job Recommendations", desc: "Tailored job suggestions based on your skills and interests, ensuring you find the perfect career match quickly.", icon: <DatabaseZap size={24} /> },
                            { title: "Easy Application Process", desc: "Streamlined applications let you apply to multiple jobs with just a few clicks, saving you time and effort.", icon: <MapPin size={24} /> },
                            { title: "Real-Time Job Alerts", desc: "Instant notifications keep you updated on new opportunities that align with your profile, so you never miss out.", icon: <BellPlus size={24} /> },
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-6`}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={slideIn}
                            >
                                <div className="bg-[#1A1A1A] p-6 rounded-lg w-full hover:border-[#1976D2] border-2 border-transparent transition-all">
                                    <div className="flex items-center mb-4">
                                        <span className="text-[#1976D2] mr-3">{feature.icon}</span>
                                        <h3 className="text-2xl font-semibold text-[#FFFFFF]">{feature.title}</h3>
                                    </div>
                                    <p className="text-[#FFFFFF] opacity-70">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <motion.section
                    className="mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="text-3xl font-semibold text-[#FFFFFF] text-center mb-12">What Our Users Say</h2>
                    <div className="flex flex-col lg:flex-row gap-8 overflow-x-auto pb-4">
                        {[
                            { quote: "Found my dream job in two weeks—amazing recommendations!", name: "John Doe", role: "Software Engineer" },
                            { quote: "Skill development courses helped me level up fast.", name: "Jane Smith", role: "Web Developer" },
                        ].map((testimonial) => (
                            <div
                                key={testimonial.name}
                                className="bg-[#1A1A1A] p-6 rounded-lg flex-1 min-w-[300px] hover:bg-[#D32F2F]/10 transition-colors"
                            >
                                <blockquote className="italic text-[#FFFFFF] opacity-70 mb-4">"{testimonial.quote}"</blockquote>
                                <cite className="text-[#FFFFFF] font-medium">- {testimonial.name}, {testimonial.role}</cite>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* How It Works */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-[#FFFFFF] text-center mb-12">How It Works</h2>
                    <div className="relative max-w-2xl mx-auto space-y-12">
                        {[
                            { step: "Create Your Profile", desc: "Sign up and add your skills, experience, and preferences to get started." },
                            { step: "Discover Opportunities", desc: "Explore job listings and skill development courses tailored to your goals." },
                            { step: "Apply & Grow", desc: "Apply to jobs easily and take courses to advance your career." },
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                className="flex items-start relative"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={slideIn}
                            >
                                <div className="w-10 h-10 bg-[#D32F2F] rounded-full flex items-center justify-center text-[#FFFFFF] font-bold mr-6">
                                    {index + 1}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">{item.step}</h3>
                                    <p className="text-[#FFFFFF] opacity-70">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Trust & CTA */}
                <motion.section
                    className="flex flex-col lg:flex-row gap-12 mb-20"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <div className="lg:w-1/2 bg-[#1A1A1A] p-8 rounded-lg">
                        <h2 className="text-3xl font-semibold text-[#FFFFFF] mb-6">Your Data is Safe</h2>
                        <p className="text-[#FFFFFF] opacity-70 mb-8">
                            We prioritize your privacy—your data stays secure and is only shared with your approval.
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <MyButton
                                name="Learn More"
                                txtColor="#FFFFFF"
                                backgroundColor="#1976D2"
                                height="50px"
                                radius="12px"
                                width="160px"
                            />
                        </motion.div>
                    </div>
                    <div className="lg:w-1/2 bg-[#1A1A1A] p-8 rounded-lg">
                        <h2 className="text-3xl font-semibold text-[#FFFFFF] mb-6">Find Your Dream Job</h2>
                        <p className="text-[#FFFFFF] opacity-70 mb-8">
                            Join SeekersConnect and kickstart your career journey today!
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/sign-up">
                                <MyButton
                                    name="Join Now"
                                    txtColor="#FFFFFF"
                                    backgroundColor="#D32F2F"
                                    height="50px"
                                    radius="12px"
                                    width="160px"
                                />
                            </Link>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
            <Footer />
        </div>
    );
};

export default WhySeekersConnect;