import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeServiceCard from './HomeServiceCard';

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://doctor-service-server-atique-atq.vercel.app/services?size=3`)
            .then(res => res.json())
            .then(data => setServices(data))
    });

    return (
        <div>
            <h3 className='text-green-700 font-bold text-4xl text-center my-12 mt-24 font-sans'> Services for Patient</h3>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3'>
                {
                    services?.map(service => <HomeServiceCard
                        key={service._id}
                        service={service}
                    ></HomeServiceCard>)
                }
            </div>
            <hr className='mt-8' />
            <div className='flex justify-center mt-0'>
                <Link to="/allServices">
                    <input className='btn bg-[#ff6347] hover:bg-green-700 border-0 mt-2 text-center font-serif'
                        type="submit" value="More Services" />
                </Link>
            </div>
        </div>
    );
};

export default HomeServices;