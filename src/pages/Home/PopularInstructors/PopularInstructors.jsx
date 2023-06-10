import SectionTitle from "../../../components/SectionTitle.jsx/SectionTitle";
import useInstructors from "../../../hooks/useInstructors";
import InstructorCard from "../InstructorCard/InstructorCard";

const PopularInstructors = () => {
    const [instructors] = useInstructors();
    const popular = instructors.filter(director => director.students >= 50)
    return (
        <div>
            <SectionTitle heading={"Popular Instructors"} />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-4">
                {
                    popular.map(instructor => <InstructorCard
                        key={instructor.id}
                        instructor={instructor}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;