import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-accent btn-wide drawer-button lg:hidden my-4"><FaBars/></label>
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                    <div className="avatar mx-auto">
                        <div className="mx-auto w-2/4 rounded-full"><img src={user?.photoURL} /></div>
                    </div>
                    <span className="mx-auto text-2xl my-8">{user?.displayName}</span>
                    {
                        isAdmin ? <>
                            <li><Link to='/dashboard/manageClasses'>Manage Classes</Link></li>
                            <li><Link to='/dashboard/manageusers'>Manage Users</Link></li>
                            <li><Link to='/dashboard/payment'>Payment History</Link></li>
                        </>
                            : isInstructor ?
                                <>
                                    <li><Link to='/dashboard/addClass'>Add A Class</Link></li>
                                    <li><Link to='/dashboard/myclasses'>My Classes</Link></li>
                                </> : <>
                                    <li><Link to='/dashboard/mycart'>My Cart</Link></li>
                                </>
                    }
                    <div className="divider"></div>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/instructors'>Instructors</Link></li>
                    <li><Link to='/classes'>Classes</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;