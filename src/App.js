import React, { useEffect} from 'react';
import './App.css';


function App(props) {

  return (
    <div className="App">
      {urlToken ? <Body /> : <Login />}
    </div>
  );
}

export default App;

/*We have used an useEffect block so that the set of code runs only once the page is loaded.
We have used the getTokenFromUrl function which we made in our Spotify Configuration file.
For security purposes, we reset the URL bar to NOT show the access token so that only the app knows the access token. It’s always a good practice to hide access tokens.
We are setting the state with the token in it. Then while rendering, we are checking if a token exists, if one exists, that means the user is logged in and should be shown a player, which we will make soon, or else the person should see the login screen.*/