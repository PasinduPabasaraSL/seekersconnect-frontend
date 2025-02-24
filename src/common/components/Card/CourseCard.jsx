import MyButton from "../MyButton/MyButton";

export default function CourseCard(props) {
    const { courseName, instructor, venue, category, schedule } = props;

    return (
        <div className="bg-[#2D2D2D] rounded-xl shadow-md p-6 w-full max-w-[260px] h-[280px] hover:shadow-xl hover:scale-[1.03] hover:border-[#1976D2] transform transition-all duration-300 border border-[#212121]">
            <div className="flex flex-col h-full justify-between">
                {/* Course Info */}
                <div className="space-y-3">
                    <div>
                        <h3 className="text-xl font-semibold text-[#FFFFFF] hover:text-[#D32F2F] transition-colors duration-200 line-clamp-2">
                            {courseName}
                        </h3>
                        <p className="text-base text-[#1976D2]">{instructor}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-[#B0BEC5]">{venue}</span>
                        <span className="bg-[#D32F2F] text-[#FFFFFF] text-xs font-medium rounded-full px-3 py-1">
                            {category}
                        </span>
                    </div>
                    <p className="text-xs text-[#B0BEC5]">{schedule}</p>
                </div>

                {/* Button */}
                <div className="mt-4">
                    <MyButton
                        name="Enroll Now"
                        radius="8px"
                        backgroundColor="#D32F2F"
                        txtColor="#FFFFFF"
                        hoverBackgroundColor="#B71C1C"
                        width="full"
                        height="40px"
                    />
                </div>
            </div>
        </div>
    );
}