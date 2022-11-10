import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5001/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])

    return (
        <div>
            <div>
                <h2 className="text-xl text-gray-600 font-bold text-center mb-3">You have {myReviews?.length} Reviews</h2>
                <div className='grid gap-6 grid-cols-1 lg:grid-cols-3'>
                    {
                        myReviews.map(review => <MyReviewRow
                            key={review._id}
                            reviewRow={review}
                        // handleDelete={handleDelete}
                        // handleStatusUpdate={handleStatusUpdate}
                        ></MyReviewRow>)
                    }
                </div>
            </div>
        </div >
    );
};

export default MyReviews;