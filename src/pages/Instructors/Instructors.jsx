import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle.jsx/SectionTitle";
import useInstructors from "../../hooks/useInstructors";
import InstructorCard from "../Home/InstructorCard/InstructorCard";

const Instructors = () => {
    const [instructors] = useInstructors();

    return (
        <div>
            <Helmet>
                <title>DFA | Instructors</title>
            </Helmet>
            <SectionTitle heading={"All Instructors"} />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-4">
                {
                    instructors.map(instructor => <InstructorCard
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;