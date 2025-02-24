import { User, Edit, Trash2, Plus } from 'lucide-react';

export default function JobSeekerManager() {
    // Sample job seeker data
    const jobSeekers = [
        { id: 1, name: 'Alice Brown', email: 'alice@example.com', skills: 'React, Node.js', applications: 3, status: 'Active' },
        { id: 2, name: 'Mark Wilson', email: 'mark@example.com', skills: 'Python, Django', applications: 5, status: 'Inactive' },
        { id: 3, name: 'Sarah Lee', email: 'sarah@example.com', skills: 'UI/UX, Figma', applications: 2, status: 'Active' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                        <User className="w-6 h-6 mr-2" />
                        Job Seekers Management
                    </h1>
                    <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center">
                        <Plus className="w-5 h-5 mr-2" />
                        Add Job Seeker
                    </button>
                </div>

                {/* Job Seekers Table */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Skills
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Applications
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {jobSeekers.map((seeker) => (
                                <tr key={seeker.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {seeker.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {seeker.email}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {seeker.skills}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {seeker.applications}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${seeker.status === 'Active'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                            }`}>
                                            {seeker.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button className="text-gray-600 hover:text-gray-900 mr-4">
                                            <Edit className="w-5 h-5" />
                                        </button>
                                        <button className="text-red-600 hover:text-red-900">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer/Pagination */}
                <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                    <p>Showing {jobSeekers.length} job seekers</p>
                    <div className="space-x-2">
                        <button className="px-3 py-1 bg-white rounded-md border border-gray-300 hover:bg-gray-50">
                            Previous
                        </button>
                        <button className="px-3 py-1 bg-white rounded-md border border-gray-300 hover:bg-gray-50">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}