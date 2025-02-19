import { Filter } from 'lucide-react';
import JobList from '../../common/components/JobList/JobList';
import SearchBox from '../../common/components/SearchBox/SearchBox';

export default function JobsPage() {
    return (
        <div className="min-h-screen bg-[#f5f6fa] mt-15">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Search Box */}
                <div className='mb-10 -mt-8'>
                    <SearchBox />
                </div>
                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold">Filters</h2>
                                <Filter size={20} className="text-gray-500" />
                            </div>

                            {/* Job Type Filter */}
                            <div className="mb-6">
                                <h3 className="font-medium mb-3">Job Type</h3>
                                {['Full-time', 'Part-time', 'Contract', 'Remote'].map((type) => (
                                    <div key={type} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={type.toLowerCase()}
                                            className="w-4 h-4 text-black rounded border-gray-300 focus:ring-black"
                                        />
                                        <label htmlFor={type.toLowerCase()} className="ml-2 text-gray-700">
                                            {type}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            {/* Experience Level Filter */}
                            <div>
                                <h3 className="font-medium mb-3">Experience Level</h3>
                                {['Entry Level', 'Mid Level', 'Senior', 'Executive'].map((level) => (
                                    <div key={level} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={level.toLowerCase().replace(' ', '-')}
                                            className="w-4 h-4 text-black rounded border-gray-300 focus:ring-black"
                                        />
                                        <label htmlFor={level.toLowerCase().replace(' ', '-')} className="ml-2 text-gray-700">
                                            {level}
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
        </div>
    );
}