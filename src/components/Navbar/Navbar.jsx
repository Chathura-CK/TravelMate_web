import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/offcanvas'
import 'bootstrap/js/dist/dropdown'
import './Navbar.css';
import logo_light from '../../assets/logo.png';
import logo_dark from '../../assets/logo.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_light from '../../assets/night_icon.png';
import toggle_dark from '../../assets/day_icon.png';

const Navbar = ({ theme, setTheme }) => {
    const toggleMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light'); // Toggle the theme
    };

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
                                <a className="nav-link" href="explore">
                                    Explore
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contact
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="login">
                                    Login
                                </a>
                            </li> */}
                            
                                <a
                                    type="button"
                                    className="btn" 
                                    href="login">
                                    Sign in
                                </a>
                            
                        </ul>

                        {/* Search Box */}
                        {/* <div className="d-flex align-items-center mt-3">
                            <input
                                type="text"
                                className="form-control me-2"
                                placeholder="Search.."
                            />
                            <img
                                src={
                                    theme === 'light'
                                        ? search_icon_light
                                        : search_icon_dark
                                }
                                alt="Search Icon"
                                className="search-icon"
                            />
                        </div> */}
                    </div>
                </div>

                {/* Theme Toggle Button */}
                <img
                    onClick={toggleMode}
                    src={theme === 'light' ? toggle_light : toggle_dark}
                    alt="Toggle Theme"
                    className="toggle-icon ms-auto"
                />

                
            </div>
        </nav>
    );
};

export default Navbar;
