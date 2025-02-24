import { Briefcase, MapPin, Clock, Share2 } from 'lucide-react';
import MyButton from "../MyButton/MyButton";

// JobCard Component
function JobCard(props) {
    const { title, company, location, type, time, width } = props;

    const handleShare = async () => {
        const jobDetails = window.location.href;
        try {
            await navigator.clipboard.writeText(jobDetails);
            alert("Job link copied to clipboard!");
        } catch (error) {
            console.error("Clipboard copy failed:", error);
            alert("Failed to copy link. Please try manually.");
        }
    };

    return (
        <div
            className="bg-[#2D2D2D] rounded-xl shadow-lg p-6 mb-4 hover:scale-105 hover:border-[#1976D2] transform transition duration-300"
            style={{ width: width || "auto" }}
        >
            <div className="flex flex-col justify-between mb-4">
                <div className="mb-2">
                    <div className="text-xl font-semibold text-[#FFFFFF]">{title}</div>
                    <div className="text-lg text-[#1976D2]">{company}</div>
                </div>
                <div className="flex justify-between items-center text-sm text-[#B0BEC5]">
                    <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{location}</span>
                    </div>
                    <div className="bg-[#D32F2F] text-[#FFFFFF] text-xs font-medium rounded px-2 py-1">
                        {type}
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center text-xs text-[#B0BEC5]">
                <div className="flex items-center">
                    <Clock size={14} />
                    <span className="ml-1">{time}</span>
                </div>
                <button onClick={handleShare} className="flex items-center text-[#1976D2] hover:text-[#FFFFFF] transition-colors">
                    <Share2 size={16} className="mr-1" />
                    <span>Share</span>
                </button>
            </div>

            {/* Apply Button */}
            <div className="mt-6 text-center">
                <MyButton
                    name="Apply Now"
                    width="200px"
                    backgroundColor="#D32F2F"
                    radius="20px"
                    txtColor="#FFFFFF"
                    hoverBackgroundColor="#B71C1C"
                />
            </div>
        </div>
    );
}

// JobDetailCard Component
function JobDetailCard(props) {
    const { title, company, location, type, time } = props;

    return (
        <div className="bg-[#2D2D2D] rounded-lg shadow p-6 mb-4 hover:shadow-lg hover:border-[#1976D2] transition-all duration-200">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">{title}</h3>
                    <p className="text-[#1976D2] mb-2">{company}</p>
                    <div className="flex items-center gap-4 text-[#B0BEC5]">
                        <span className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {location}
                        </span>
                        <span className="flex items-center">
                            <Briefcase size={16} className="mr-1" />
                            {type}
                        </span>
                        <span className="flex items-center">
                            <Clock size={16} className="mr-1" />
                            {time}
                        </span>
                    </div>
                </div>
                <button className="bg-[#D32F2F] text-[#FFFFFF] px-4 py-2 rounded-lg hover:bg-[#B71C1C] transition-colors cursor-pointer">
                    Apply Now
                </button>
            </div>
        </div>
    );
}

export { JobCard, JobDetailCard };