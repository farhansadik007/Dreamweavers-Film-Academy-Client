import Carousel from "../Carousel/Carousel";
import { Helmet } from 'react-helmet-async';
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>DFA | Home</title>
            </Helmet>
            <div className="flex max-lg:flex-col items-center lg:p-16">
                <div className="w-1/2">
                    <h3 className="text-3xl lg:text-7xl font-bold text-center my-12"><span className="text-green-400">DreamWeavers</span><br /> Film Academy</h3>
                </div>
                <div className="w-1/2">
                    <img className="rounded-3xl" src="film.jpg" alt="" />
                </div>
            </div>
            <Carousel></Carousel>
            <PopularInstructors></PopularInstructors>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;