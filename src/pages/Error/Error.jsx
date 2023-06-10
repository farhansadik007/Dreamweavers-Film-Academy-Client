import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                <h2 className="text-9xl text-red-400">404</h2>
                <p className="text-4xl text-white">Not Found</p>
                <Link to='/'>
                    <button className="btn hover:bg-green-500 hover:text-black">Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;