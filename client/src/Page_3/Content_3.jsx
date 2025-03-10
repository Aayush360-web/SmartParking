import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./App3.css";
import Parkgif from '../asset/Parking.gif'



export const Content_3 = () => {

  const [user, setUser] = useState({
    Name: "", CarNo: "", ParSlot: "", Time: "", PhoneNo: "",VehicleType: "",
  });

  const [entryCount, setEntryCount] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (entryCount >= 3) {
      alert("Maximum entry limit reached!");
      return;
    }

    console.log(user);
     
     
    // posting data in database
    try {

      const response = await fetch('http://localhost:2001/api/auth/NewSpot', {

        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(user),

      });
      console.log(response);
      setEntryCount(entryCount + 1);

    } catch (error) {
      console.log("register", error)
    }
  };


  return (
    <>
          <div className="Nav">
        <h2 id='Heading'>Parking Management System </h2>
        <div>
          <section>
            <div className='Container'>
              <div className='CreateNewSlots-content'>
                <div className='CreateNewSlots-form'>
                  <h2 className='form-title'>Customer Information</h2>
                  <form onSubmit={handleSubmit} className='Fill-form' id='Fill-form'>

                    <div className='Form-group'>
                      <label htmlFor='Name'>
                        <i className='Form-Name'></i>
                      </label>

                      <input type='text' name='Name' id='Name'
                        value={user.Name}
                        onChange={handleInput}
                        placeholder='Customer Name' />

                    </div>

                    <div className='Form-group'>
                      <label htmlFor='CarNo'>
                        <i className='Form-Car'></i>
                      </label>
                      <input type='text' name='CarNo' id='CarNo'
                        value={user.CarNo}
                        onChange={handleInput}
                        placeholder='Customer Car number' />
                    </div>

                    <div className='Form-group'>
                      <label htmlFor='ParSlot'>
                        <i className='Form-Slot'></i>
                      </label>
                      <input type='text' name='ParSlot' id='ParSlot'
                        value={user.ParSlot}
                        onChange={handleInput}
                        placeholder='Customer Parking slot' />
                    </div>

                    <div className='Form-group'>
                      <label htmlFor='Time'>
                        <i className='Form-Time'></i>
                      </label>
                      <input type='text' name='Time' id='Time'
                        value={user.Time}
                        onChange={handleInput}
                        placeholder='Customer Parking Time' />
                    </div>

                    <div className='Form-group'>
                      <label htmlFor='PhoneNo'>
                        <i className='Form-Phone'></i>
                      </label>
                      <input type='text' name='PhoneNo' id='PhoneNo'
                        value={user.PhoneNo}
                        onChange={handleInput}
                        placeholder='Customer Phone Number' />
                    </div>
                    <div className='Form-group'>
                      <label htmlFor='VehicleType'>
                        <i className='Form-Vehicletype'></i>
                      </label>
                    <input type='text' name='VehicleType' id='Type'
                        value={user.VehicleType}
                        onChange={handleInput}
                        placeholder='Vehicle Type' />
                    </div>

                    <div className='Form-group Form-button'>
                      <button type='submit' name='Submit' id="Submit" className='Formsubmit' value='Add'
                      >Submit</button>
                    </div>
                  </form>
                </div>

                <div className='Form-Image' >
                  <figure>
                    <img src={Parkgif} className='Gif'></img>
                  </figure>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

    </>
  )
}

export default Content_3
