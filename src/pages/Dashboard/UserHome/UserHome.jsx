import { motion } from "framer-motion";

const UserHome = () => {
    return (
        <div className="flex items-center">
            <div>

                <span className="loading loading-infinity loading-lg"></span>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}

            >

                <h2 className="max-sm:text-4xl text-5xl m-6">Nothing Here!</h2>
            </motion.div>
            <div>

                <span className="loading loading-infinity loading-lg"></span>
            </div>
        </div>
    );
};

export default UserHome;