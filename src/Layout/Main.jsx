import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import { useState } from "react";


const Main = () => {
    const [dark, setDark] = useState(false);

    const darkmode = () => {
        if (dark) setDark(false);
        else setDark(true);
    }
    return (
        <div data-theme={dark ? 'light' : 'black'}>
            <Outlet></Outlet>
            <button onClick={darkmode} className="btn btn-secondary">toggle</button>
            <Footer></Footer>
        </div>
    );
};

export default Main;