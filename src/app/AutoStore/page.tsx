import Navbar from "../Components/Navbar/Navbar"
import Image from "next/image";
import React from 'react';
import './AutoStore.css';
import Footer from "../Components/Footer/Footer";

const AutoStore = () => {
  return (
    <div>
     <Navbar/>
     
    <div className="AutoStore">
      <h1>Auto Store</h1>
      <li>Honda Civic</li>
      <Image src="/Civic.png" alt="Honda Civic" width={500} height={300} />
      <li>Toyota Corolla</li>
      <Image src="/Corolla.jpeg" alt="Toyota Corolla" width={500} height={300}/>
      <li>Honda City</li>
      <Image src="/City.png" alt="Honda City" width={500} height={300}/>
      <li>Toyota Prius</li>
      <Image src="/Prius.jpeg" alt="Toyota Prius" width={500} height={300}/>
      <li>Honda CG-125</li>
      <Image src="/CG-125.jpg" alt="Honda CG-125" width={500} height={300}/>
       
    </div>
    <Footer/> 
    </div>
  );
};

export default AutoStore;
