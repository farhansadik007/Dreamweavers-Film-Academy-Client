import { Link } from "react-router-dom";
import { FaHome, FaSun } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { GoSignOut } from 'react-icons/go';
import { MdNightlight } from 'react-icons/md';
import { IoMdCart } from 'react-icons/io';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";

const NavBar = ({ darkmode, dark }) => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link className="text-xl" to='/'><FaHome />Home</Link></li>
        <li><Link className="text-xl" to='/instructors'>Instructors</Link></li>
        <li><Link className="text-xl" to='/classes'>Classes</Link></li>
        <li><Link className="text-xl" to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>Dashboard</Link></li>
        {
            user ? <>
                <div className="btn mx-2">
                    <div className="avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                        <div className=" w-10 rounded-full"><img src={user?.photoURL}/></div>
                    </div>
                </div>
                { isAdmin ? <></> : isInstructor ? <></> :
                <li><Link to='/dashboard/mycart'>
                    <IoMdCart size={33} />
                    <span className="badge badge-accent">+{cart?.length || 0}</span>
                </Link></li>
                }
                <li><Link onClick={handleLogOut} className="text-xl"><GoSignOut />LogOut</Link></li>
            </> : <>
                <li><Link className="text-xl" to='/login'><FiLogIn />Login</Link></li>
            </>
        }
    </>
    return (
        <>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="w-6/12 lg:w-2/12" src="dreamweaver.png" />
                        <p className="text-lg lg:text-2xl font-bold"><span className="text-green-400">DreamWeavers</span> <br /> Film Academy</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end p-6">
                    <button onClick={darkmode} className="btn btn-md rounded-full border-2 border-indigo-500">
                        {
                            dark ? <FaSun /> : <MdNightlight />
                        }
                    </button>
                </div>
            </div>
        </>
    );
};

export default NavBar;