import MyButton from "../../common/components/MyButton/MyButton";

export default function HeroSection() {
    return (
        <div className="h-3/5 bg-[linear-gradient(45deg,var(--color-primary),var(--color-secondary))] max-w-9xl mx-auto left-0 w-full z-1 p-4 absolute top-17">
            <div className="w-fit flex-col justify-center items-center h-64 absolute left-1/2 transform -translate-x-1/2 top-20">
                <h1 className="text-white text-5xl font-bold text-center">Find Your Dream Job Today</h1>
                <p className="text-white font-normal text-lg pt-4 pb-10 text-center">Search, learn, and connect with opportunities that match you.</p>

                <div className="flex space-x-4 w-full max-w-4xl mx-auto">
                    {/* Input Box for Keyword */}
                    <input
                        type="text"
                        placeholder="Enter keyword"
                        className="w-2/5 p-3 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    />

                    {/* Dropdown for Location */}
                    <div className="relative w-2/5">
                        <select
                            className="appearance-none w-full p-3 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white pr-8"
                        >
                            <option value="" disabled selected>Select Location</option>
                            <option value="new-york">New York</option>
                            <option value="san-francisco">San Francisco</option>
                            <option value="london">London</option>
                            <option value="singapore">Singapore</option>
                        </select>
                        <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>

                    {/* Search Button */}
                    <MyButton name="Search" backgroundColor="#00cec9" txtColor="black" fontSize="20px" height="50px" />

                </div>
            </div>
        </div>

    );
}