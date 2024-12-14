import React, { useState } from 'react';
import './Login.css';
import email_icon from '../../assets/email_icon.png';
import password_icon from '../../assets/password_icon.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="logincontainer">
            <div className="header">
                <div className="text">Sign in</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="Email Icon" />
                    <input type="email" placeholder="Email" />
                </div>

                <div className="input">
                    <img src={password_icon} alt="Password Icon" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>

            <div className="submit-container">
                <div className="submit">Login</div>
            </div>

            <div className="signup-link">
                Don’t have an account? <Link to= '/signup'><span>Sign Up Here!</span></Link>
            </div>
        </div>
    );
};

export default Login;
