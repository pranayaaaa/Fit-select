import React, { useState } from 'react';
import Cards from './Cards';

function Tours({ tours, removeTour }) {
  const [interestedCard, setInterestedCard] = useState(null);

  const handleInterested = (id) => {
    setInterestedCard(id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Select Your Product
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours
          .filter((tour) => interestedCard === null || tour.id === interestedCard)
          .map((tour) => (
            <Cards
              key={tour.id}
              {...tour}
              removeTour={removeTour}
              handleInterested={handleInterested}
            />
          ))}
      </div>
    </div>
  );
}

export default Tours;
