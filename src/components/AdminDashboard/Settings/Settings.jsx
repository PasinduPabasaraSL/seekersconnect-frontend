import { Settings as SettingsIcon, User, Bell, Globe, Save, X } from 'lucide-react';
import { useState } from 'react';

export default function Settings() {
    // Sample state for settings (for demonstration)
    const [profile, setProfile] = useState({
        adminName: 'John Doe',
        email: 'admin@example.com',
    });
    const [notifications, setNotifications] = useState({
        emailAlerts: true,
        jobUpdates: false,
        courseUpdates: true,
    });
    const [platform, setPlatform] = useState({
        language: 'English',
        timezone: 'UTC',
        maintenanceMode: false,
    });

    // Handlers for form changes
    const handleProfileChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };
    const handleNotificationChange = (e) => {
        setNotifications({ ...notifications, [e.target.name]: e.target.checked });
    };
    const handlePlatformChange = (e) => {
        setPlatform({ ...platform, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
    };

    const handleSave = () => {
        // Here you would typically save to an API
        console.log('Settings saved:', { profile, notifications, platform });
        alert('Settings saved successfully!');
    };

    return (
        <div className="bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                        <SettingsIcon className="w-6 h-6 mr-2" />
                        Settings
                    </h1>
                    <button
                        onClick={handleSave}
                        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center cursor-pointer"
                    >
                        <Save className="w-5 h-5 mr-2" />
                        Save Changes
                    </button>
                </div>

                {/* Settings Sections */}
                <div className="space-y-6">
                    {/* Profile Settings */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold text-gray-900 flex items-center mb-4">
                            <User className="w-5 h-5 mr-2" />
                            Profile Settings
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Admin Name</label>
                                <input
                                    type="text"
                                    name="adminName"
                                    value={profile.adminName}
                                    onChange={handleProfileChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleProfileChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Notification Preferences */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold text-gray-900 flex items-center mb-4">
                            <Bell className="w-5 h-5 mr-2" />
                            Notification Preferences
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="emailAlerts"
                                    checked={notifications.emailAlerts}
                                    onChange={handleNotificationChange}
                                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                                />
                                <label className="ml-2 text-sm text-gray-700">Email Alerts</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="jobUpdates"
                                    checked={notifications.jobUpdates}
                                    onChange={handleNotificationChange}
                                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                                />
                                <label className="ml-2 text-sm text-gray-700">Job Updates</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="courseUpdates"
                                    checked={notifications.courseUpdates}
                                    onChange={handleNotificationChange}
                                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                                />
                                <label className="ml-2 text-sm text-gray-700">Course Updates</label>
                            </div>
                        </div>
                    </div>

                    {/* Platform Configuration */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-semibold text-gray-900 flex items-center mb-4">
                            <Globe className="w-5 h-5 mr-2" />
                            Platform Configuration
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Language</label>
                                <select
                                    name="language"
                                    value={platform.language}
                                    onChange={handlePlatformChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                                >
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Timezone</label>
                                <select
                                    name="timezone"
                                    value={platform.timezone}
                                    onChange={handlePlatformChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                                >
                                    <option>UTC</option>
                                    <option>EST</option>
                                    <option>PST</option>
                                </select>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="maintenanceMode"
                                    checked={platform.maintenanceMode}
                                    onChange={handlePlatformChange}
                                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                                />
                                <label className="ml-2 text-sm text-gray-700">Maintenance Mode</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}