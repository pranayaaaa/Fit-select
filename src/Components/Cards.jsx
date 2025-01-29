import React, { useState } from "react";

function Cards({ id, price, info, image, name, removeTour, handleInterested }) {
  const [readMore, setReadmore] = useState(false);

  function readMoreHandler() {
    setReadmore(!readMore);
  }

  const handleInterestClick = () => {
    handleInterested(id);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover transition-transform duration-300 transform hover:scale-105"
      />

      <div className="p-4">
        <h4 className="text-2xl font-semibold text-gray-800">{price}</h4>
        <h4 className="text-xl font-medium text-gray-700 mt-2">{name}</h4>
        
        <p className="text-gray-600 mt-4">
          {readMore ? info : `${info?.substring(0, 20)}...`}
          <span
            className="text-blue-500 cursor-pointer ml-2 hover:underline"
            onClick={readMoreHandler}
          >
            {readMore ? "Show Less" : "Read More"}
          </span>
        </p>
      </div>

      <div className="p-4 flex justify-between items-center bg-gray-50">
        <button
          onClick={handleInterestClick}
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
        >
          Interested
        </button>
        <button
          onClick={() => removeTour(id)}
          className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Cards;