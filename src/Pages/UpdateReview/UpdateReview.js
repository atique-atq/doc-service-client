import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const UpdateReview = () => {
    const review = useLoaderData()[0];
    console.log('--', review);
    useTitle('Update Reviews');

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const updatedText = form.updatedReview.value;
        console.log('updated text: ', updatedText);
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