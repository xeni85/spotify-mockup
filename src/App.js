import axios from 'axios';
import React, { useState} from 'react';
import './App.css';


function App(props) {
  const apiKey = 'f303eedcd1191e5a406fabd4f0fb671e'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  return (
    <div className="App">
      <div className='container'>
        <div className='upper'>
          <div className='location'>
            <h3>New York</h3>
          </div>
          <div className='weather'>
            <h1>60°F</h1>
          </div>
          <div className='desc'>
            <h1>Sunny</h1>
          </div>
        </div>
        <div className='lower'>
          <div className='feels-like'>
            <p>60°F</p>
          </div>
          <div className='humidity'>
            <p>20%</p>
          </div>
          <div className='wind'>
            <p>12MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

