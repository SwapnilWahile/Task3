import { Link } from "react-router-dom";
import "./Page2.css";
import React, { useState } from "react";
import Page3 from "./Page2comp2";

function Input_Form({isVisible,setIsVisible,setData,data,obj,index,setObj,setIndex,}) {

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
    setData([...data,{AdressLine1,AddressLIne2,phone,email,city,state,zipcode,country,
      times: [{From:'11:00', To:'1:00'}, {From:'2:00', To:'4:00'}]},
    ]);
    
  }
  return (
    <div>
      <div className="rectangle">
        <span className="address">Address</span>
        <div className="outer">
          <div className="gridcontainer">
            <div>
              <p className="leftside">
                <label>Address Line 1</label>
                <input
                  type="text"
                  className="inputfields"
                  name="AdressLine1"
                  onChange={handlechange}
                  value={address.AdressLine1}
                />
                <div>
                  <label>Phone</label>{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="phone"
                    onChange={handlechange}
                    value={address.phone}
                  />
                </div>
                <div>
                  City{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="city"
                    onChange={handlechange}
                    value={address.city}
                  />
                </div>
                <div>
                  Zip Code{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="zipcode"
                    onChange={handlechange}
                    value={address.zipcode}
                  />
                </div>
              </p>
            </div>
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
                <div>
                  <label>Email</label>{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="email"
                    onChange={handlechange}
                    value={address.email}
                  />
                </div>
                <div>
                  State/Province{" "}
                  <input
                    type="text"
                    className="inputfields"
                    name="state"
                    onChange={handlechange}
                    value={address.state}
                  />
                </div>
                <div>
                  Country
                  <select
                    id="country"
                    name="country"
                    className="inputfields"
                   
                    onChange={handlechange}
                  >
                    <option>select Country</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Aland Islands">Aland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="Andorra">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bonaire, Sint Eustatius and Saba">
                      Bonaire, Sint Eustatius and Saba
                    </option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">
                      British Indian Ocean Territory
                    </option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos">Cocos (Keeling) Islands</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value=" Congo, Democratic Republic of the Congo">
                      Congo, Democratic Republic of the Congo
                    </option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Curacao">Curacao</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican RepublicDO">
                      Dominican Republic
                    </option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands (Malvinas)">
                      Falkland Islands (Malvinas)
                    </option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">
                      French Southern Territories
                    </option>
                    <option value="GA">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="GreenLand">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernsey">Guernsey</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island and Mcdonald Islands">
                      Heard Island and Mcdonald Islands
                    </option>
                    <option value="Holy See ">
                      Holy See (Vatican City State)
                    </option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordan</option>
                  </select>
                </div>
              </p>
            </div>
          </div>
          <Page3 />
        </div>
        <div>{isVisible? <Link to="/"><button onClick={saveData} className="button">
            Save
          </button></Link> : <Link to="/"><button onClick={update} className="button">
          update
          </button> <button className="button" onClick={Cancel}>Cancel</button></Link>}
        
          
        </div>

      </div>

    </div>
  );
}

export default Input_Form;