import { BookOpen, Edit, Trash2, Plus, User } from 'lucide-react';

export default function CourseManager() {
    // Sample course data with trainers
    const courses = [
        {
            id: 1,
            title: 'React Fundamentals',
            trainer: 'John Smith',
            duration: '4 weeks',
            enrolled: 25,
            status: 'Active'
        },
        {
            id: 2,
            title: 'Python for Beginners',
            trainer: 'Emma Davis',
            duration: '6 weeks',
            enrolled: 18,
            status: 'Inactive'
        },
        {
            id: 3,
            title: 'UX Design Basics',
            trainer: 'Michael Chen',
            duration: '5 weeks',
            enrolled: 30,
            status: 'Active'
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                        <BookOpen className="w-6 h-6 mr-2" />
                        Courses Management
                    </h1>
                    <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center">
                        <Plus className="w-5 h-5 mr-2" />
                        Add Course
                    </button>
                </div>

                {/* Courses Table */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Trainer
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Duration
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Enrolled
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
                            {courses.map((course) => (
                                <tr key={course.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {course.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                                        <User className="w-4 h-4 mr-1" />
                                        {course.trainer}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {course.duration}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {course.enrolled}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${course.status === 'Active'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                            }`}>
                                            {course.status}
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
                    <p>Showing {courses.length} courses</p>
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