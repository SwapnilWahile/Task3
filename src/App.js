import React, {useState}  from 'react';
import { FaEdit } from "react-icons/fa";
import Input_Form, {datab} from './Page2';
import './App.css';

function App(){
  const string = "> Address & Timings";
  const address = datab[0];
  //const [address, setAddress] = useState({Address:"1395 Park Avenue", Phone: "+1442918940", Email: "hawk90@gmail.com", City:"sacramento", State:"California", Zipcode:"95814", Country:"United states"});
  const [time, setTime] = useState({From:"9:30", To:"13:00"});
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    setIsVisible(!isVisible);
  }; 
  
  return (isVisible ?
      <div className='comp'>
        <label id="nav1">Account Settings</label> <label id="nav2">{string}</label>
        <div className="App">
        <label id="lb1">Address</label><button id="pg1bt1"onClick={handleClick}><FaEdit/></button><br/><br/>
        <section className='page1'> {address.AdressLine1}<br/>
        Phone: {address.phone}, Email: {address.email}<br/>
        {address.city}, {address.state}<br/> 
        Zip Code: {address.zipcode}, {address.country}
        </section><br/><br/>
        <label id="lb1">Timings</label><br/><br/>
        <section>{time.From} to {time.To}</section>
        </div>
        <div className="App">
          <label className='page1'>You can add multiple address & timings</label>
          <button id="pg1bt2" onClick={handleClick}>Add Address & Timing</button>
        </div>
      </div>
      :<Input_Form  isVisible={isVisible} setIsVisible={setIsVisible} />
    );
  }


export default App;
