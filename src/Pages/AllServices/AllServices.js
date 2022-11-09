import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServicesSingleCard from './AllServicesSingleCard';

const AllServices = () => {
    const services = useLoaderData();

    return (
        <div>
            <h3 className='text-green-700 font-bold text-4xl text-center my-8 mt-12
             font-sans underline decoration-slate-200 underline-offset-4'> All Services</h3>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 align-middle content-center place-content-center justify-items-center'>
                {
                    services?.map(service => <AllServicesSingleCard
                        key={service._id}
                        service={service}
                    ></AllServicesSingleCard>)
                }
            </div>

        </div>
    );
};

export default AllServices;