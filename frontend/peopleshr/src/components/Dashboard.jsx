import React, { useState } from 'react';
import './Dashboard.css';
import DashboardContent from './DashboardContent'; // Import the new component
import logo from '../assets/PeoplesHR.webp'; // Update with the correct path to your logo
import Profile from './Profile';
import LeaveRequest from './LeaveRequest';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  const renderContent = () => {
    switch (selectedTab) {
      case 'profile':
        return <Profile/>;
      case 'calendar':
        return <h1>Calendar Content</h1>;
      case 'request-leave':
        return <LeaveRequest />;
      case 'dashboard':
      default:
        return <DashboardContent />;
    }
  };

  const handleLogout = () => {
      // Clear the user-related data from localStorage
      localStorage.removeItem('userId');
      localStorage.removeItem('token');
  
      // Redirect the user to the login page
      window.location.href = '/login';
  }

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Peoples HR Logo" className="logo" />
        </div>
        <nav className="nav-links">
          <a
            href="#dashboard"
            className={`nav-link ${selectedTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setSelectedTab('dashboard')}
          >
            Dashboard
          </a>
          <a
            href="#profile"
            className={`nav-link ${selectedTab === 'profile' ? 'active' : ''}`}
            onClick={() => setSelectedTab('profile')}
          >
            Profile
          </a>
          <a
            href="#calendar"
            className={`nav-link ${selectedTab === 'calendar' ? 'active' : ''}`}
            onClick={() => setSelectedTab('calendar')}
          >
            Calendar
          </a>
          <a
            href="#request-leave"
            className={`nav-link ${selectedTab === 'request-leave' ? 'active' : ''}`}
            onClick={() => setSelectedTab('request-leave')}
          >
            Request Leave
          </a>
        </nav>
        <div className="logout-container">
          <a href="#" className="nav-link logout" onClick={handleLogout}>
            Logout
          </a>
        </div>
      </div>
      <div className="main-content">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
