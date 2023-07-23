import React from 'react'
import './CarsDetails.css'
import ProsCons from './ProsCons'

const CarsDetails = ({cars}) => {
  return (
    <div className='car-details-flex'>
        <h1 className='modelName'>{cars.model}</h1>
        <div className='detailsCol1'>
            <div className='dcol1'>
                <img className='modelImage' src={cars.image} alt={cars.model} />
            </div>
            <div className='dcol2'>
                <div>
                    <h2 className='price'>{cars.price}</h2>
                </div>
                <div>
                    <table className='carTable'>
                        <tbody>
                            <tr>
                                <td><strong className='table-heading'>Year</strong><br></br><span className='table-subheading'>{cars.year}</span></td>
                                <td><strong className='table-heading'>Fuel Type</strong><br></br><span className='table-subheading'>{cars.fuelType}</span></td>
                                <td><strong className='table-heading'>Acceleration</strong><br></br><span className='table-subheading'>{cars.accelaration}</span></td>
                            </tr>
                            <tr>
                                <td><strong className='table-heading'>Top Speed</strong><br></br><span className='table-subheading'>{cars.topSpeed}</span></td>
                                <td><strong className='table-heading'>Engine</strong><br></br><span className='table-subheading'>{cars.engine}</span></td>
                                <td><strong className='table-heading'>Seating Capacity</strong><br></br><span className='table-subheading'>{cars.seatingCapacity}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className='detailsCol2'>
            <div className='col1'>
                <h3 style={{color:'#1a9df4'}}>Colors</h3>
                <p className='colors-para'>{cars.colors}</p>
                <h3 style={{color:'#1a9df4'}}>Variants</h3>
                <p className='variants-para'>{cars.variants}</p>
                <h3 style={{color:'#1a9df4'}}>Summary</h3>
                <p className='cars-summary'>{cars.summary}</p>
            </div>
            <div className='col2'>
                <div className='pros-cons-icon pros-icon'>
                    <ion-icon name="thumbs-up-outline"></ion-icon><h3>Pros</h3>
                </div>
                <p className='cars-pros'>
                    <ProsCons data={cars.pros} />
                </p>
                <div className='pros-cons-icon cons-icon'>
                    <ion-icon name="thumbs-down-outline"></ion-icon><h3>Cons</h3>
                </div>
                <p className='cars-cons'>
                    <ProsCons data={cars.cons} />
                </p>
            </div>
        </div>
    </div>
  )
}

export default CarsDetails