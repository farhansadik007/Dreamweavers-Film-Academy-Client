import SectionTitle from '../../components/SectionTitle.jsx/SectionTitle';
import useClasses from '../../hooks/useClasses';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

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
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((cls, index) => <tr
                                key={cls.id}
                            >
                                <th>{index + 1}</th>
                                <td>{cls.class_name}</td>
                                <td>{cls.instructor}</td>
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