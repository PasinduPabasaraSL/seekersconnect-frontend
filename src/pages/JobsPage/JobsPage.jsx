import { Filter } from 'lucide-react';
import JobList from '../../common/components/JobList/JobList';
import SearchBox from '../../common/components/SearchBox/SearchBox';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

export default function JobsPage() {
    const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote', 'Internship', 'Hybrid'];
    const jobCategories = ['Software Engineering', 'Data Science', 'Design', 'Marketing', 'Finance', 'Human Resources'];

    return (
        <div className="min-h-screen bg-[#5a5959] mt-15 font-sans">
            <NavBar />
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Search Box */}
                <div className="mb-10">
                    <SearchBox bgColor="#212121" />
                </div>
                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="bg-[#212121] rounded-xl p-6 ">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-semibold text-[#FFFFFF]">Filters</h2>
                                <Filter size={20} className="text-[#42A5F5]" />
                            </div>

                            {/* Job Type Filter */}
                            <div className="mb-6">
                                <h3 className="font-medium text-lg mb-3 text-[#E0E0E0]">Job Type</h3>
                                {jobTypes.map((type) => (
                                    <div key={type} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={type.toLowerCase()}
                                            className="w-4 h-4 text-[#E53935] rounded border-[#E0E0E0] focus:ring-[#42A5F5] bg-[#212121] hover:cursor-pointer"
                                        />
                                        <label htmlFor={type.toLowerCase()} className="ml-2 text-[#E0E0E0]">
                                            {type}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            {/* Experience Level Filter */}
                            <div className="mb-6">
                                <h3 className="font-medium text-lg mb-3 text-[#E0E0E0]">Experience Level</h3>
                                {['Entry Level', 'Mid Level', 'Senior', 'Executive'].map((level) => (
                                    <div key={level} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={level.toLowerCase().replace(' ', '-')}
                                            className="w-4 h-4 text-[#E53935] rounded border-[#E0E0E0] focus:ring-[#42A5F5] bg-[#212121] hover:cursor-pointer"
                                        />
                                        <label
                                            htmlFor={level.toLowerCase().replace(' ', '-')}
                                            className="ml-2 text-[#E0E0E0]"
                                        >
                                            {level}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            {/* Job Category Filter */}
                            <div>
                                <h3 className="font-medium text-lg mb-3 text-[#E0E0E0]">Job Category</h3>
                                {jobCategories.map((category) => (
                                    <div key={category} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={category.toLowerCase().replace(' ', '-')}
                                            className="w-4 h-4 text-[#E53935] rounded border-[#E0E0E0] focus:ring-[#42A5F5] bg-[#212121] hover:cursor-pointer"
                                        />
                                        <label
                                            htmlFor={category.toLowerCase().replace(' ', '-')}
                                            className="ml-2 text-[#E0E0E0]"
                                        >
                                            {category}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-3/4">
                        <div className="grid gap-6">
                            <JobList />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}