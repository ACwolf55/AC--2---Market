import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header'
import Market from './Components/Market';

function App() {

  

  return (
    <div className="App">
      <Header/>
      <Market/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
