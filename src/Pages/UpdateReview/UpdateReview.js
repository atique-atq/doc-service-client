import React from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import toast from 'react-hot-toast';

const UpdateReview = () => {
    const review = useLoaderData();
    console.log('here the review is', review);
    useTitle('Update Reviews');

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const updatedText = form.updatedReview.value;
        console.log('updated text: ', updatedText);

        fetch(`http://localhost:5001/review/${review._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ reviewText: updatedText })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('successfully updated', {
                        position: "top-right"
                    });
                }
            })
    }

    return (
        <div className='mx-40 px-22 text-gray-400 bg-base-300 text-center py-20'>
            <p>Your Review: <span className='font-bold'>{review?.reviewText}</span> </p>
            <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control">
                    <input type="text" name='updatedReview' placeholder="Update your review" className="input input-bordered text-black" required />
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-info hover:bg-success" type="submit" value="Update" />
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;