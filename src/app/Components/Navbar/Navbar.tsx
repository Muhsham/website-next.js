import Image from "next/image";
import React from "react";
import Link from "next/link";


export default function Navbar () {
   return (
    
    <header>
              
      <Image 
            src="/logo.png" alt="Logo"
            width={350}
            height={50}

            />
        

        <nav>
       
         <Link href="/#">Home</Link>     
      
        <Link href="/NewCar">New Car</Link>
        <Link href="/UsedCars">Used Car</Link>
        <Link href="/Bikes">Bikes</Link>
        <Link href="/AutoStore">Auto Store</Link>
        <Link href="/Form">Book Now</Link>

        <button className="nav-btn nav-close-btn">
          
        </button>
           
      </nav>    
      <button className="nav-btn">
          
      </button>
    </header>
    
  );
}
