import React, { useState, useEffect } from 'react'
import CarsCard from './CarsCard'
import axios from 'axios';

function Cars() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('https://automobile-backend.onrender.com/cars');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section className="section featured-car" id="featured-car">
        <div className="container">

          <div className="title-wrapper">
            <h2 className="h2 section-title">Featured cars</h2>
          </div>

          <ul className="featured-car-list">
            {data ? ( data.map((user) => (
              <CarsCard data={user} />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </ul>
        </div>
    </section>
  )
}

export default Cars
