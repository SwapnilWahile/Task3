import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useContext}  from 'react';
//import App from './App';
import Page1 from './Try_change';
import Input_Form from './Page2';
import Blank from './Blank';
import './index.css';

export default function App() {
  const [index, setIndex] = useState();
  const [isVisible, setIsVisible] = useState(true);
  const [obj, setObj] = useState({
    AdressLine1: "",
    AddressLIne2: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    times: []
  });
  const [data, setData] = useState([
    {
      AdressLine1: "1395 Park Avenue",
      AddressLIne2: "",
      phone: "+1442918940",
      email: "hawk90@gmail.com",
      city: "sacramento",
      state: "California",
      zipcode: "95814",
      country: "United states",
      times: [{Fromh:'9', Fromm:'30', Toh:'13', Tom:'00'}, {Fromh:'17', Fromm:'30', Toh:'21', Tom:'00'}]
    },
  ]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blank />}>
          <Route index element={<Page1 setIndex={setIndex} data={data} index={index} setObj={setObj} setIsVisible={setIsVisible} isVisible={isVisible} />} />
          <Route path="Page2" element={<Input_Form setIndex={setIndex} index={index} data={data}  setData={setData} obj={obj} setObj={setObj} setIsVisible={setIsVisible} isVisible={isVisible}/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/
