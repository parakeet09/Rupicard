import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Details from './components/pages/Details';

function App() {
  return (
    <>
    <div className='main-page'>
    <Router>
    <video src ="/videos/nxt_wave_bg.mp4" autoPlay loop muted class='css-7k8a4g'/>
      <Navbar />
      <Home />
    </Router>
    </div>
    <div>
    <Details />
    </div>
    
    </>
  );
}

export default App;
