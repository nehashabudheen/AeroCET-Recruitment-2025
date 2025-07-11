import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Gallery from './components/Gallery';
import Weather from './components/Weather'; 
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="content">
        <h1>
          Welcome to <span className="highlight">AeroCET</span> Recruitment 2025
        </h1>
        <p>Official Aeromodelling Club of College of Engineering, Trivandrum</p>
        <div className="button-group">
          <Link to="/gallery"><button>Task 1 [Gallery]</button></Link>
          <Link to="/weather"><button>Task 2 [Weather]</button></Link> 
        </div>

        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/weather" element={<Weather />} /> 
        </Routes>
      </div>
    </div>
  );
};

export default App;


