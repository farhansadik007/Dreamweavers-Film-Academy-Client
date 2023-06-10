
const ClassCard = ({ cls }) => {
    const { image, class_name, info, students, instructor, price } = cls;
    return (
        <div className="card w-9/12 bg-base-100 shadow-xl">
            <figure><img src={image} className="rounded-xl" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">
                    {class_name}
                    <div className="badge badge-error badge-outline">New</div>
                </h2>
                <p className="text-green-500">{instructor}</p>
                <p className="text-sm">{info}</p>
                <p><span className="badge badge-accent badge-lg">Enrolled</span> : {students}</p>
                <p><span className="badge badge-warning badge-lg">Price</span> : ${price}</p>
            </div>
        </div>
    );
};

export default ClassCard;