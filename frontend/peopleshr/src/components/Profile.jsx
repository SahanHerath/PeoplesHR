import React, { useEffect, useState } from 'react';
import './Profile.css';
import axios from 'axios';
import defaultProfilePic from '../assets/defaultProfilePic.png'; // Use a placeholder image or user's profile picture

const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Fetch profile data from backend (replace '1' with dynamic user ID)
    axios.get('api/profile/profile/1')
      .then(response => {
        setProfileData(response.data)
        console.error("response.data", response.data);
       })
      .catch(error => console.error('Error fetching profile data', error));
  }, []);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={defaultProfilePic} alt="Profile" className="profile-pic" />
        <h2>{profileData.name}</h2>
        <p>{profileData.position} - {profileData.team}</p>
      </div>

      <div className="profile-info">
        <h3>Basic Information</h3>
        <p><strong>Email:</strong> {profileData.name}</p>
        <p><strong>Email:</strong> {profileData.email}</p>
        <p><strong>Gender:</strong> {profileData.gender}</p>
        <p><strong>Age:</strong> {profileData.age}</p>
        <p><strong>Employee Type:</strong> {profileData.employee_type}</p>
      </div>

      <div className="additional-details-container">
        <div className="additional-details-header" onClick={toggleDetails}>
          <h3>Additional Details</h3>
          <span>{showDetails ? '-' : '+'}</span>
        </div>
        {showDetails && (
          <div className="additional-details">
            <p><strong>Distance to Office:</strong> {profileData.distance_to_office} km</p>
            <p><strong>Medical Condition:</strong> {profileData.medical_description}</p>
            <p><strong>Has Children (below 5-6 years):</strong> {profileData.children_available ? 'Yes' : 'No'}</p>
            <h4>Available Days:</h4>
            <p><strong>Monday:</strong> {profileData.monday ? 'Available' : 'Not Available'}</p>
            <p><strong>Tuesday:</strong> {profileData.tuesday ? 'Available' : 'Not Available'}</p>
            <p><strong>Wednesday:</strong> {profileData.wednesday ? 'Available' : 'Not Available'}</p>
            <p><strong>Thursday:</strong> {profileData.thursday ? 'Available' : 'Not Available'}</p>
            <p><strong>Friday:</strong> {profileData.friday ? 'Available' : 'Not Available'}</p>
            <p><strong>Weekend Preference:</strong> {profileData.weekend_prefer ? 'Available' : 'Not Available'}</p>
            {profileData.weekend_prefer && (
              <>
                <p><strong>Saturday:</strong> {profileData.saturday ? 'Available' : 'Not Available'}</p>
                <p><strong>Sunday:</strong> {profileData.sunday ? 'Available' : 'Not Available'}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
