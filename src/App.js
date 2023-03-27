import React, { useEffect} from 'react';
import './App.css';
import Login from './pages/Login';
import Player from './pages/Player';
import { reducerCases } from './utils/Constants'
import { useStateProvider } from './utils/StateProvider';


function App() {

  const [{token}, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;
    if(hash){
      const token = hash.substring(1).split('&')[0].split('=')[1];
      dispatch({type:reducerCases.SET_TOKEN, token})
    }
  },[]);
  
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