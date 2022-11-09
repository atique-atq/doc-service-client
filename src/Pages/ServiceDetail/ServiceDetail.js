import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const services = useLoaderData();
    const { name, description, price, img } = services;
    return (
        <div>
            <div class="grid grid-cols-2 gap-4 mx-20">
                <div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='flex flex-col justify-center text-gray-500 font-semibold'>
                            <img src={img} className='w-11/12' alt="" />
                            <p>Service Name: {name}</p>
                            <p>Fee: {price}</p>

                        </div>
                        <div>
                            <h3 className='underline underline-offset-4 text-green-500 font-bold text-xl mb-2'>
                                Service Detail</h3>
                            <p className='text-gray-500 text-sm'>{description}</p>
                        </div>

                    </div>
                </div>

                <div>Review Section</div>
            </div>
        </div >
    );
};

export default ServiceDetails;