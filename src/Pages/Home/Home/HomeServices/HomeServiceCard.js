import React from 'react';
import './HomeServiceCard.css'

const HomeServiceCard = ({ service }) => {
    const { name, description, price, img } = service;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl card-text place-content-center">
                <figure><img src={img} className='h-56 w-72' alt="Shoes" /></figure>
                <div className="card-body py-4">
                    <h2 className="card-title text-[#39bff8] font-semibold">{name}</h2>
                    <small className='card-description text-gray-500'>{description.slice(0, 175) + '...'}</small>

                    <div className='flex flex-row justify-between content-center'>
                        <button className="btn btn-ghost">Price: {price}</button>
                        <button className="btn btn-outline btn-primary">Show Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeServiceCard;