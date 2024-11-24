import Navbar from "../Components/Navbar/Navbar";
import Image from "next/image";
import './UsedCar.css';
import Footer from "../Components/Footer/Footer";

const UsedCars = () => {
  return (
    <div>
      <Navbar />

      

      <div className="used-car">
        <h1>Toyota Corolla 2021 Price in Pakistan, Images, Reviews & Specs</h1>
        <Image src="/Corolla.png" alt="Toyota Corolla 2021" width={500} height={300} />
        <p>
          Toyota Corolla 2021 offers a blend of reliability, fuel efficiency, and comfortable driving experience.
          Its known for its spacious interior, advanced safety features, and smooth handling, making it a popular choice for daily commuting and family outings.
        </p>
        <div className="price">
          <p>PKR 4,000,000</p>
          <div className="button-row">
            <button>Make Payment</button>
            <button>Request Bank Finance</button>
            <button>Visit Place</button>
            <button>Car Inspection</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UsedCars;