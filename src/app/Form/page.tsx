import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer';
import './Form.css'; 
const Form = () => {
    return(
            <div>
                <Navbar/>
              
            <div className='container-center'>
                   
            
            <h1 className="text-5xl font-semibold text-center uppercase">
                Enter Your Details
            </h1>

            
            <form className="mt-30 flex gap-10 justify-center items-center flex-col border">
                <input type="Name" className="p-5 rounded-5xl w-4/5 border border-red-1200"
                 placeholder="Your Name" />
                 <br/>

                <input type="Contact" className="p-5 rounded-5xl w-4/5 border border-red-1200"
                 placeholder="Contact Numbar" />
                <br/>
                <input type="Vehicle" className="p-5 rounded-5xl w-4/5 border border-red-1200"
                 placeholder="Make / Model" />
                <br/>
                <input type="Payment" className="p-5 rounded-5xl w-4/5 border border-red-1200"
                 placeholder="Mode of Payment" />
                <br/>

                <button className=" py-3 px-7 rounded-lg 
                 bg-blue-500 text-white">Place your order</button>

            </form>
            <br/>
            
            <br/>
            <br/>
            <p>Thank You for reaching us</p>
            </div>
            <div/>
            <div/>
            <br/>
            
            <Footer/>
            </div>
    )    
    }
    

export default Form
