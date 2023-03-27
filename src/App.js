import axios from 'axios';
import React, { useState} from 'react';
import './App.css';


function App(props) {
  const apiKey = '6eef24d70a4c050c9ff00bf562fe4d4e'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  return (
    <div className="App">

    </div>
  );
}

export default App;

