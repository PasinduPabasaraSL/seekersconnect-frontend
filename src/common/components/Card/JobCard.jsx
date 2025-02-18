export default function JobCard(props) {
    const { title, company, location, type, time } = props;

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4 w-72 hover:scale-105 transform transition duration-300 cursor-pointer">
            <div className="flex flex-col justify-between mb-4">
                <div className="mb-2">
                    <div className="text-xl font-semibold text-gray-800">{title}</div>
                    <div className="text-lg text-gray-600">{company}</div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">{location}</div>
                    <div className="bg-blue-100 text-blue-600 text-xs font-medium rounded px-2 py-1">
                        {type}
                    </div>
                </div>
            </div>

            <div className="text-xs text-gray-400 text-left">{time}</div>
        </div>
    );
}