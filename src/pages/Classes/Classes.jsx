import SectionTitle from "../../components/SectionTitle.jsx/SectionTitle";
import useClasses from "../../hooks/useClasses";
import EnrollCard from "./EnrollCard";

const Classes = () => {
    const [classes] = useClasses();

    return (
        <div>
            <SectionTitle heading={'All Classes'}/>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-8">
                {
                    classes.map(cls => <EnrollCard
                        key={cls._id}
                        cls={cls}
                    ></EnrollCard>)
                }
            </div>
        </div>
    );
};

export default Classes;