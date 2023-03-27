import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login';

function App() {
  useEffect(() => {
    const hash = window.location.hash
    if(hash){
      const token = hash.su
    }
  }, [])
  
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
