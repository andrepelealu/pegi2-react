import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/header/header'
import Main from './components/layout/main/main'
function App() {
  return (
    <div className="container">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
