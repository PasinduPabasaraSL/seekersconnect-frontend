export default function Footer() {
    return (
        <div className="bg-[#1a1717] text-[#FFFFFF] py-8">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-6 md:mb-0">
                        <div className="text-3xl font-bold">
                            <span className="text-[#FFFFFF]">Seekers</span>
                            <span className="text-[#D32F2F]">Connect</span>
                        </div>
                        <p className="text-sm text-[#B0BEC5]">456 Innovation Park, Colombo 5, Western Province, Sri Lanka</p>
                        <p className="text-sm text-[#B0BEC5]">Tel: +94 78 715 0428</p>
                        <p className="text-sm text-[#B0BEC5]">
                            Email:{' '}
                            <a href="mailto:info@seekersconnect.com" className="hover:text-[#1976D2] transition-colors duration-200">
                                info@seekersconnect.com
                            </a>
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-[#FFFFFF]">Job Seekers</h3>
                            <a href="#register" className="block text-[#B0BEC5] hover:text-[#D32F2F] transform transition-all duration-500 hover:translate-x-3 hover:scale-110">
                                Register Now
                            </a>
                            <a href="#search" className="block text-[#B0BEC5] hover:text-[#D32F2F] transform transition-all duration-500 hover:translate-x-3 hover:scale-110">
                                Search Jobs
                            </a>
                            <a href="#login" className="block text-[#B0BEC5] hover:text-[#D32F2F] transform transition-all duration-500 hover:translate-x-3 hover:scale-110">
                                Login
                            </a>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-[#FFFFFF]">Employers</h3>
                            <a href="#post-job" className="block text-[#B0BEC5] hover:text-[#D32F2F] transform transition-all duration-500 hover:translate-x-3 hover:scale-110">
                                Post a Job
                            </a>
                            <a href="#advertise" className="block text-[#B0BEC5] hover:text-[#D32F2F] transform transition-all duration-500 hover:translate-x-3 hover:scale-110">
                                Advertise
                            </a>
                            <a href="#terms" className="block text-[#B0BEC5] hover:text-[#D32F2F] transform transition-all duration-500 hover:translate-x-3 hover:scale-110">
                                Terms of Service
                            </a>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-[#FFFFFF]">Quick Links</h3>
                            <a href="#about-us" className="block text-[#B0BEC5] hover:text-[#D32F2F] transform transition-all duration-500 hover:translate-x-3 hover:scale-110">
                                About Us
                            </a>
                            <a href="#contact-us" className="block text-[#B0BEC5] hover:text-[#D32F2F] transform transition-all duration-500 hover:translate-x-3 hover:scale-110">
                                Contact Us
                            </a>
                            <a href="#faq" className="block text-[#B0BEC5] hover:text-[#D32F2F] transform transition-all duration-500 hover:translate-x-3 hover:scale-110">
                                FAQ
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-6 text-sm text-[#B0BEC5]">
                    <p>© 2025 SeekersConnect. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}