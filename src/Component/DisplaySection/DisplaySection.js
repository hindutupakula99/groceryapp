import React from 'react';
import mainpicgrocery from "../Assets/mainpicgrocery.jpg"
import "./DisplaySection.css";


const DisplaySection = () => {

    return (
        <div className='mx-[320px] mt-[25px]'>

            <div className='flex gap-[51px]'>

                <div className='display-first-section'>

                    
                <img src={mainpicgrocery} classname='absolute -z-10' alt="" />


             
                   
                </div>
                </div>
                </div>
                
        
    );
};

export default DisplaySection;