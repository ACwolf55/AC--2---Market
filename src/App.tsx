import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header'
import Market from './Components/Market';
import Auth from './Components/Auth'

function App() {

  
  
  return (
    <div className="App">
      <Header/>
      <main>
        <Market/>
        <Auth/>
      </main>
   
    </div>
  );
}

export default App;
