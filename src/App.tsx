import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Cart from './Components/Cart'
import CheckOut from './Components/CheckOut';
import Register from './Components/Register';
import Orders from './Components/Orders';

 
function App() {
  
  return (
    <div className="App">
  
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/CheckOut' element={<CheckOut/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Orders' element={<Orders/>}/>
      </Routes>

    </div>
  );
}

export default App;


