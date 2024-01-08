import React from "react";
import { Link } from "react-router-dom";

 
const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + " ...";
};

const PlaceCard = ({ place }) => {
  const { name, description, imageURL, price, id } = place;

 
  const truncatedDescription = truncateText(description, 30);

  return (
    <Link to={id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
      <img
        src={imageURL}
        alt={name}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-2">{truncatedDescription}</p>
      <div className="flex justify-between items-center">
        <p className="text-blue-500 font-semibold">${price}</p>
         
      </div>
    </Link>
  );
};

export default PlaceCard;
