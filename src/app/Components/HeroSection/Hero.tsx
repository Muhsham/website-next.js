import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
         
    <section className="hero">
      <div className="hero-content">
        <h2>Sell Your Car on PakWheels and Get the Best Price</h2>

        <div className="option-container">
          <div className="option">
            <h3>Post Your Ad on PakWheels</h3>
            <ul>
              <li>Post your Ad for Free in 3 Easy Steps</li>
              <li>Get Genuine Offers from Verified Buyers</li>
              <li>Sell your car Fast at the Best Price</li>
            </ul>   

            <button>Post Your Ad</button>
          </div>

          <div className="option">
            <h3>Try PakWheels Sell It For Me</h3>
            <ul>
              <li>Dedicated Sales Expert to Sell your Car</li>
              <li>We Bargain for you and share the Best Offer</li>
              <li>We ensure Safe & Secure Transaction</li>
            </ul>   

            <button>Register Your Car</button>

            

          </div>
        </div>
      </div>
      
       <br/>        
       
    </section>

    
  );
};
export default HeroSection;