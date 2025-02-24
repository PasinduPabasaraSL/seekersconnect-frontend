import MyButton from "../MyButton/MyButton";

export default function CourseCard(props) {
    const { courseName, instructor, venue, category, schedule } = props;

    return (
        <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-[300px] h-[280px] hover:shadow-xl hover:scale-[1.03] transform transition-all duration-300 border border-gray-100">
            <div className="flex flex-col h-full justify-between">
                {/* Course Info */}
                <div className="space-y-3">
                    <div>
                        <h3 className="text-xl font-semibold text-[#1F2937] hover:text-[#10B981] transition-colors duration-200 line-clamp-2">
                            {courseName}
                        </h3>
                        <p className="text-base text-[#6B7280]">{instructor}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-[#6B7280]">{venue}</span>
                        <span className="bg-[#ECFDF5] text-[#059669] text-xs font-medium rounded-full px-3 py-1">
                            {category}
                        </span>
                    </div>
                    <p className="text-xs text-[#9CA3AF]">{schedule}</p>
                </div>

                {/* Button */}
                <div className="mt-4">
                    <MyButton
                        name="Enroll Now"
                        radius="8px"
                        backgroundColor="#10B981"
                        txtColor="white"
                        hoverBackgroundColor="#059669"
                        width="full"
                        height="40px"
                    />
                </div>
            </div>
        </div>
    );
}