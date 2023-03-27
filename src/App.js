import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import { UrlToken } from './utils/spotifyAPI';
//Once we have the token we can use spotify web-api
import SpotifyWebApi from "spotify-web-api-js";
import Player from './pages/Player';
import { useDataLayerValue } from '.DataLayer'

//create new Spotify object
const spotify = new SpotifyWebApi();

function App() {

  //create State for the access token
  const [token, setToken] = useState();


  useEffect(() => {

    //get the access token
    const hash = UrlToken();

    //reset hash
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
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

/*We have used an useEffect block so that the set of code runs only once the page is loaded.
We have used the getTokenFromUrl function which we made in our Spotify Configuration file.
For security purposes, we reset the URL bar to NOT show the access token so that only the app knows the access token. It’s always a good practice to hide access tokens.
We are setting the state with the token in it. Then while rendering, we are checking if a token exists, if one exists, that means the user is logged in and should be shown a player, which we will make soon, or else the person should see the login screen.*/