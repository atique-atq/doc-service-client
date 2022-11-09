import React from 'react';

const AllServicesSingleCard = ({ service }) => {
    const { name, description, price, img } = service;
    return (
        <div>
            <div className="card w-11/12 glass shadow-2xl ml-5">
                <figure><img className='h-72 w-full' src={img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServicesSingleCard;