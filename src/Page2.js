import { Link } from "react-router-dom";
import "./Page2.css";
import React, { useState } from "react";
import { IoCloseCircleOutline} from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";

function Input_Form({
  isVisible,
  setIsVisible,
  setData,
  data,
  obj,
  index,
  setObj,
  setIndex
}) {
  console.log(obj);
  const[time,setTime]=useState({Fromh:"", Fromm:"", Toh:"", Tom:""});
  const[bolin,setbolin]=useState(true);
  const handleclick = ()=>{
      setbolin(false);
   }
  const [country1,setcountry] = useState(["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]);
  const [address, setaddress] = useState(obj);
  const {AdressLine1,AddressLIne2,phone,email,city,state,zipcode,country,} = address;

  const handlechange = (e) => {
    setaddress({ ...address, [e.target.name]: e.target.value });
  };

  function update(){
    let hold =  [...data];
    hold.splice(index,1,{AdressLine1,AddressLIne2,phone,email,city,state,zipcode,country,
    times: [{From:'11:00', To:'1:00'}, {From:'2:00', To:'4:00'}]});
    setData(hold);
    setObj({AdressLine1: "",AddressLIne2: "",phone: "",email: "",city: "",state: "",zipcode: "",country: "",time: []});
    setIndex(0);
    setIsVisible(!isVisible);
  }
function Cancel(){
  setIsVisible(!isVisible);
  setObj({AdressLine1: "",AddressLIne2: "",phone: "",email: "",city: "",state: "",zipcode: "",country: "",time: []});
}

  function saveData() {
    console.log(address.times);
    address.times.push(time);
    // setaddress({...address, address.times })
    setData([...data,{AdressLine1,AddressLIne2,phone,email,city,state,zipcode,country,
      times: [{From:'11:00', To:'1:00'}, {From:'2:00', To:'4:00'}]},
    ]);
    
  }
  function Page5() {
    const[array,setarray]=useState([]);
    const [time,settime]=useState({from:"",to:""});
    const selects =(e)=>
    {
      console.log(e.target.value)
      console.log(e.target.id)
      settime({...time,[e.target.id]:e.target.value});
    }
  
    const [hourarray,sethourarray]=useState([]);
    for(let i=0;i<=12;i++)
    {
      hourarray.push(i)
    }
   const [minutearray,setminutearray]=useState([]);
     for(let i=0;i<=60;i++)
     {
       minutearray.push(i)
     }
  console.log(time)
   return (
  <div>
  
     <div  className="leftside" >
        <label style={{font:'14px Lato',width:"46px",height: "24px", left: "348px"}}>From</label>  <label  id ="to" style={{font:'14px Lato',width:"21px",height: "24px", left: "599px"}}>To</label> <br/>
                     <select  onChange={e=>selects(e)} style={{width:"80px",height: "56px",borderRadius: '8px'  }}>  
                     {
                           hourarray.map((info) => { 
                                   return(
                                     <option  id="from" value={info}>{info}</option>
                                   )
                                   }
                             )
                       }
                     </select>{' '}
                     <select onChange={e=>selects(e)} style={{width:"80px",height: "56px",borderRadius: '8px'}}> 
                     {
                             minutearray.map((info) => { 
                                   return(
                                     <option  name="from" value={info}>{info}</option>
                                   )
                                   }
                             )
                       }
                     </select>{" "}
                     
                       <select onChange={e=>selects(e)} id="mar" style={{width:"80px",height: "56px" ,borderRadius: '8px' }}>  
                         {
                               hourarray.map((info) => { 
                                       return(
                                         <option  name="to" value={info}>{info}</option>
                                       )
                                       }
                                 )
                           }
                         </select>{' '}
                         
                     <select  onChange={e=>selects(e)} style={{width:"80px",height: "56px",borderRadius: '8px'}}> 
                     {
                             minutearray.map((info) => { 
                                   return(
                                     <option  name="to" value={info}>{info}</option>
                                   )
                                   }
                             )
                       }
                     </select>{' '}
  
                      <br/><br/>  
             </div> 
                      
     </div>
   )
  }
  function Page4() {

    const [hourarray,sethourarray]=useState([]);
    for(let i=0;i<=12;i++)
    {
      hourarray.push(i)
    }
   const [minutearray,setminutearray]=useState([]);
     for(let i=0;i<=60;i++)
     {
       minutearray.push(i)
     }
   return (
 <div>
 
     <div  className="leftside" >
     <label id="from">From</label>  <label  id ="to" >To</label> <br/>
                     <select id="select">  
                     {
                           hourarray.map((info) => { 
                                   return(
                                     <option value={info}>{info}</option>
                                   )
                                   }
                             )
                       }
                     </select>{' '}
                     <select  name="fromm"  style={{width:"100px",height: "56px",borderRadius: '8px' ,marginLeft:"16px"}}> 
                     {
                             minutearray.map((info) => { 
                                   return(
                                     <option value={info}>{info}</option>
                                   )
                                   }
                             )
                       }
                     </select>{" "}
                     
                       <select  id="mar" style={{width:"100px",height: "56px" ,borderRadius: '8px' }}>  
                         {
                               hourarray.map((info) => { 
                                       return(
                                         <option value={info}>{info}</option>
                                       )
                                       }
                                 )
                           }
                         </select>{' '}
                         
                     <select style={{width:"100px",height: "56px",borderRadius: '8px'}}> 
                     {
                             minutearray.map((info) => { 
                                   return(
                                     <option value={info}>{info}</option>
                                   )
                                   }
                             )
                       }
                     </select>{' '}
                   
                     
             </div> 
                      
     </div>
   )
 }

  
  return (
    <div>
      <div className="rectangle">
        <span className="address">Address</span>
        <div className="outer">
          <div className="gridcontainer">
            <>
              <p className="leftside">
                <label className="required">Address Line 1</label>
                <input
                  type="text"
                  className="inputfields"
                  name="AdressLine1"
                  onChange={handlechange}
                  value={address.AdressLine1}
                />
                <>
                  <label className="required">Phone</label>{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="phone"
                    onChange={handlechange}
                    value={address.phone}
                  />
                </>
                <>
                  <label className="required">City</label>{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="city"
                    onChange={handlechange}
                    value={address.city}
                  />
                </>
                <>
                  <label className="required">Zip Code</label>{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="zipcode"
                    onChange={handlechange}
                    value={address.zipcode}
                  />
                </>
              </p>
            </>
            <div>
              <p className="leftside">
                <label>Address Line 2</label>
                <input
                  type="text"
                  className="inputfields"
                  name="AddressLIne2"
                  onChange={handlechange}
                  value={address.AddressLIne2}
                />
                <>
                  <label>Email</label>{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="email"
                    onChange={handlechange}
                    value={address.email}
                  />
                </>
                <>
                  <label className="required">State / Provience</label>{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="state"
                    onChange={handlechange}
                    value={address.state}
                  />
                </>
                <>
                  <label className="required">Country</label>{" "}
                  <select
                    // id="country"
                    name="country"
                    className="inputfields"
                    onChange={handlechange}
                  >
                    <option>select Country</option>
                    {country1.map((info) => {
                      return (
                        <option name="country" value={info}>
                          {info}
                        </option>
                      );
                    })}
                  </select>
                </>
                <div></div>
              </p>
            </div>
          </div>
          <div><div id ="display"><p id="Tlbl" style={{font:'22px Lato'}} >Timings</p><Page5/>{bolin ?
    <div>
     
   <button id="button" onClick={handleclick}><IoAddCircleOutline Add-Timing color="#0078D4" /><u>Add Timings</u></button>
    
   </div>
    : <span>
    <Page4/> <button id="button" onClick={handleclick}><IoAddCircleOutline Add-Timing color="#0078D4" /><u>Add Timings</u></button>
    </span>
    
  }
  </div> 
    </div>
         
        </div>
        <div>
          {isVisible ? (
            <Link to="/">
              <button onClick={saveData} className="button">
                Save
              </button>
            </Link>
          ) : (
            <Link to="/">
              <button onClick={update} className="button">
                update
              </button>{" "}
              <button className="button" onClick={Cancel}>
                Cancel
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Input_Form;