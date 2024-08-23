import React, { useState } from 'react';
import './Dashboard.css';
import DashboardContent from './DashboardContent'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faCalendarAlt, faSignOutAlt, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'; // Import icons
import logo from '../assets/PeoplesHR.webp';
import Profile from './Profile';
import LeaveRequest from './LeaveRequest';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  const renderContent = () => {
    switch (selectedTab) {
      case 'profile':
        return <Profile />;
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
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

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
            <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" /> Dashboard
          </a>
          <a
            href="#profile"
            className={`nav-link ${selectedTab === 'profile' ? 'active' : ''}`}
            onClick={() => setSelectedTab('profile')}
          >
            <FontAwesomeIcon icon={faUser} className="nav-icon" /> Profile
          </a>
          <a
            href="#calendar"
            className={`nav-link ${selectedTab === 'calendar' ? 'active' : ''}`}
            onClick={() => setSelectedTab('calendar')}
          >
            <FontAwesomeIcon icon={faCalendarAlt} className="nav-icon" /> Calendar
          </a>
          <a
            href="#request-leave"
            className={`nav-link ${selectedTab === 'request-leave' ? 'active' : ''}`}
            onClick={() => setSelectedTab('request-leave')}
          >
            <FontAwesomeIcon icon={faPlaneDeparture} className="nav-icon" /> Request Leave
          </a>
        </nav>
        <div className="logout-container">
          <a href="#" className="nav-link logout" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" /> Logout
          </a>
        </div>
      </div>
      <div className="main-content">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
