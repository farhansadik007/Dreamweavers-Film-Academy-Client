import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { Link } from "react-router-dom";
import { FcMoneyTransfer } from "react-icons/fc";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Course has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>DFA | My Cart</title>
            </Helmet>
            <>{isAdmin || isInstructor ?
                <>
                    {isAdmin ?
                        <div className="flex justify-center"><h3 className="text-5xl">You Are Admin</h3> </div>
                        : <div className="flex justify-center"><h3 className="text-5xl">You Are Instructor</h3> </div>
                    }
                </>
                :
                <>
                    <div className="uppercase font-semibold h-20 flex justify-evenly">
                        <h3 className="text-3xl">Total Courses: {cart.length}</h3>
                        <h3 className="text-3xl">Total Price: ${total}</h3>
                        {cart.length !== 0 ? 
                            <Link to='/dashboard/payment'><button className="btn btn-lg btn-success"><FcMoneyTransfer size={25}/>PAY</button></Link>
                            :
                            <Link to="/classes">
                            <button>Classes</button>
                            </Link>
                        }
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Thumbnail</th>
                                    <th>Course Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item, index) => <tr
                                        key={item._id}
                                    >
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.class_name}</td>
                                        <td className="text-end">${item.price}</td>
                                        <td>
                                            <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-xs">delete</button>
                                        </td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </>
            }
            </>

        </div>
    );
};

export default MyCart;