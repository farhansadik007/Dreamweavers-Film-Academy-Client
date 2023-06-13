import SectionTitle from '../../components/SectionTitle.jsx/SectionTitle';
import useClasses from '../../hooks/useClasses';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import {MdFeedback} from 'react-icons/md'
import {RxCross1, RxCheck} from 'react-icons/rx'

const ManageClasses = () => {
    const [classes, , refetch] = useClasses();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = cls => {
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
                axiosSecure.delete(`/classes/${cls._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                        }
                    })
            }
        })
    }
    return (
        <div className='w-full p-12'>
            <SectionTitle heading='Manage Classes' />
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Thumbnail</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Post</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((cls, index) => <tr
                                key={cls.id}
                            >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cls.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{cls.class_name}</td>
                                <td>{cls.instructor}</td>
                                <td>
                                    <button className="btn btn-circle btn-ghost bg-green-500 mx-2 text-black"><RxCheck size={30}/></button>
                                    <button className="btn btn-circle btn-ghost bg-red-500 mx-2 text-black"><RxCross1 size={30}/></button>
                                    <button className="btn btn-circle btn-ghost bg-slate-600 mx-2"><MdFeedback size={30}/></button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(cls)} className="btn btn-ghost btn-xs bg-red-600">delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;