import React from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './assets/images/logo.svg';
import './assets/styles/App.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <script src="https://kit.fontawesome.com/437cc2230b.js" crossOrigin="anonymous"></script> 
      {/* Above script is not working */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      {/* https://devicon.dev/ for programming related icons */}

        <Navbar/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
        <Routes>
          <Route path="/" Component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} /> */}
        </Routes>
    </div>
  );
}

export default App;
