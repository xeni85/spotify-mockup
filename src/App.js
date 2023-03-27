import axios from 'axios';
import React, { useState} from 'react';
import './App.css';


function App(props) {
  const [data, setData] = useState({});
  const [cityName, setCityName] = useState('');
  const apiKey = 'f303eedcd1191e5a406fabd4f0fb671e'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

  const searchLocation = (event) => {  
    if(event.key === 'Enter') {
      axios.get(url)
      .then(res => {
          setData(res.data);
          console.log(res.data);
        })
        setCityName('');
    }
  }

  return (
    <div className="App">
      <div className='search'>
        <input type='text' value={cityName} onChange={event => setCityName(event.target.value)} onKeyDown={searchLocation} placeholder="Enter City"/>
      </div>
      <div className='container'>
        <div className='upper'>
          <div className='location'>
            <h3>New York</h3>
          </div>
          <div className='weather'>
            <h1>60°F</h1>
          </div>
          <div className='desc'>
            <p>Sunny</p>
          </div>
        </div>
        <div className='lower'>
          <div className='feels-like'>
            <p className='bold'>60°F</p>
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>20%</p>
            <p>humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>12MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

