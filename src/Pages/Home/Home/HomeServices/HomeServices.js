import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomerServices.css'
import HomeServiceCard from './HomeServiceCard';

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5001/services?size=3`)
            .then(res => res.json())
            .then(data => setServices(data))
    });

    return (
        <div className='home-services-container'>
            <h3 className='text-green-700 font-bold text-4xl text-center my-12 mt-24'> Services for Patient</h3>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3'>
                {
                    services?.map(service => <HomeServiceCard
                        key={service._id}
                        service={service}
                    ></HomeServiceCard>)
                }
            </div>
            <hr className='mt-8 ' />

            <div className='place-content-center w-full'>
                <Link to="/allServices">
                    <input className='btn bg-[rgb(52,203,203)] hover:bg-green-700 border-0 mt-5 text-center'
                        type="submit" value="Show More" />
                </Link>
            </div>
        </div>
    );
};

export default HomeServices;