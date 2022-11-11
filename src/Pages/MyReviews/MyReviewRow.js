import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MyReviewRow = ({ reviewRow, handleDelete }) => {
    const { _id, serviceId, userName, userEmail, reviewText, rating } = reviewRow;
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`https://doctor-service-server-atique-atq.vercel.app/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [serviceId])

    return (
        <div>
            <div className="card bg-base-100 shadow-xl card-text place-content-center">
                <figure><img src={service?.img} className='h-48 w-56' alt="service" /></figure>
                <div className="card-body py-2">
                    <h2 className="card-title text-[#39bff8] font-semibold">{service?.name}</h2>
                    <p>Review: {reviewText}</p>
                    <small>< FaStar className='text-warning' ></FaStar> rating: {rating}</small>
                    <small>Your Name: {userName}</small>
                    <small>Your Email: {userEmail}</small>

                    <div className='flex flex-row justify-between content-center'>
                        <Link to={`/updateReview/${_id}`}><button className="btn btn-outline btn-primary">Edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-secondary">Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyReviewRow;