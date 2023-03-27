import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { UrlToken } from './utils/spotifyAPI';
function App() {

  //create State for the access token
  const [token, setToken] = useState();


  useEffect(() => {

    //get the access token
    const hash = UrlToken();

    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      setToken(_token);
    }

    console.log("token",token)
  }, [])
  
  return (
    <div className="App">
      {token ? <h1>Logged in</h1> : <Login />}
    </div>
  );
}

export default App;
