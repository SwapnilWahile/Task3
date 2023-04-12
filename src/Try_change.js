import React, {useState, useContext}  from 'react';
import { FaEdit } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import {datab} from './Page2';
//import './App.css';
import './alternate.css';

function Page1({setIndex, data, setObj, index, setIsVisible, isVisible}){
  const string = "> Address & Timings";
  //const [index, setIndex] = useState();
  const handleClick = (i) => {
    
    setIndex(i);
    console.log(i);
    setObj(data[i]);
    setIsVisible(!isVisible);
    let {AdressLine1,AddressLIne2,phone,email,city,state,zipcode,country} = datab[i];
    console.log({AdressLine1,AddressLIne2,phone,email,city,state,zipcode,country});
  };

  
  return (
      <div className='comp'>
        <div className='Header'><label id="nav1">Account Settings</label> <label id="nav2">{string}</label></div>
        <div className="App">
          {
            data.map((address, i)=>{
              return(<span  key={i}><label id="lb1">Address</label><Link to="/Page2" ><button id="pg1bt1" onClick={()=>handleClick(i)} ><FaEdit/></button></Link><br/><br/>
        
              <section className='page1'> 
              
              {address.AdressLine1}<br/>
              Phone: {address.phone}, Email: {address.email}<br/>
              {address.city}, {address.state}<br/> 
              Zip Code: {address.zipcode}, {address.country}
               
              
              </section><br/><br/>
              <label id="lb2">Timings</label><br/><br/>
              <section id="time" ></section>
               </span>)
            })
          }<br/>
        </div>
        <div className="App2">
          <label id='div2lbl'>You can add multiple address & timings</label>
          <Link to="/Page2" ><button id="pg1bt2" >Add Address & Timing</button></Link>
          <Outlet />
          
        </div>
      </div> 
    );
  }


export default Page1;