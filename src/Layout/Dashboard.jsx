import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaHistory, FaUserGraduate } from "react-icons/fa";
import { SiGoogleclassroom, SiPhpmyadmin } from 'react-icons/si';
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { IoMdCart, IoMdCloudDone, IoMdHome, IoMdSettings } from "react-icons/io";
import { MdLibraryAdd, MdManageAccounts } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <Helmet>
                <title>DFA | Dashboard</title>
            </Helmet>
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
                            <li><Link to='/dashboard/adminhome'><SiPhpmyadmin size={25}/>Admin Home</Link></li>
                            <li><Link to='/dashboard/manageClasses'><IoMdSettings size={20}/>Manage Classes</Link></li>
                            <li><Link to='/dashboard/manageusers'><MdManageAccounts size={25}/>Manage Users</Link></li>
                            <li><Link to='/dashboard/paymenthistory'><FaHistory size={20}/>Payment History</Link></li>
                        </>
                            : isInstructor ?
                                <>
                                    <li><Link to='/dashboard/userhome'><GiTeacher size={20}/>Instructor Home</Link></li>
                                    <li><Link to='/dashboard/addClass'><MdLibraryAdd size={20}/>Add A Class</Link></li>
                                    <li><Link to='/dashboard/myClasses'><IoMdCloudDone size={20}/>My Classes</Link></li>
                                </> : <>
                                    <li><Link to='/dashboard/mycart'><IoMdCart size={25} />My Selected Class</Link></li>
                                    <li><Link to='/dashboard/userpaymenthistory'><RiSecurePaymentLine size={25} />My Payment History</Link></li>
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