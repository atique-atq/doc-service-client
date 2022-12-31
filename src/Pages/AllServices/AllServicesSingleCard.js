import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const AllServicesSingleCard = ({ service }) => {
  const { _id, name, description, price, img } = service;
  const images = [img];

  return (
    <div>
      <div className="card h-full w-11/12 glass shadow-2xl ml-5">
        <PhotoProvider>
          <div className="foo">
            {images.map((item, index) => (
              <PhotoView key={index} src={item}>
                <figure>
                  <img className="h-72 w-full" src={item} alt="doctor!" />
                </figure>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0, 99) + "..."}</p>
          <p className="font-bold text-gray-500">Fee: {price}</p>
          <Link to={`/service/${_id}`} className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllServicesSingleCard;
