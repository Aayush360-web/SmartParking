import React from 'react'
import '../App.css';
import { SiderBarData } from './SiderBarData';
import ParkSmart from '../asset/ParkSmart.jpg'

function SideBar() {
  return <div className="Sidebar">
 <img src= {ParkSmart} alt='' className="Logo"/>
      
    
    <ul className="SideBarList">
   
    {SiderBarData.map((val,key)=>{
    return <li key ={key}
      onClick={()=> {window.location.pathname = val.link}}
      className="Row"
      id={window.location.pathname == val.link ?"active": ""}>
            {" "}
            <div id="icon">
                {val.icon}
            </div>
            {" "}
            <div id="title">
                {val.title}
            </div>
              
           </li>;      
    })}
   </ul>
  </div>
}

export default SideBar
