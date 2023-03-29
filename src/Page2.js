
import React from "react";
import "./Page2.css";
import { useState } from "react";
export let datab =[ {AdressLine1: "prabhat pune",
AddressLIne2: "",
phone: "+1442918940",
email: "hawk90@gmail.com",
city: "sacramento",
state: "California",
zipcode: "95814",
country: "United states",
times: [{From:"7:00", To:"12:00"}, {From:"1:30", To:"7:00"}]}, {AdressLine1: "parvti pune",
AddressLIne2: "",
phone: "+1442918940",
email: "hawk90@gmail.com",
city: "sacramento",
state: "California",
zipcode: "95814",
country: "United states",
times: [{From:"7:00", To:"12:00"}, {From:"1:30", To:"7:00"}]}];

function Input_Form({ isVisible, setIsVisible, index,setIndex ,obj ,count, setCount }) {
  //console.log(JSON.stringify(obj));
  const [data, setData] = useState([])
  const [address,setaddress]=useState({AdressLine1:"",AddressLIne2:"",phone:"",email:"",city:"",state:"",zipcode:"" ,country:"",time:[]});
  //if(index !== null){setaddress(datab[index])}
  const {AdressLine1,AddressLIne2,phone,email,city,state,zipcode,country} = address;
  const handlechange = (e)=>{
    setaddress({...address,[e.target.name]: e.target.value});
  }
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  function consoledata(){
    console.log(address);
  }
  function saveData()
  {
  
   console.log(address);
    //setData([...data,{AdressLine1,AddressLIne2,phone,email,city,state,zipcode,country}]);
    // database = [...database, ...data];
    datab.push({AdressLine1,AddressLIne2,phone,email,city,state,zipcode,country});
    console.log(datab.length)
    setIsVisible(!isVisible);
  }
  return (
    <div>
      <div className="rectangle">
        <span className="address">Address</span>
        <div>
        <div className="gridcontainer">
           <div>
           <p className="leftside">
              <label>Address Line 1</label>
              <input type="text" className="inputfields" name='AdressLine1' onChange={handlechange} value={address.AdressLine1} />
              <span>
                <label>Phone</label>{" "}
                <input type="text" className="inputfields" name="phone"  onChange={handlechange} value={address.phone}/>
              </span>
              <span>
                City <input type="text" className="inputfields"  name="city"  onChange={handlechange} value={address.city} />
              </span>
              <span>
                Zip Code <input type="text" className="inputfields" name="zipcode"  onChange={handlechange} value={address.zipcode}/>
              </span>
            </p>
           </div>
           <div>
            <p className="leftside">
              <label>Address Line 2</label>
              <input type="text" className="inputfields" name="AddressLIne2"  onChange={handlechange} value={address.AddressLIne2}/>
              <span>
                <label>Email</label>{" "}
                <input type="text" className="inputfields" name="email"  onChange={handlechange} value={address.email} />
              </span>
              <span>
                State/Province <input type="text" className="inputfields"  name="state"  onChange={handlechange} value={address.state}/>
              </span>
              <span>
                Country
                <select id="country" name="country" className="inputfields">
                  <option>select country</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AX">Aland Islands</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="BN">Brunei Darussalam</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo</option>
                  <option value="CD">
                    Congo, Democratic Republic of the Congo
                  </option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CI">Cote D'Ivoire</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curacao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands (Malvinas)</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HM">Heard Island and Mcdonald Islands</option>
                  <option value="VA">Holy See (Vatican City State)</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran, Islamic Republic of</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                </select>
              </span>
            </p>
          </div>
          </div>
          


        </div>
        <button onClick={saveData}>Save</button>
        <div>
          {
            data.map((user)=>{
              return (
                <li>{user.AdressLine1}+{user.AddressLIne2}+{user.phone}+ {user.email}+{user.city}+{user.state}
                </li>
           
              )
            })
              
  
          }
      

        </div>

        
      </div>

      <button onClick={handleClick}>back</button>
      <button onClick={consoledata}>console</button>
      <label>{index}</label>
      <label>{obj.AdressLine1}</label>
    </div>
  );
}

export default Input_Form;
