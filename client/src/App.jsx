import SideBar from './Components/SideBar';
import NavBar from './Components/Navbar';
import Restaurant_layout  from './asset/Restaurant_layout.jpg' ;
import Table  from './asset/Table.jpg' ;
import './App.css';

import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.RestImg');
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup function
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); 

  return (
    <>
      <div className="App">
        <SideBar />
        <NavBar />
      </div>

      <div className='RestBag'>   
        <h2 className='Resthead'>Restaurant Layout</h2>
        <div className='RestDiv'>
          <img  src={Restaurant_layout} className='RestImg' alt="restaurant-layout"></img>
          <img  src={Table} className='RestTable'  alt="restaurant-layout"></img>
            
        </div>
        
      </div>
    </>
  );
}

export default App;
