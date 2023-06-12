import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if (loading || isInstructorLoading) return
    <span className="loading loading-infinity loading-lg"></span>

    if (user && isInstructor) return children;
    return <Navigate to='/login' state={{from: location}} replace/>
};

export default InstructorRoute;