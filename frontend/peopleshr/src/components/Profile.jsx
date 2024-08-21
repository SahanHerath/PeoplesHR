import React, { useState } from 'react';
import ProfileView from './ProfileView'; // The component displaying the user's profile
import EditProfile from './EditProfile'; // The component for editing the profile
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleBackToProfile = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      {isEditing ? (
        <EditProfile userId={localStorage.getItem('userId')} onBackToProfile={handleBackToProfile} />
      ) : (
        <>
          <button onClick={handleEditClick} className="edit-profile-button">Edit Profile</button>
          <ProfileView />
        </>
      )}
    </div>
  );
};

export default Profile;