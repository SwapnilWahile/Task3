//import './Page2comp2.css';
import React, { useState } from 'react';
import { IoCloseCircleOutline} from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";

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
       <label style={{font:'14px Lato',width:"46px",height: "24px", left: "348px"}}>From</label>  <label  id ="to" style={{font:'14px Lato',width:"21px",height: "24px", left: "599px"}}>To</label> <br/>
                    <select style={{width:"100px",height: "56px",borderRadius: '8px'}}>  
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
                    <button id="button" ><IoCloseCircleOutline color="#0078D4" /></button> <br/><br/> 
                    
            </div> 
                     
    </div>
  )
}

 



export default function Page3() {

  const[time,setTime]=useState({from:"",to:""});
    const[bolin,setbolin]=useState(true);
    const handleclick = ()=>{
        setbolin(false);
     }
    
  return (<div><div id ="display"><p id="Tlbl" style={{font:'22px Lato'}} >Timings</p><Page5/>{bolin ?
    <div>
     
   <button id="button" onClick={handleclick}><IoAddCircleOutline Add-Timing color="#0078D4" /><u>Add Timings</u></button>
    
   </div>
    : <span>
    <Page4/> <button id="button" onClick={handleclick}><IoAddCircleOutline Add-Timing color="#0078D4" /><u>Add Timings</u></button>
    </span>
    
  }
  </div> 
    </div>
  )
}