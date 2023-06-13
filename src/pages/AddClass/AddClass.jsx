import { useContext } from "react";
import SectionTitle from "../../components/SectionTitle.jsx/SectionTitle";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset} = useForm({
        defaultValues: {
            instructor: user.displayName,
            email: user.email
        }
    });
    const onSubmit = data => {
      const formData = new FormData();  
      formData.append('image', data.image[0]);
      fetch(img_hosting_url, {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(imgResponse => {
        if(imgResponse.success) {
            const imgURL = imgResponse.data.display_url;
            const {class_name, info, instructor, price, seats, email} = data;
            const newClass = {image: imgURL, class_name, info, students: 0, instructor, price: parseFloat(price), seats: parseFloat(seats), email};
            axiosSecure.post('/classes', newClass)
            .then(() => {
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
        }
      })
    };
    return (
        <div className="w-full px-10">
            <SectionTitle heading="Add A Class" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input {...register("class_name", { required: true })} type="text" placeholder="Class Name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-success w-full" />
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Class Info</span>
                    </label>
                    <input {...register("info", { required: true })} type="text" placeholder="Info" className="input input-bordered w-full " />
                </div>

                <div className="flex gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input {...register("instructor")} type="text" defaultValue={user.displayName} className="input input-bordered w-full " disabled/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input {...register("email")} defaultValue={user.email} type="text" className="input input-bordered w-full" disabled/>
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Available Seats</span>
                    </label>
                    <input {...register("seats", { required: true })} type="text" placeholder="Seats" className="input input-bordered w-full " />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input {...register("price", { required: true })} type="text" placeholder="Price" className="input input-bordered w-full " />
                </div>
                <input className="btn btn-wide mt-4" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;