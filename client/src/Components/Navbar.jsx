import React from 'react'
import '../App.css';
import ParkArea from '../asset/Park_Area.jpg';

const Navbar = () => {
  return (
    <div className="Nav">
         <h2 id='Heading'>Parking Management System </h2>    
         <img src={ParkArea} alt='' className='P_Area'/>           
    </div>
  )
}

export default Navbar


