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
            <h3>{data.name}</h3>
          </div>
          <div className='weather'>
            {data.main ? <h1>{((data.main.temp - 273) * 1.8 + 32).toFixed()}°F</h1> : null}
          </div>
          <div className='desc'>
            {data.weather ? <p>{data.weather[0].main}</p>: null}
          </div>
        </div>
        <div className='lower'>
          <div className='feels-like'>
          {data.main ? <p className='bold'>{((data.main.feels_like- 273) * 1.8 + 32).toFixed()}°F</p> : null}
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
          {data.main ? <p className='bold'>%{data.main.humidity}</p> : null}
            <p>Humidity</p>
          </div>
          <div className='wind'>
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p>: null}
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

