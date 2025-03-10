import React from 'react'
import Parkimg from '../asset/Sur.jpg'
import './App4.css';

const Content4 = () => {

  const redirectToPage = () => {
    // Replace '/target-page' with the desired URL
    window.location.href = 'http://192.168.142.58';
  };


  return (
  <>
    <div className="Nav">
         <h2 id='Heading'>Parking Management System </h2> 
         <img src={Parkimg} alt='' className='P_Area'/> 
    </div>
    <button className = "Button" onClick={redirectToPage}>
  </button>
  </>
  )
}

export default Content4
