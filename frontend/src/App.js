import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Explore from './pages/Explore';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <Provider store={store}>
      <Router>
        <div className={`app-container ${theme}`}>
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<LandingPage theme={theme} />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;