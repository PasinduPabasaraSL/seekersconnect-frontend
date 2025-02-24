import { BarChart, Users, Briefcase, Clock, TrendingUp, BookOpen } from 'lucide-react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

export default function Analytics() {
    // Sample analytics data
    const stats = {
        totalUsers: 1250,
        activeJobs: 45,
        avgApplicationTime: '3.2 days',
        growthRate: '+12.5%',
        jobSeekers: 870,
        employers: 32,
        courses: 15,
    };

    // Data for Bar Chart (Users by Type)
    const barData = {
        labels: ['Job Seekers', 'Employers', 'Trainers'],
        datasets: [
            {
                label: 'Count',
                data: [stats.jobSeekers, stats.employers, 50], // Assuming 50 trainers as sample
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Black with opacity
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Data for Line Chart (Growth Over Time)
    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'User Growth',
                data: [500, 600, 750, 900, 1100, 1250],
                borderColor: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    // Chart options
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
            },
        },
    };

    return (
        <div className="bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                        <BarChart className="w-6 h-6 mr-2" />
                        Analytics Dashboard
                    </h1>
                    <p className="text-sm text-gray-600 mt-1">Overview of platform performance</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Total Users</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
                            </div>
                            <Users className="w-8 h-8 text-gray-600" />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Active Jobs</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.activeJobs}</p>
                            </div>
                            <Briefcase className="w-8 h-8 text-gray-600" />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Avg Application Time</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.avgApplicationTime}</p>
                            </div>
                            <Clock className="w-8 h-8 text-gray-600" />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Growth Rate</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.growthRate}</p>
                            </div>
                            <TrendingUp className="w-8 h-8 text-gray-600" />
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Bar Chart - Users by Type */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Users by Type</h2>
                        <Bar
                            data={barData}
                            options={{
                                ...chartOptions,
                                plugins: {
                                    ...chartOptions.plugins,
                                    title: { display: false },
                                },
                            }}
                        />
                    </div>

                    {/* Line Chart - Growth Over Time */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">User Growth Over Time</h2>
                        <Line
                            data={lineData}
                            options={{
                                ...chartOptions,
                                plugins: {
                                    ...chartOptions.plugins,
                                    title: { display: false },
                                },
                            }}
                        />
                    </div>
                </div>

                {/* Additional Stats */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Job Seekers</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.jobSeekers}</p>
                            </div>
                            <Users className="w-8 h-8 text-gray-600" />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Employers</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.employers}</p>
                            </div>
                            <Briefcase className="w-8 h-8 text-gray-600" />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Courses</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.courses}</p>
                            </div>
                            <BookOpen className="w-8 h-8 text-gray-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}