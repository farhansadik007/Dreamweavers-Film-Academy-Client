
const InstructorCard = ({ instructor }) => {
    const { name, students, photo, films } = instructor;
    return (
        <div className="card w-9/12 bg-base-100 shadow-xl">
            <figure><img src={photo} className="rounded-xl" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-error badge-outline">Director</div>
                </h2>
                <p>Enrolled: {students}</p>
                <div className="card-actions justify-center">
                    {
                        films.map(movie => <div key={movie} className="badge badge-outline">{movie}</div>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;