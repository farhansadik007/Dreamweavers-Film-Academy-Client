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

            <div className="grid justify-items-center gap-4 my-36">
                <h2 className="text-2xl lg:text-9xl flex">What is a Film<span className="text-red-500">?</span></h2>

                <p className="w-10/12 lg:w-6/12 lg:text-2xl mt-12">A <span className="text-red-500">film</span> also called a movie, motion picture, moving picture, picture, photoplay or (slang) flick – is a work of visual art that simulates experiences and otherwise communicates ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images. These images are generally accompanied by sound and, more rarely, other sensory stimulations. The word &quot;cinema&quot;, short for cinematography, is often used to refer to filmmaking and the film industry, and to the art form that is the result of it.</p>

                <h2 className="text-5xl lg:text-9xl flex my-36"><span className="text-red-500">!!!</span>Facts<span className="text-red-500">!!!</span></h2>

                <p className="w-9/12 lg:w-6/12 lg:text-2xl">
                    <p className="lg:my-20">The first cinemas were opened in the early <span className="text-red-500">1900s</span>. Before then, films were shown in public halls, theatres or at funfairs!</p>
                    <p className="my-20">The most successful film of all time is thought to be ‘Gone with the Wind.’ Made in 1939, the film has made an estimated <span className="text-red-500">£2.5 billion</span>!</p>
                    <p className="my-20"> The most expensive film ever made is thought to be ‘Pirates of the Caribbean: On Stranger Tides.’ It cost around <span className="text-red-500">£268 million</span>!</p>
                </p>
            </div>
        </div>
    );
};

export default Home;