import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = e => {
        e.preventDefault();
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Link to='/'>
                    <img src="dreamweaver.png" alt="" />
                    </Link>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="mx-auto text-5xl text-accent font-bold mb-8">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className='flex flex-col items-center my-4'>
                            <p className='my-4'>OR</p>
                            <button className="btn btn-circle"><FcGoogle size={30} /></button>
                            <p className='mt-2'>Sign In with Google</p>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-accent" type="submit" value="Login" />
                        </div>
                        <p className='mt-3'>New To DreamWeavers ? <Link className='btn btn-xs btn-warning btn-outline' to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;