import { Filter } from 'lucide-react';
import JobList from '../../common/components/JobList/JobList';
import SearchBox from '../../common/components/SearchBox/SearchBox';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

export default function JobsPage() {
    const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Remote', 'Internship', 'Hybrid'];
    const jobCategories = ['Software Engineering', 'Data Science', 'Design', 'Marketing', 'Finance', 'Human Resources'];

    return (
        <div className="min-h-screen bg-[#212121] mt-15">
            <NavBar />
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Search Box */}
                <div className="mb-10 -mt-8">
                    <SearchBox bgColor="#212121" />
                </div>
                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="bg-[#212121] rounded-xl shadow-md p-6 border border-[#D32F2F]">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold text-[#FFFFFF]">Filters</h2>
                                <Filter size={20} className="text-[#1976D2]" />
                            </div>

                            {/* Job Type Filter */}
                            <div className="mb-6">
                                <h3 className="font-medium mb-3 text-[#FFFFFF]">Job Type</h3>
                                {jobTypes.map((type) => (
                                    <div key={type} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={type.toLowerCase()}
                                            className="w-4 h-4 text-[#D32F2F] rounded border-[#FFFFFF] focus:ring-[#1976D2] bg-[#212121]"
                                        />
                                        <label htmlFor={type.toLowerCase()} className="ml-2 text-[#FFFFFF]">
                                            {type}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            {/* Experience Level Filter */}
                            <div className="mb-6">
                                <h3 className="font-medium mb-3 text-[#FFFFFF]">Experience Level</h3>
                                {['Entry Level', 'Mid Level', 'Senior', 'Executive'].map((level) => (
                                    <div key={level} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={level.toLowerCase().replace(' ', '-')}
                                            className="w-4 h-4 text-[#D32F2F] rounded border-[#FFFFFF] focus:ring-[#1976D2] bg-[#212121]"
                                        />
                                        <label
                                            htmlFor={level.toLowerCase().replace(' ', '-')}
                                            className="ml-2 text-[#FFFFFF]"
                                        >
                                            {level}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            {/* Job Category Filter */}
                            <div>
                                <h3 className="font-medium mb-3 text-[#FFFFFF]">Job Category</h3>
                                {jobCategories.map((category) => (
                                    <div key={category} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={category.toLowerCase().replace(' ', '-')}
                                            className="w-4 h-4 text-[#D32F2F] rounded border-[#FFFFFF] focus:ring-[#1976D2] bg-[#212121]"
                                        />
                                        <label
                                            htmlFor={category.toLowerCase().replace(' ', '-')}
                                            className="ml-2 text-[#FFFFFF]"
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