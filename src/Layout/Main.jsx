import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import { useState } from "react";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Main = () => {
    const [dark, setDark] = useState(true);
    const location = useLocation();
    const onlyBody = location.pathname.includes('login');

    const darkmode = () => {
        if (dark) setDark(false);
        else setDark(true);
    }


    return (
        <div data-theme={dark ? 'dark' : 'light'}>
            {onlyBody || <NavBar darkmode={darkmode} dark={dark}></NavBar>}
            <Outlet></Outlet>
            {onlyBody || <Footer></Footer>}
        </div>
    );
};

export default Main;