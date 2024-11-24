import React from 'react';
import './Featuring.css';
import Image from 'next/image';

const FeaturedCars = () => {
  const cars = [
    {
      name: 'Toyota Corolla',
      price: 'PKR 59.7 - 75.5 lacs',
      Image: '/Corolla.jpeg', 
      reviews: '421 Reviews',
      rating: '★★★★★'
    },
   
    {
        name: 'Honda City',
        price: 'PKR 46.5 - 58.5 lacs',
        Image: '/City.png', 
        reviews: '458 Reviews',
        rating: '★★★★★'
      },
  
      {
        name: 'Honda Civic',
        price: 'PKR 80.6 - 99.0 lacs',
        Image: '/Civic.png',
        reviews: '357 Reviews',
        rating: '★★★★'
      },

    {
      name: 'Totyota Prius',
      price: 'PKR 100.0 - 130.5 lacs',
      Image: '/Prius.jpeg', 
      reviews: '199 Reviews',
      rating: '★★★★'
    },
       
  ];

  return (
    <section className="featured-cars">
      <h2>Featured New Cars</h2>
      <div className="car-slider">
        {cars.map((car, index) => (
          <div className="car-card" key={index}>
            <Image src={car.Image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.price}</p>
            <p>{car.rating} {car.reviews}</p>
          </div>
        ))}
      </div>
      <button className="prev-btn">&#8249;</button>
      <button className="next-btn">&#8250;</button>
    </section>
  );
};

export default FeaturedCars;
