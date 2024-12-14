import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Explore from './pages/Explore';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';

const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    // Apply theme to body
    document.body.className = theme; // Set class directly on body
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    
    <Router>
      <div className={`app-container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} /> {/* Navbar component */}
        
        <Routes>
          <Route exact path="/" element={<LandingPage theme={theme} />}/>
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
