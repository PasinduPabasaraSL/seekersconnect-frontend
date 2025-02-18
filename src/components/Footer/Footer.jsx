export default function Footer() {
    return (
        <div className="bg-gray-800 text-white py-8">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-6 md:mb-0">
                        <div className="pb-5 text-[#dfe6e9] text-3xl">Seekers<span className="text-[#00cec9]">Connect</span></div>
                        <p className="text-sm text-gray-400">456 Innovation Park,
                            Colombo 5,
                            Western Province, Sri Lanka</p>
                        <p className="text-sm text-gray-400">Tel: +94 78 715 0428</p>
                        <p className="text-sm text-gray-400">Email: <a href="mailto:info@seekersconnect.com" className="hover:text-white">info@seekersconnect.com</a></p>
                    </div>

                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-white">Job Seekers</h3>
                            <a href="#register" className="text-gray-400 hover:text-white transform transition-all duration-500 hover:translate-x-3 hover:scale-110">Register Now</a> <br />
                            <a href="#search" className="text-gray-400 hover:text-white transform transition-all duration-500 hover:translate-x-3 hover:scale-110">Search Jobs</a> <br />
                            <a href="#login" className="text-gray-400 hover:text-white transform transition-all duration-500 hover:translate-x-3 hover:scale-110">Login</a>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-white">Employers</h3>
                            <a href="#post-job" className="text-gray-400 hover:text-white transform transition-all duration-500 hover:translate-x-3 hover:scale-110">Post a Job</a> <br />
                            <a href="#advertise" className="text-gray-400 hover:text-white transform transition-all duration-500 hover:translate-x-3 hover:scale-110">Advertise</a>  <br />
                            <a href="#terms" className="text-gray-400 hover:text-white transform transition-all duration-500 hover:translate-x-3 hover:scale-110">Terms of Service</a>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
                            <a href="#about-us" className="text-gray-400 hover:text-white transform transition-all duration-500 hover:translate-x-3 hover:scale-110">About Us</a>  <br />
                            <a href="#contact-us" className="text-gray-400 hover:text-white transform transition-all duration-500 hover:translate-x-3 hover:scale-110">Contact Us</a>  <br />
                            <a href="#faq" className="text-gray-400 hover:text-white transform transition-all duration-500 hover:translate-x-3 hover:scale-110">FAQ</a>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-6 text-sm text-gray-400">
                    <p>&copy; 2025 SeekersConnect. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}