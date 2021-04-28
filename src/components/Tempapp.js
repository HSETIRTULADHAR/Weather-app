import React, {useState} from 'react';
import './css/style.css';

const Tempapp = () => {
    const [city,setCity] = useState("Biratnagar");
    return (
        <>
            < div className="box">
                <div className="inputData">
                      <input 
                      type="text" 
                      className="inputField"
                      onChange= { (event) => {} }
                      />
                      
                      
                </div>
            
            <div className="info">
               <h2 className="location">
                   <i className="fas fa-street-view" />
                   {city}
               </h2>
               <h1 className="Temp">
                  16.24 Degree Celsius
               </h1>
               <h3 className="tempminmax">
                   Min: 16.24 Degree Celsius | Max: 24 Degree Celsius

               </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave  -three"></div>

        </div>
        </>
    )
}

export default Tempapp;
