

import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import Logo from '../assets/logo.svg'; 

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
      .then(result => {
        if (result.data.Status) {
          localStorage.removeItem("valid");
          navigate('/');
        }
      });
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="flex items-center justify-center h-18 ml-8 shadow-md">
          <Link
            to="/dashboard"
            className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
            <img src={Logo} alt="Company Logo" className="h-12" />
            </Link>

        </div>
        <nav className="flex-1 p-4 space-y-2">
          <ul className="space-y-1">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors duration-300"
              >
                <i className="fs-4 bi-speedometer2 mr-3"></i>
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/employee"
                className="flex items-center p-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors duration-300"
              >
                <i className="fs-4 bi-people mr-3"></i>
                <span className="hidden sm:inline">Manage Employees</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/category"
                className="flex items-center p-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors duration-300"
              >
                <i className="fs-4 bi-columns mr-3"></i>
                <span className="hidden sm:inline">Category</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/profile"
                className="flex items-center p-3 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors duration-300"
              >
                <i className="fs-4 bi-person mr-3"></i>
                <span className="hidden sm:inline">Profile</span>
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="mt-[254px] flex items-center p-3 gray-300 hover:bg-gray-700 hover:text-white rounded-lg transition-colors duration-300 w-full text-left"
              >
                <i className="fs-4 bi-power mr-3"></i>
                <span className="hidden sm:inline">Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-3 bg-gray-100 w-auto h-auto">
        <div className="mb-6 p-3 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-700 to-g  inline-block text-transparent bg-clip-text">People HR</h1>

        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
