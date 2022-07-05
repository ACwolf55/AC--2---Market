import React from 'react';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart'
import CheckOut from './Components/CheckOut';
import Register from './Components/Register';
import { Route, Routes} from 'react-router-dom'
 
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


