import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const services = useLoaderData();
    const { name, description, price, img } = services;
    const { user } = useContext(AuthContext);

    return (
        <div>
            <div class="grid grid-cols-2 gap-4 mx-20">
                <div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col justify-center text-gray-500 font-semibold'>
                            <img src={img} className='w-11/12' alt="" />
                            <p>{name}</p>
                            <small>Fee: {price}</small>

                        </div>
                        <div>
                            <h3 className='underline underline-offset-4 text-green-500 font-bold text-xl mb-2'>
                                Service Detail</h3>
                            <p className='text-gray-500 text-sm'>{description}</p>
                        </div>

                    </div>
                </div>

                <div>
                    <h3 className='underline underline-offset-4 text-green-500 font-bold text-xl mb-2 text-center'>Review</h3>
                    <form className="card-body">
                        {
                            user?.email ?
                                <div>
                                    <div className="form-control">
                                        <textarea type="text" name='review-text' placeholder=" add a review" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-info hover:bg-success" type="submit">Submit Review</button>
                                    </div>
                                </div>
                                :
                                <p>Please login to add a review</p>
                        }


                    </form>

                </div>
            </div>
        </div >
    );
};

export default ServiceDetails;