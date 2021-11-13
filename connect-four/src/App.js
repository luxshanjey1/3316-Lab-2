import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  useEffect(() => {
      document.title = "Connect Four"
  }, [])

  return <Game/> 
}

export default App;
