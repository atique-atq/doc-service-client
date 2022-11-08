import React from 'react';
import image1 from '../../../assets/images/banner/med-banner/1.jpg';
import image2 from '../../../assets/images/banner/med-banner/2.jpg';
import image3 from '../../../assets/images/banner/med-banner/3.jpg';


const Banner = () => {
    return (
        <div className="carousel carousel-end rounded-box w-full h-3/5 mx-auto">
            <div className="carousel-item">
                <img src={image1} alt="Drink" />
            </div>

            <div className="carousel-item">
                <img src={image2} alt="Drink" />
            </div>
            <div className="carousel-item">
                <img src={image3} alt="Drink" />
            </div>
        </div>
    );
};

export default Banner;