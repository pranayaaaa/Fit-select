import { useState } from 'react';
import './App.css';
import data from './data';
import Tours from './Components/Tours';

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
