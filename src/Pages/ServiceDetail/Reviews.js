import React from 'react';
import { FaStar } from "react-icons/fa";


const Reviews = ({ serviceId, reviewResponse }) => {

    return (
        <div className='ml-2'>
            {
                reviewResponse?.map(singleReview => <div key={singleReview._id} className='bg-base-200 rounded-md px-2 mt-1 mb-2 flex flex-row justify-between items-center'>
                    <small className='text-primary'>{singleReview?.reviewText}</small>
                    <div className='flex flex-row justify-center items-center'>
                        <small>user: {singleReview.userName}</small>
                        <img className='w-2/12 rounded-full ml-1' src={singleReview.photoUrl} alt="" />
                    </div>
                    <small>< FaStar className='text-warning' ></FaStar> Rating : {singleReview.rating || 'not found'}</small>
                </div>
                )
            }

        </div >
    );
};

export default Reviews;