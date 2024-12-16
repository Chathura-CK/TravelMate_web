import React from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // Clear user state
    navigate('/'); // Redirect to homepage or login
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={user?.profileImage || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="profile-image"
        />
        <h2>{user?.name || 'Guest User'}</h2>
        <p>{user?.email || 'guest@example.com'}</p>
      </div>
      <div className="profile-actions">
        <button onClick={() => navigate('/my-profile')} className="btn">
          My Profile
        </button>
        <button onClick={handleLogout} className="btn logout-btn">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
