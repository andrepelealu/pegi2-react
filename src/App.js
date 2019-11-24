import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/header/header'
import Main from './components/layout/main/main'
import Recommend from './components/layout/recommendations/'

function App() {
  return (
    <div className="container">
      <Header/>
      <Main/>
      <Recommend/>
    </div>
  );
}

export default App;
