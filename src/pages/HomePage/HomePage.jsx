import JobCard from '../../common/components/Card/JobCard.jsx';
import CourseCard from '../../common/components/Card/CourseCard.jsx';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';

export default function HomePage() {
    const jobs = [
        {
            title: "Frontend Developer",
            company: "Tech Corp",
            location: "New York, NY",
            time: "5 minute ago",
            jobType: "Full-time"
        },
        {
            title: "Backend Developer",
            company: "Tech Corp",
            location: "New York, NY",
            time: "3 hours ago",
            jobType: "Full-time"
        },
        {
            title: "Fullstack Developer",
            company: "Innovate Ltd.",
            location: "San Francisco, CA",
            time: "5 hours ago",
            jobType: "Full-time"
        },
        {
            title: "UX/UI Designer",
            company: "Creative Software",
            location: "Kollupitiya, Sri lanka",
            time: "6 hours ago",
            jobType: "Part-time"
        }
    ];  // api call

    const courses = [
        {
            courseName: 'React for Beginners',
            instructor: 'John Doe',
            venue: 'Online',
            category: 'Online',
            schedule: 'Mon, Wed, Fri - 10:00 AM'
        },
        {
            courseName: 'Advanced JavaScript',
            instructor: 'Jane Smith',
            venue: 'New York, NY',
            category: 'In-person',
            schedule: 'Tue, Thu - 2:00 PM'
        },
        {
            courseName: 'Introduction to Python',
            instructor: 'Pasindu Pabasara',
            venue: 'Online',
            category: 'Online',
            schedule: 'Mon, Wed, Fri - 1:00 PM'
        },
        {
            courseName: 'Certificate Course in Digital Photography',
            instructor: 'NIBM',
            venue: 'Colombo, Sri Lanka',
            category: 'in-person',
            schedule: 'Mon, Wed, Fri - 1:00 PM'
        }
    ]; // api call

    return (
        <div>
            <NavBar />
            <HeroSection />
            <div className="p-6 bg-[#f5f6fa]">
                <h1 className='pb-6 text-2xl font-bold'>Recent Jobs</h1>
                <div className='flex flex-wrap justify-start gap-6'>
                    {jobs.map((job, index) => (
                        <JobCard
                            key={index}
                            title={job.title}
                            company={job.company}
                            location={job.location}
                            type={job.jobType}
                            time={job.time}
                        />
                    ))}
                </div>

                <h1 className='pb-6 text-2xl font-bold'>Popular Courses</h1>

                <div className='flex flex-wrap justify-start gap-6'>
                    {courses.map((course, index) => (
                        <CourseCard
                            key={index}
                            courseName={course.courseName}
                            instructor={course.instructor}
                            venue={course.venue}
                            category={course.category}
                            schedule={course.schedule}
                        />
                    ))}
                </div>

            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}