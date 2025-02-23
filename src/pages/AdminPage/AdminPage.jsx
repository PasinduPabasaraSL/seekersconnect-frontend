import TopBar from '../../components/AdminDashboard/TopBar/TopBar.jsx';
import Dashboard from '../../components/AdminDashboard/Dashboard/Dashboard.jsx';
import SideBar from '../../components/AdminDashboard/SideBar/SideBar.jsx';

const AdminPage = () => {

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar - Desktop */}
            <SideBar />

            {/* Main content */}
            <div className="flex-1 min-w-0 flex flex-col md:ml-64">
                {/* Top bar */}
                <TopBar />

                {/*content area */}
                <Dashboard />
            </div>

        </div>
    );
};

export default AdminPage;