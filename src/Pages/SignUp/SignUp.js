import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/registerImage.jpg';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    useTitle('SignUp')
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirmPassword.value;
        console.log('name: ', name);

        if (password.length < 6) {
            setError('Password should be 6 characters or more.');
            toast.error('Password should be 6 characters or more.');
            return;
        }

        if (password !== confirm) {
            toast.error('Your Password did not match');
            setError('Your Password did not match');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                navigate(from, { replace: true });
                toast.success('Registration Successful', {
                    position: "top-right"
                });
                form.reset();

            })
            .catch(e => {
                toast.error(e.message);
                setError(e.message);
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <>
                {
                    loading &&
                    <div role="status">
                        <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                        </svg>
                        <span>Loading...</span>
                    </div>
                }
            </>
            <div className="hero w-full my-5 rounded-lg">
                <div className="hero-content flex-col lg:flex-row justify-center">
                    <div className="text-center lg:text-left">
                        <img className='w-full m-0  rounded-md' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-6">
                        <h6 className="text-3xl text-center font-bold py-0 my-0 text-green-700">Register/ Sign UP</h6>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="email" name='email' placeholder="your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name='photoUrl' placeholder="your photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="password" name='confirmPassword' placeholder="Confirm password" className="input input-bordered" required />
                            </div>
                            <div className="form-control py-0 my-0">
                                <input className="btn btn-info hover:bg-success" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="text-red-500 font-bold text-center">
                            {error}
                        </p>
                        <p className='text-center mb-2 mt-0'>Already Have an Account? <Link className='text-green-500 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;