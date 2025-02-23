import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/admin" replace />;
    }

    return children;
};

export default ProtectedRoute;