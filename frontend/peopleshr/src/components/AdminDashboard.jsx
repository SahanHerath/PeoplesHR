import React, { useState } from 'react';
import './AdminDashboard.css'; // Ensure you create and style this CSS file
import DashboardContent from './DashboardContent'; // Import the content components as needed
import logo from '../assets/PeoplesHR.webp'; // Update with the correct path to your logo
import ManageEmployees from './ManageEmployees.jsx';
import LeaveManagement from './LeaveManagement.jsx';
// import RoosterPlanning from './RoosterPlanning';
// import CompanyAnnouncements from './CompanyAnnouncements';
// import SpecialEvents from './SpecialEvents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faCalendarAlt, faClipboardList, faBullhorn, faStar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('admin-dashboard');

  const renderContent = () => {
    switch (selectedTab) {
      case 'manage-employees':
        return <ManageEmployees />;
      case 'leave-management':
        return <LeaveManagement />;
      case 'rooster-planning':
        return <h1>Rooster management</h1>;//<RoosterPlanning />;
      case 'company-announcements':
        return <h1>Company Annoucement</h1>;//<CompanyAnnouncements />;
      case 'special-events':
        return <h1>Special Events</h1>;//<SpecialEvents />;
      case 'admin-dashboard':
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
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Peoples HR Logo" className="logo" />
        </div>
        <nav className="nav-links">
          <a
            href="#admin-dashboard"
            className={`nav-link ${selectedTab === 'admin-dashboard' ? 'active' : ''}`}
            onClick={() => setSelectedTab('admin-dashboard')}
          >
            <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
            Admin Dashboard
          </a>
          <a
            href="#manage-employees"
            className={`nav-link ${selectedTab === 'manage-employees' ? 'active' : ''}`}
            onClick={() => setSelectedTab('manage-employees')}
          >
            <FontAwesomeIcon icon={faUsers} className="nav-icon" />
            Manage Employees
          </a>
          <a
            href="#leave-management"
            className={`nav-link ${selectedTab === 'leave-management' ? 'active' : ''}`}
            onClick={() => setSelectedTab('leave-management')}
          >
            <FontAwesomeIcon icon={faCalendarAlt} className="nav-icon" />
            Leave Management
          </a>
          <a
            href="#rooster-planning"
            className={`nav-link ${selectedTab === 'rooster-planning' ? 'active' : ''}`}
            onClick={() => setSelectedTab('rooster-planning')}
          >
            <FontAwesomeIcon icon={faClipboardList} className="nav-icon" />
            Rooster Planning
          </a>
          <a
            href="#company-announcements"
            className={`nav-link ${selectedTab === 'company-announcements' ? 'active' : ''}`}
            onClick={() => setSelectedTab('company-announcements')}
          >
            <FontAwesomeIcon icon={faBullhorn} className="nav-icon" />
             Company Announcements
          </a>
          <a
            href="#special-events"
            className={`nav-link ${selectedTab === 'special-events' ? 'active' : ''}`}
            onClick={() => setSelectedTab('special-events')}
          >
            <FontAwesomeIcon icon={faStar} className="nav-icon" />
            Manage Special Events
          </a>
        </nav>
        <div className="logout-container">
          <a href="#" className="nav-link logout" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" />
            Logout
          </a>
        </div>
      </div>
      <div className="main-content">{renderContent()}</div>
    </div>
  );
};

export default AdminDashboard;