import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProfileView.css';
import defaultProfilePic from '../assets/defaultProfilePic.png'; // Use a placeholder image or user's profile picture

const ProfileView = () => {
  const [profileData, setProfileData] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    axios.get(`/api/profile/profile/${userId}`)
      .then(response => setProfileData(response.data))
      .catch(error => console.error('Error fetching profile data', error));
  }, []);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="profile-view">
      <div className="profile-header">
        <img src={defaultProfilePic} alt="Profile" className="profile-pic" />
        <h2>{profileData.name}</h2>
        <p>{profileData.position} - {profileData.team}</p>
      </div>

      <div className="profile-info">
        <h3>Basic Information</h3>
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
            <table className="availability-table">
              <tbody>
                <tr><td>Monday:</td><td>{profileData.monday ? '✔️' : '❌'}</td></tr>
                <tr><td>Tuesday:</td><td>{profileData.tuesday ? '✔️' : '❌'}</td></tr>
                <tr><td>Wednesday:</td><td>{profileData.wednesday ? '✔️' : '❌'}</td></tr>
                <tr><td>Thursday:</td><td>{profileData.thursday ? '✔️' : '❌'}</td></tr>
                <tr><td>Friday:</td><td>{profileData.friday ? '✔️' : '❌'}</td></tr>
                <tr><td>Weekend Preference:</td><td>{profileData.weekend_prefer ? '✔️' : '❌'}</td></tr>
                {profileData.weekend_prefer && (
                  <>
                    <tr><td>Saturday:</td><td>{profileData.saturday ? '✔️' : '❌'}</td></tr>
                    <tr><td>Sunday:</td><td>{profileData.sunday ? '✔️' : '❌'}</td></tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileView;
