import React, {useState, useContext}  from 'react';
import { FaEdit } from "react-icons/fa";
//import {createBrowserRouter} from "react-router-dom";
import Input_Form, {datab, /*AddressContext*/} from './Page2';
import './App.css';

function App(){
  const string = "> Address & Timings";
  //const {address, setaddress} = useContext(AddressContext);
  //const hold = {address, setaddress};
  const [isVisible, setIsVisible] = useState(true);
  const [index, setIndex] = useState();
  const [obj, setObj] = useState(0);

  const handleClick = (i) => {
    
    setIndex(i);
    setObj(datab[i]);
    //console.log(obj.AdressLine1);
    let {AdressLine1,AddressLIne2,phone,email,city,state,zipcode,country} = datab[i];
    console.log({AdressLine1,AddressLIne2,phone,email,city,state,zipcode,country});
    //setaddress({AdressLine1,AddressLIne2,phone,email,city,state,zipcode,country});
    //console.log(address);
    setIsVisible(!isVisible);
  };
  const handleAdd= ()=>{
    setIsVisible(!isVisible);
  } 
  
  return (isVisible ?
  
      <div className='comp'>
        <label id="nav1">Account Settings</label> <label id="nav2">{string}</label>
        <div className="App">
          {
            datab.map((address, i)=>{
              return(<span  key={i}><label id="lb1">Address</label><button id="pg1bt1"onClick={()=>handleClick(i)}><FaEdit/></button><br/><br/>
        
              <section className='page1'> 
              
              {address.AdressLine1}<br/>
              Phone: {address.phone}, Email: {address.email}<br/>
              {address.city}, {address.state}<br/> 
              Zip Code: {address.zipcode}, {address.country}
               
              
              </section><br/><br/>
              <label id="lb1">Timings</label><br/><br/>
               </span>)
            })
          }<br/>
        </div>
        <div className="App">
          <label className='page1'>You can add multiple address & timings</label>
          <button id="pg1bt2" onClick={handleAdd}>Add Address & Timing</button>
        </div>
      </div> 
      : <div>
      <Input_Form  isVisible={isVisible} setIsVisible={setIsVisible} index={index} setIndex={setIndex} obj={obj}/>
      
      </div>
    );
  }


export default App;