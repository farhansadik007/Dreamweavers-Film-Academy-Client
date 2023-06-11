import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = (data, e) => {
        createUser(data.email, data.password)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Register Successful!',
                    showConfirmButton: false,
                    timer: 1500
                })
                e.target.reset();
            })
    }

    return (
        <>
            <Helmet>
                <title>DFA | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <Link to='/'>
                            <img src="dreamweaver.png" alt="" />
                        </Link>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="mx-auto text-5xl text-warning font-bold mb-2">Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />

                                {errors.name && <span className='text-red-500'>Name is required!</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} name="photo" placeholder="photo URL" className="input input-bordered" />


                                {errors.photo && <span className='text-red-500'>Photo URL is required!</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />


                                {errors.email && <span className='text-red-500'>Email is required!</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&*])/
                                })} name="password" placeholder="password" className="input input-bordered" />

                                {errors.password?.type === 'required' && <span className='text-red-500'>Password is required!</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>Password must be 6 characters!</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-500'>Password must have an uppercase, a lowercase, a number and a special character!</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input {...register("confirm_password", {
                                    required: true,
                                    validate: (value) => value === watch("password")
                                })}
                                    type="password" name="confirm_password" placeholder="confirm password" className="input input-bordered" />
                                {errors.confirm_password && <span className='text-red-500'>Password do not match!</span>}
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='my-2'>OR</p>
                                <button className="btn btn-circle"><FcGoogle size={30} /></button>
                            </div>
                            <div className="form-control mt-3">
                                <input className="btn btn-warning" type="submit" value="Register" />
                            </div>
                            <p className='mt-3'>Already DreamWeavers ? <Link className='btn btn-xs btn-accent btn-outline' to='/login'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Register;
