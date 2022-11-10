import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewRow from './MyReviewRow';

const MyReviews = () => {
    useTitle('My Reviews');
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [refetch, shouldRefetch] = useState([true]);


    useEffect(() => {
        fetch(`http://localhost:5001/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email, refetch])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete');
        if (proceed) {
            fetch(`http://localhost:5001/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    shouldRefetch(!refetch);
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully');
                    }
                })
        }
    }

    return (
        <div>
            {
                (myReviews.length > 0) ?
                    <div>
                        <h2 className="text-xl text-gray-600 font-bold text-center mb-3">You have {myReviews?.length} Reviews</h2>
                        <div className='grid gap-6 grid-cols-1 lg:grid-cols-3'>
                            {
                                myReviews.map(review => <MyReviewRow
                                    key={review._id}
                                    reviewRow={review}
                                    handleDelete={handleDelete}
                                // handleStatusUpdate={handleStatusUpdate}
                                ></MyReviewRow>)
                            }
                        </div>
                    </div>
                    :
                    <div className='bg-red-200 mx-22 h-6/12'>
                        <h1 className='my-auto px-52 py-52 text-2xl font-bold text-center'>No reviews were added</h1>
                    </div>

            }

        </div >
    );
};

export default MyReviews;