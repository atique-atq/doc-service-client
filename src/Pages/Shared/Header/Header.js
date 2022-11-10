import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.JPG';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuItems = <>
        <li className='font-bold text-cyan-600 ml-3'><Link to='/'>Home</Link></li>
        <li className='font-bold text-cyan-600 ml-3'><Link to='/allServices'>Services</Link></li>
        <li className='font-bold text-cyan-600 ml-3'><Link to='/blog'>Blog</Link></li>
        {
            user?.email ?
                <>

                    <li className='font-bold  text-cyan-600 ml-3'>
                        <Link to='/myReview'>My Reviews</Link>
                    </li>
                    <li className='font-bold  text-cyan-600 ml-3'>
                        <Link to='/addService'>Add service</Link>
                    </li>
                    <li className='font-bold'>
                        <button onClick={handleLogOut} className='btn-ghost text-gray-500 ml-4'>Sign Out</button>
                    </li>
                    <li className='font-semibold'>
                        <button className='btn bg-white border-0 hover:bg-green-200 text-gray-500' title={user?.displayName}> <small> user:</small>
                            <div className='avatar'>
                                <div className="w-8 rounded-full">
                                    {
                                        user?.photoURL ? <img src={user?.photoURL} alt="" /> : <FaUser className='mx-1 mt-2'></FaUser>
                                    }

                                </div>

                            </div>
                        </button>
                    </li>
                </>
                :
                <li className='font-bold text-cyan-600 lg:ml-10'><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className='w-44' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/appointment'><button className="btn btn-outline btn-success">Appointment</button></Link>
            </div>
        </div>
    );
};

export default Header;