import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useInstructor from "../../hooks/useInstructor";
import useAdmin from "../../hooks/useAdmin";

const EnrollCard = ({ cls }) => {
    const { _id, image, class_name, info, students, instructor, price } = cls;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();
    const navigate = useNavigate();
    const location = useLocation();

    const handleEnroll = () => {
        if (user && user.email) {
            const cartItem = {classId: _id, class_name, image, instructor, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            icon: 'success',
                            title: 'Added to Cart',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: 'You have to Login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#00CEC9',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}});
                }
            })
        }
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
                <p><span className="badge badge-warning">Available Seats</span> : { }</p>
                <div className="card-actions mt-4">
                    { isAdmin || isInstructor || <button onClick={handleEnroll} className="btn btn-accent btn-outline btn-block">Enroll</button>}
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