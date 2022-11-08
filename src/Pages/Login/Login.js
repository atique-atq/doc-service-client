import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import img from '../../assets/images/loginImage.JPG';
import { FaGoogle } from "react-icons/fa";

const Login = () => {

    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;


                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                // get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('genius-token', data.token);
                        navigate(from, { replace: true });
                    });
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="hero w-full my-5 bg-[#F4F4F4] rounded-lg">
            <div className="hero-content flex-col lg:flex-row justify-center">
                <div className="text-center lg:text-left">
                    <img className='w-full m-0' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-12">
                    <h1 className="text-5xl text-center font-bold py-0 my-0">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-info hover:bg-success" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center mb-4'>Don't Have an Account? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                    <hr />

                    <button className="btn btn-outline border-0 btn-success mx-8 mt-3">
                        <span className='px-3 text-orange-600'> <FaGoogle></FaGoogle></span>
                        <span className='text-black'> Login with Google</span></button>
                </div>
            </div>
        </div>
    );
};

export default Login;