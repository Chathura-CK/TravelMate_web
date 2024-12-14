import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [role, setRole] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [additionalPhoto, setAdditionalPhoto] = useState(null);

  const handleProfilePhotoChange = (e) => {
    setProfilePhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handleAdditionalPhotoChange = (e) => {
    setAdditionalPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const renderRoleSpecificFields = () => {
    switch (role) {
      case 'Tourist':
        return (
          <>
            <div className="input">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="input">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="input">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <input type="password" placeholder="Password" />
            </div>
            <div className="input">
              <input type="password" placeholder="Retype Password" />
            </div>
            <div className="input">
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="input">
              <input type="text" placeholder="Passport ID" />
            </div>
            <div className="input">
              <label>Upload Profile Photo:</label>
              <input type="file" onChange={handleProfilePhotoChange} />
            </div>
          </>
        );
      case 'Tourist Guide':
        return (
          <>
            <div className="input">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="input">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="input">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <input type="password" placeholder="Password" />
            </div>
            <div className="input">
              <input type="password" placeholder="Retype Password" />
            </div>
            <div className="input">
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="input">
              <input type="text" placeholder="NIC" />
            </div>
            <div className="input">
              <label>Upload Profile Photo:</label>
              <input type="file" onChange={handleProfilePhotoChange} />
            </div>
            <div className="input">
              <label>Upload Tourist Guide License Photo:</label>
              <input type="file" onChange={handleAdditionalPhotoChange} />
            </div>
          </>
        );
      case 'Event Manager':
        return (
          <>
            <div className="input">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="input">
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="input">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <input type="password" placeholder="Password" />
            </div>
            <div className="input">
              <input type="password" placeholder="Retype Password" />
            </div>
            <div className="input">
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="input">
              <input type="text" placeholder="NIC" />
            </div>
            <div className="input">
              <label>Upload Profile Photo:</label>
              <input type="file" onChange={handleProfilePhotoChange} />
            </div>
            <div className="input">
              <label>Upload NIC Photos (Both Sides):</label>
              <input type="file" onChange={handleAdditionalPhotoChange} />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className='signupcontainer'>
      <div className="header">
        <div className="text">Let's begin your journey</div>
        <div className="underline"></div>
      </div>
      {!role ? (
        <div className="role-selector">
          <button onClick={() => setRole('Tourist')}>Tourist</button>
          <button onClick={() => setRole('Tourist Guide')}>Tourist Guide</button>
          <button onClick={() => setRole('Event Manager')}>Event Manager</button>
        </div>
      ) : (
        <>
          <div className="inputs">
            {renderRoleSpecificFields()}
            {profilePhoto && <img src={profilePhoto} alt="Profile Preview" className="photo-preview" />}
            {additionalPhoto && <img src={additionalPhoto} alt="Additional Preview" className="photo-preview" />}
          </div>
          <div className="submit-container">
            <div className="submit">Sign Up</div>
          </div>
        </>
      )}
      <div className="already-account">
        Already have an account? <Link to= "/login"><span  style={{ color: 'blueviolet', cursor: 'pointer' }}>Log in</span></Link>
      </div>
    </div>
  );
};

export default Signup;
