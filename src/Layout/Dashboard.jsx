import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaUserGraduate } from "react-icons/fa";
import { SiGoogleclassroom } from 'react-icons/si';
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { IoMdCart, IoMdHome } from "react-icons/io";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-accent btn-wide drawer-button lg:hidden my-4"><FaBars /></label>
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
                            <li><Link to='/dashboard/adminhome'>Admin Home</Link></li>
                            <li><Link to='/dashboard/manageClasses'>Manage Classes</Link></li>
                            <li><Link to='/dashboard/manageusers'>Manage Users</Link></li>
                            <li><Link to='/dashboard/payment'>Payment History</Link></li>
                        </>
                            : isInstructor ?
                                <>
                                    <li><Link to='/dashboard/userhome'>Instructor Home</Link></li>
                                    <li><Link to='/dashboard/addClass'>Add A Class</Link></li>
                                    <li><Link to='/dashboard/myClasses'>My Classes</Link></li>
                                </> : <>
                                    <li><Link to='/dashboard/mycart'><IoMdCart size={25} />My Cart</Link></li>
                                </>
                    }
                    <div className="divider"></div>
                    <li><Link to='/'><IoMdHome size={25} />Home</Link></li>
                    <li><Link to='/instructors'><FaUserGraduate size={20} />Instructors</Link></li>
                    <li><Link to='/classes'><SiGoogleclassroom size={20} />Classes</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;