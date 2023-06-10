
const EnrollCard = ({ cls }) => {
    const { _id, image, class_name, info, students, instructor, price } = cls;

    const enroll = id => {
        console.log(id);
    }

    return (
        <div className="card card-compact w-10/12 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{class_name}</h2>
                <p className="badge badge-lg badge-accent">{instructor}</p>
                <p>{info}</p>
                <p><span className="badge badge-warning">Enrolled</span> : {students}</p>
                <p><span className="badge badge-warning">Price</span> : {price}</p>
                <p><span className="badge badge-warning">Available Seats</span> : {}</p>
                <div className="card-actions mt-4">
                    <button onClick={() => enroll(_id)} className="btn btn-accent btn-outline btn-block">Enroll</button>
                </div>
            </div>
        </div>
    );
};

export default EnrollCard;

/**
 * ---------
 * TODO
 * ---------
 * 1. available seats
 * 2. integrate enroll button
 */