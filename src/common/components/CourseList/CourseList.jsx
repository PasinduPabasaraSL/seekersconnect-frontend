import CourseCard from "../Card/CourseCard";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const courses = [
    {
        courseName: "React for Beginners",
        instructor: "John Doe",
        venue: "Online",
        category: "Online",
        schedule: "Mon, Wed, Fri - 10:00 AM"
    },
    {
        courseName: "Advanced JavaScript",
        instructor: "Jane Smith",
        venue: "New York, NY",
        category: "In-person",
        schedule: "Tue, Thu - 2:00 PM"
    },
    {
        courseName: "Introduction to Python",
        instructor: "Pasindu Pabasara",
        venue: "Online",
        category: "Online",
        schedule: "Mon, Wed, Fri - 1:00 PM"
    },
    {
        courseName: "Certificate Course in Digital Photography",
        instructor: "NIBM",
        venue: "Colombo, Sri Lanka",
        category: "In-person",
        schedule: "Mon, Wed, Fri - 1:00 PM"
    },
    {
        courseName: "Machine Learning with Python",
        instructor: "Alice Johnson",
        venue: "Online",
        category: "Online",
        schedule: "Sat, Sun - 5:00 PM"
    },
    {
        courseName: "Cloud Computing Basics",
        instructor: "Michael Brown",
        venue: "Online",
        category: "Online",
        schedule: "Mon, Wed - 3:00 PM"
    }
]; // api call

const CourseList = () => {
    const scrollRef = useRef(null);
    const [isLeftVisible, setIsLeftVisible] = useState(false);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            direction === "left"
                ? current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
                : current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                setIsLeftVisible(scrollRef.current.scrollLeft > 0);
            }
        };

        const scrollContainer = scrollRef.current;
        scrollContainer?.addEventListener('scroll', handleScroll);

        return () => {
            scrollContainer?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative w-full h-[300px]">
            {isLeftVisible && (
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full shadow-md"
                    onClick={() => scroll("left")}
                >
                    <ChevronLeft className="h-6 w-6 text-gray-700" />
                </button>
            )}

            <div ref={scrollRef} className="overflow-x-auto flex gap-5.5 px-0 py-4 scrollbar-hide scroll-smooth scroll-snap-x h-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {courses.map((course, index) => (
                    <div key={index} className="min-w-[300px] snap-center h-full">
                        <CourseCard
                            courseName={course.courseName}
                            instructor={course.instructor}
                            venue={course.venue}
                            category={course.category}
                            schedule={course.schedule}
                        />
                    </div>
                ))}
            </div>

            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full shadow-md"
                onClick={() => scroll("right")}
            >
                <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
        </div>
    );
};

export default CourseList;