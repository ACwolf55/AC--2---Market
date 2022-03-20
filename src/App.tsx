import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header'
import Market from './Components/Market';
import Auth from './Components/Auth'
import Cart from './Components/Cart'
import CheckOut from './Components/CheckOut';
import {Route, Routes} from 'react-router-dom'
 
function App() {

  
  
  return (
    <div className="App">



      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/CheckOut' element={<CheckOut/>}/>
      </Routes>
 
    </div>
  );
}

export default App;
