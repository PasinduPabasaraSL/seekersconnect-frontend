export default function CourseCard(props) {
    const { courseName, instructor, venue, category, schedule } = props;

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4 w-72 hover:scale-105 transform transition duration-300 cursor-pointer hover:shadow-2xl">
            <div className="flex flex-col justify-between mb-4">
                <div className="mb-2">
                    <div className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
                        {courseName}
                    </div>
                    <div className="text-lg text-gray-600">{instructor}</div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">{venue}</div>
                    <div className="bg-blue-100 text-blue-600 text-xs font-medium rounded-full px-3 py-1">
                        {category}
                    </div>
                </div>
            </div>

            <div className="text-xs text-gray-400 text-left">{schedule}</div>
        </div>
    );
}