import { Headset, Filter, Search, Send, X } from 'lucide-react';
import { useState } from 'react';

export default function Support() {
    // Sample support tickets data
    const initialTickets = [
        { id: 1, user: 'Alice Brown', email: 'alice@example.com', subject: 'Login Issue', status: 'Open', date: '2025-02-20' },
        { id: 2, user: 'Bob Smith', email: 'bob@example.com', subject: 'Payment Problem', status: 'Resolved', date: '2025-02-19' },
        { id: 3, user: 'Clara Jones', email: 'clara@example.com', subject: 'Course Access', status: 'Pending', date: '2025-02-21' },
    ];

    const [tickets, setTickets] = useState(initialTickets);
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [response, setResponse] = useState('');

    // Filter and search logic
    const filteredTickets = tickets.filter((ticket) => {
        const matchesFilter = filter === 'All' || ticket.status === filter;
        const matchesSearch = ticket.user.toLowerCase().includes(search.toLowerCase()) ||
            ticket.email.toLowerCase().includes(search.toLowerCase()) ||
            ticket.subject.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    // Handle ticket response
    const handleRespond = (ticketId) => {
        // Here you would typically send the response to an API
        console.log(`Responding to ticket ${ticketId} with: ${response}`);
        setTickets(tickets.map(ticket =>
            ticket.id === ticketId ? { ...ticket, status: 'Resolved' } : ticket
        ));
        setSelectedTicket(null);
        setResponse('');
        alert('Response sent successfully!');
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                        <Headset className="w-6 h-6 mr-2" />
                        Support Tickets
                    </h1>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search tickets..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-10 pr-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                            />
                        </div>
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="flex items-center px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                        >
                            <option value="All">All</option>
                            <option value="Open">Open</option>
                            <option value="Pending">Pending</option>
                            <option value="Resolved">Resolved</option>
                        </select>
                    </div>
                </div>

                {/* Tickets Table */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredTickets.map((ticket) => (
                                <tr key={ticket.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ticket.user}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.email}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{ticket.subject}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${ticket.status === 'Open' ? 'bg-yellow-100 text-yellow-800' :
                                                ticket.status === 'Pending' ? 'bg-blue-100 text-blue-800' :
                                                    'bg-green-100 text-green-800'
                                            }`}>
                                            {ticket.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button
                                            onClick={() => setSelectedTicket(ticket)}
                                            className="text-gray-600 hover:text-gray-900"
                                        >
                                            <Send className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Response Modal (shown when a ticket is selected) */}
                {selectedTicket && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold text-gray-900">Respond to {selectedTicket.user}</h2>
                                <button onClick={() => setSelectedTicket(null)} className="text-gray-600 hover:text-gray-900">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">Subject: {selectedTicket.subject}</p>
                            <textarea
                                value={response}
                                onChange={(e) => setResponse(e.target.value)}
                                placeholder="Type your response here..."
                                className="w-full h-32 p-2 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black mb-4"
                            />
                            <button
                                onClick={() => handleRespond(selectedTicket.id)}
                                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center"
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Send Response
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}