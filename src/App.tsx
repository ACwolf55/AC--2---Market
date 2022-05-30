import React, {useState} from 'react';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart'
import CheckOut from './Components/CheckOut';
import {Route, Routes} from 'react-router-dom'
import Register from './Components/Register';
 
function App() {

  
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/CheckOut' element={<CheckOut/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>

    </div>
  );
}

export default App;
