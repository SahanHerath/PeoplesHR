import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.svg'; 

const Start = () => {
  const navigate = useNavigate();

  // Set axios default configuration for credentials
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:3000/verify')
      .then(result => {
        if (result.data.Status) {
          if (result.data.role === "admin") {
            navigate('/dashboard');
          } else {
            navigate(`/employee_detail/${result.data.id}`);
          }
        }
      })
      .catch(err => console.log(err));
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
    <div className="p-8 rounded-lg shadow-xl w-full max-w-sm bg-gray-800 text-white border border-gray-700">
    <img src={Logo} alt="Company Logo" className="h-12" />

      <h2 className="text-3xl font-semibold text-center mb-6 text-orange-400">Login As</h2>
      <div className="flex flex-col space-y-4">
        <button
          type="button"
          className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-900 text-white rounded-md shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all"
          onClick={() => navigate('/employee_login')}
        >
          Employee
        </button>
        <button
          type="button"
          className="w-full py-3 bg-gradient-to-r from-cyan-800 to-blue-700 text-white rounded-md shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all"
          onClick={() => navigate('/adminlogin')}
        >
          Admin
        </button>
      </div>
    </div>
  </div>
  );
};

export default Start;
