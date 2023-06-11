import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
                navigate(from, { replace: true });
            })
    }

    return (
        <>
            <Helmet>
                <title>DFA | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Link to='/'>
                            <img src="dreamweaver.png" alt="" />
                        </Link>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="mx-auto text-5xl text-accent font-bold mb-8">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <SocialLogin></SocialLogin>
                            <div className="form-control mt-6">
                                <input className="btn btn-accent" type="submit" value="Login" />
                            </div>
                            <p className='mt-3'>New To DreamWeavers ? <Link className='btn btn-xs btn-warning btn-outline' to='/register'>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;