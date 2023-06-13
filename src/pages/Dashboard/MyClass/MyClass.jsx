import SectionTitle from "../../../components/SectionTitle.jsx/SectionTitle";
import useClasses from "../../../hooks/useClasses";

const MyClass = () => {
    const [classes] = useClasses();
    return (
        <div className="w-full m-4">
            <SectionTitle heading='My Classes'></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Thumbnail</th>
                            <th>Class Name</th>
                            <th>Students</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((cls, index) => <tr
                            key={cls._id}
                            >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{cls.class_name}</td>
                                <td>{cls.students}</td>
                                <td>${cls.price}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;