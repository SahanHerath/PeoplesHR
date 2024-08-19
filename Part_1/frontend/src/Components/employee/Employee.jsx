import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();
  
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/employee")
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/auth/delete_employee/${id}`)
      .then((result) => {
        if (result.data.Status) {
          setEmployee(employee.filter(e => e.id !== id)); // Update the state instead of reloading
        } else {
          alert(result.data.Error);
        }
      });
  };

 
  return (
    <div className="px-4 mt-6 overflow-y-auto max-h-[85vh]">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-gradient bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Employee List
        </h1>
      </div>
      <div className="mb-6 text-right">
        <Link
          to="/dashboard/add_employee"
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011-1h4a1 1 0 010 2h-4v4a1 1 0 11-2 0V6H5a1 1 0 110-2h4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add Employee
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {employee.map((e) => (
          <div
            key={e.id}
            className="bg-white rounded-lg shadow-lg transform hover:shadow-xl hover:-translate-y-1 transition-all p-5"
          >
            <img
              src={`http://localhost:3000/Images/` + e.image}
              alt={e.name}
              className="w-[100px] h-[100px] object-cover rounded-full mb-4 border-4 border-indigo-500"
            />
            <h3 className="text-xl font-semibold text-gray-800">{e.name}</h3>
            <p className="text-gray-600">{e.position}</p>
            <p className="text-gray-500 text-sm mb-4">Available Days: {e.available_days}</p>
            <button
              onClick={() => handleToggle(e.id)}
              className="w-full text-left flex items-center justify-between text-gray-700 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <span className="text-sm font-semibold">{expandedId === e.id ? 'Hide Actions' : 'Show Actions'}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${expandedId === e.id ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 9l4 4 4-4H6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {expandedId === e.id && (
              <div className="flex justify-between mt-4">
                <Link
                  to={`/dashboard/edit_employee/${e.id}`}
                  className="inline-flex items-center px-3 py-1 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-600 transition-colors"
                >
                  Edit
                </Link>
                <button
                  className="inline-flex items-center px-3 py-1 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors"
                  onClick={() => handleDelete(e.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employee;