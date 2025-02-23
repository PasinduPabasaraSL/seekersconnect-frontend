import React, { useState } from 'react';

export default function Dashboard() {

    const stats = [
        { title: 'Total Users', value: '5,231', change: '+12%' },
        { title: 'Active Jobs', value: '1,423', change: '+5%' },
        { title: 'Applications', value: '8,742', change: '+18%' },
        { title: 'Success Rate', value: '67%', change: '+3%' }
    ]; // api call

    return (
        <div>
            <main className="flex-1 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white overflow-hidden shadow rounded-lg"
                        >
                            <div className="p-5">
                                <div className="flex items-center justify-between">
                                    <div className="font-medium text-gray-500">{stat.title}</div>
                                    <div
                                        className={`text-sm ${stat.change.startsWith('+')
                                            ? 'text-green-600'
                                            : 'text-red-600'
                                            }`}
                                    >
                                        {stat.change}
                                    </div>
                                </div>
                                <div className="mt-1 text-3xl font-semibold text-gray-900">
                                    {stat.value}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white shadow rounded-lg">
                    <div className="px-4 py-5 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Recent Activity
                            </h3>
                        </div>
                    </div>
                    <div className="px-4 py-5">
                        <p className="text-gray-500 text-sm">No recent activities</p>
                    </div>
                </div>
            </main>
        </div>
    );
}