import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/dropdown';
import './Navbar.css';
import logo_light from '../../assets/logo.png';
import logo_dark from '../../assets/logo.png';
import toggle_light from '../../assets/night_icon.png';
import toggle_dark from '../../assets/day_icon.png';
import defaultProfilePic from '../../assets/sample_profile.jpeg'; // Default profile image
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, setTheme }) => {
  const toggleMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth || {});

  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
      <div className="container-fluid">
        {/* Toggle Button for Responsive Navbar */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img
            src={theme === 'light' ? logo_light : logo_dark}
            alt="Logo"
            className="logo"
          />
        </a>

        {/* Offcanvas */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              TravelMate
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            {/* Navigation Links */}
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link" to="/explore">
                  Explore
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Profile or Sign-In Button */}
        {user ? (
          <div className="profile-dropdown">
            <img
              src={user?.profilePic || defaultProfilePic}
              alt="Profile Pic"
              className="profile-pic"
            />
            <span>{user?.name}</span>
            <div className="dropdown-menu dropdown-menu-end">
              <Link className="dropdown-item" to={`/profile/${user?._id}`}>
                Profile
              </Link>
              <button
                className="dropdown-item"
                onClick={() => dispatch({ type: 'LOGOUT' })}
              >
                Logout
              </button>
            
              
            </div>
            console.log("uuu");
            
          </div>
        ) : (
          !loading && <Link className="buttn" to="/login">Sign In</Link>
        )}

        {/* Theme Toggle Button */}
        <img
          onClick={toggleMode}
          src={theme === 'light' ? toggle_light : toggle_dark}
          alt="Toggle Theme"
          className="toggle-icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
