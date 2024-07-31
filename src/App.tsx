import React from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './assets/images/logo.svg';
import './assets/styles/App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <script src="https://kit.fontawesome.com/437cc2230b.js" crossOrigin="anonymous"></script>
        {/* Above script is not working */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        {/* https://devicon.dev/ for programming related icons */}
        <Navbar />
      </header>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/work" Component={Work} />
      </Routes>
      <Footer />
      <div className='cursor-highlight'></div>
    </div>
  );
}

export default App;
