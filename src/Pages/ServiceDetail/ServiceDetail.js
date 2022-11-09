import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const ServiceDetails = () => {
    const services = useLoaderData();
    const { _id, name, description, price, img } = services;
    const { user } = useContext(AuthContext);

    //Please store the user info (email, etc.) and service info (service id, etc.) with each review to display the reviews correctly with the relevant service.

    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const reviewText = form.reviewText.value;
        const rating = form.rating?.value || 'no rating point';
        const photoUrl = user?.photoURL || 'no url found';


        const review = {
            serviceId: _id,
            userName: user?.displayName,
            userEmail: user?.email,
            photoUrl: photoUrl,
            serviceName: name,
            reviewText: reviewText,
            rating: rating,
        }
        console.log('review is:', review);

        fetch('http://localhost:5001/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
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
                    <h3 className='underline underline-offset-4 text-green-500 font-bold text-xl mb-2 text-center'>Review</h3>
                    <div className="card-body">
                        {
                            user?.email ?
                                <form onSubmit={handleReviewSubmit}>
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
                                <p>Please login to add a review</p>
                        }


                    </div>

                </div>
            </div>
        </div >
    );
};

export default ServiceDetails;