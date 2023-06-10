import SectionTitle from "../../../components/SectionTitle.jsx/SectionTitle";
import useClasses from "../../../hooks/useClasses";
import ClassCard from "../ClassCard/ClassCard";

const PopularClasses = () => {
    const [classes] = useClasses();
    const popular = classes.filter(cls => cls.students >= 125)
    return (
        <div>
            <SectionTitle heading={"Popular Classes"} />

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-4">
                {
                    popular.map(cls => <ClassCard
                        key={cls._id}
                        cls={cls}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;