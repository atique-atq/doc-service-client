import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AllServicesSingleCard = ({ service }) => {
    const { name, description, price, img } = service;
    const images = [img]

    return (
        <div>
            <div className="card w-11/12 glass shadow-2xl ml-5">
                <PhotoProvider>
                    <div className="foo">
                        {images.map((item, index) => (
                            <PhotoView key={index} src={item}>
                                <figure><img className='h-72 w-full' src={item} alt="doctor!" /></figure>
                            </PhotoView>
                        ))}
                    </div>
                </PhotoProvider>
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