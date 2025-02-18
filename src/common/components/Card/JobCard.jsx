import { Briefcase, MapPin, Clock } from 'lucide-react';
import MyButton from "../MyButton/MyButton";

// JobCard Component
function JobCard(props) {
    const { title, company, location, type, time, width } = props;

    return (
        <div
            className="bg-white rounded-lg shadow-lg p-6 mb-4 hover:scale-105 transform transition duration-300"
            style={{ width: width || "auto" }}
        >
            <div className="flex flex-col justify-between mb-4">
                <div className="mb-2">
                    <div className="text-xl font-semibold text-gray-800">{title}</div>
                    <div className="text-lg text-gray-600">{company}</div>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{location}</span>
                    </div>
                    <div className="bg-gray-100 text-blue-600 text-xs font-medium rounded px-2 py-1">
                        {type}
                    </div>
                </div>
            </div>

            <div className="flex items-center text-xs text-gray-400">
                <Clock size={14} />
                <span className="ml-1">{time}</span>
            </div>

            {/* Apply Button */}
            <div className="mt-6 text-center">
                <MyButton name="Apply Now" width="200px" backgroundColor="black" radius="20px" txtColor="white" />
            </div>
        </div>
    );
}

// JobDetailCard Component
function JobDetailCard(props) {
    const { title, company, location, type, time } = props;

    return (
        <div className="bg-white rounded-lg shadow p-6 mb-4 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 mb-2">{company}</p>
                    <div className="flex items-center gap-4 text-gray-500">
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
                <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors">
                    Apply Now
                </button>
            </div>
        </div>
    );
}

// Exporting both components
export { JobCard, JobDetailCard };
