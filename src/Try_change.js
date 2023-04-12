import React, {useState, useContext}  from 'react';
import { FaEdit } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import {datab} from './Page2';
//import './App.css';
import './alternate.css';

function Page1({setIndex, data, setObj, index, setIsVisible, isVisible}){
  const string = "> Address & Timings";
  const handleClick = (i) => {
    setIndex(i);
    setObj(data[i]);
    setIsVisible(!isVisible);
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
              <section id="time">{address.times.map((time, i)=> {return (<span>{time.Fromh}:{time.Fromm} to {time.Toh}:{time.Tom} {i!== address.times.length-1 ? <>&</> : '' } </span>) })}</section>
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