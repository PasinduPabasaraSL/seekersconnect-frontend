import { JobCard } from '../../common/components/Card/JobCard.jsx';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import CategoryCard from '../../common/components/Card/CategoryCard.jsx';
import CourseList from '../../common/components/CourseList/CourseList.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import {
    Briefcase,
    Database,
    Shield,
    PenTool,
    Cloud,
    DollarSign,
    Users,
    Stethoscope,
    Wrench,
    Headphones,
} from 'lucide-react';

export default function HomePage() {
    const jobs = [
        {
            title: "Frontend Developer",
            company: "Tech Corp",
            location: "New York, NY",
            time: "5 minutes ago",
            type: "Full-time",
        },
        {
            title: "Backend Developer",
            company: "Tech Corp",
            location: "New York, NY",
            time: "3 hours ago",
            type: "Full-time",
        },
        {
            title: "Fullstack Developer",
            company: "Innovate Ltd.",
            location: "San Francisco, CA",
            time: "5 hours ago",
            type: "Full-time",
        },
        {
            title: "UX/UI Designer",
            company: "Creative Software",
            location: "Kollupitiya, Sri Lanka",
            time: "6 hours ago",
            type: "Part-time",
        },
    ];

    const categories = [
        { title: "Software Development", jobsCount: "20", icon: Briefcase },
        { title: "Data Science & Analytics", jobsCount: "15", icon: Database },
        { title: "Cybersecurity", jobsCount: "10", icon: Shield },
        { title: "UI/UX Design", jobsCount: "12", icon: PenTool },
        { title: "Cloud Computing", jobsCount: "18", icon: Cloud },
        { title: "Marketing & Sales", jobsCount: "25", icon: DollarSign },
        { title: "Project Management", jobsCount: "14", icon: Briefcase },
        { title: "Finance & Accounting", jobsCount: "16", icon: DollarSign },
        { title: "Human Resources", jobsCount: "9", icon: Users },
        { title: "Healthcare & Medical", jobsCount: "22", icon: Stethoscope },
        { title: "Engineering & Architecture", jobsCount: "13", icon: Wrench },
        { title: "Customer Support", jobsCount: "30", icon: Headphones },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <HeroSection />
            <div className="flex-1 bg-[#F9FAFB] py-12">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Recent Jobs */}
                    <h1 className="text-3xl font-bold text-[#1F2937] mb-8">Recent Jobs</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {jobs.map((job, index) => (
                            <JobCard
                                key={index}
                                title={job.title}
                                company={job.company}
                                location={job.location}
                                type={job.type}
                                time={job.time}
                                width="auto"
                            />
                        ))}
                    </div>

                    {/* Popular Courses */}
                    <h1 className="text-3xl font-bold text-[#1F2937] mt-16 mb-6">Popular Courses</h1>
                    <CourseList />

                    {/* Categories */}
                    <h2 className="text-4xl font-bold text-[#1F2937] text-center mt-16 mb-10">
                        Find Jobs by Category
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {categories.map((category, index) => (
                            <CategoryCard
                                key={index}
                                title={category.title}
                                jobsCount={category.jobsCount}
                                icon={category.icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}