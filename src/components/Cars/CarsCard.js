import React, { useState } from 'react'
import './CarsDetails.css';
import CarsDetails from './CarsDetails';

function CarsCard({data}) {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(true);
  };
  const handleClose = () => {
    setShowDetail(false);
  };

  return (
    <li>
      <div className="featured-car-card">
        <figure className="card-banner">
          <img src={data.image} alt={data.model} loading="lazy" width="440" height="300" class="w-100" />
        </figure>

        <div className="card-content">
          <div className="card-title-wrapper">
            <h3 className="h3 card-title">
              <a href={data.image}>{data.model}</a>
            </h3>
            <data class="year" value={data.year}>{data.year}</data>
          </div>

          <ul class="card-list">
            <li class="card-list-item">
              <ion-icon name="people-outline"></ion-icon>
              <span class="card-item-text">{data.seatingCapacity}</span>
            </li>

            <li class="card-list-item">
              <ion-icon name="flash-outline"></ion-icon>
              <span class="card-item-text">{data.fuelType}</span>
            </li>

            <li class="card-list-item">
              <ion-icon name="speedometer-outline"></ion-icon>
              <span class="card-item-text">{data.engine}</span>
            </li>

            <li class="card-list-item">
              <ion-icon name="hardware-chip-outline"></ion-icon>
              <span class="card-item-text">{data.topSpeed}</span>
            </li>
          </ul>

          <div class="card-price-wrapper">
            <p class="card-price"><strong>{data.price}</strong></p>
            <button onClick={handleClick} class="btn">More Details</button>
              {showDetail && 
                <div className='car-details'>
                  <div className='car-flex'>
                    <CarsDetails cars={data} />
                    <button onClick={handleClose} className='closeButton'><ion-icon name="close-circle-outline"></ion-icon></button>
                  </div>
                </div>
              } 
          </div>
        </div>
      </div>
    </li>
  )
}

export default CarsCard