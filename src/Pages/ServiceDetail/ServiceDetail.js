import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import Reviews from './Reviews';
import useTitle from '../../hooks/useTitle';

const ServiceDetails = () => {
    const services = useLoaderData();
    useTitle('Details');
    const { _id, name, description, price, img } = services;
    const { user } = useContext(AuthContext);
    const [submitReview, setSubmitReview] = useState([]);
    const [reviewResponse, setReviewResponse] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5001/review/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviewResponse(data);
            })
    }, [_id, submitReview]);

    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const reviewText = form.reviewText.value;
        const rating = form.rating?.value || 'not found';
        const photoUrl = user?.photoURL;

        const review = {
            serviceId: _id,
            userName: user?.displayName,
            userEmail: user?.email,
            photoUrl: photoUrl,
            reviewText: reviewText,
            rating: rating,
        }

        fetch('http://localhost:5001/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                setSubmitReview(data);
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review added.', {
                        position: "top-right"
                    });
                    form.reset();
                }
            })
            .catch(er => console.error('error is.........:', er));
    }

    return (
        <div>
            <div className="grid grid-cols-2 gap-4 mx-20">
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
                            <small className='text-gray-500'>{description}</small>
                        </div>

                    </div>
                </div>

                <div>
                    <h3 className='underline underline-offset-4 text-green-500 font-bold text-xl mb-2 text-center'>Review of {name}</h3>
                    {
                        <Reviews
                            serviceId={_id}
                            reviewResponse={reviewResponse}
                        ></Reviews>
                    }
                    <hr />
                    <div className="card-body py-0 mt-2">
                        {
                            user?.email ?
                                <form className='mt-0 pt-0' onSubmit={handleReviewSubmit}>
                                    <div className="form-control">
                                        <textarea type="text" name='reviewText' placeholder="Add a review text" className="input input-bordered mb-2" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="number" name='rating' placeholder="Give a rating point (optional)" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6">
                                        <input className="btn btn-info hover:bg-success" type="submit" value="Submit" />
                                    </div>
                                </form>
                                :
                                <button className='mt-2 text-center font-bold text-warning'>Please
                                    <Link className='text-primary underline' to="/login"> Login </Link> to add a review
                                </button>
                        }

                    </div>

                </div>
            </div>
        </div >
    );
};

export default ServiceDetails;