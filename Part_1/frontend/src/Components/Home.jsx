import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0)
  const [employeeTotal, setemployeeTotal] = useState(0)
  const [salaryTotal, setSalaryTotal] = useState(0)
  const [admins, setAdmins] = useState([])

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  useEffect(() => {
    adminCount();
    employeeCount();
    salaryCount();
    AdminRecords();
  }, [])

  const AdminRecords = () => {
    axios.get('http://localhost:3000/auth/admin_records')
    .then(result => {
      if(result.data.Status) {
        setAdmins(result.data.Result)
      } else {
         alert(result.data.Error)
      }
    })
  }
  const adminCount = () => {
    axios.get('http://localhost:3000/auth/admin_count')
    .then(result => {
      if(result.data.Status) {
        setAdminTotal(result.data.Result[0].admin)
      }
    })
  }
  const employeeCount = () => {
    axios.get('http://localhost:3000/auth/employee_count')
    .then(result => {
      if(result.data.Status) {
        setemployeeTotal(result.data.Result[0].employee)
      }
    })
  }
  const salaryCount = () => {
    axios.get('http://localhost:3000/auth/salary_count')
    .then(result => {
      if(result.data.Status) {
        setSalaryTotal(result.data.Result[0].salaryOFEmp)
      } else {
        alert(result.data.Error)
      }
    })
  }
  
  return (
    <div className="p-8 bg-gray-100 text-gray-900 overflow-y-auto h-[84vh]">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r  from-blue-500 to-blue-800 p-6 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h4 className="text-xl font-semibold text-white mb-2">Admin</h4>
          <div className="border-t border-gray-300 mt-2">
            <div className="flex justify-between py-2">
              <h5 className="text-gray-100">Total:</h5>
              <h5 className="text-white text-3xl font-bold">{adminTotal}</h5>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h4 className="text-xl font-semibold text-white mb-2">Employee</h4>
          <div className="border-t border-gray-300 mt-2">
            <div className="flex justify-between py-2">
              <h5 className="text-gray-100">Total:</h5>
              <h5 className="text-white text-3xl font-bold">{employeeTotal}</h5>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-gray-700 to-blue-600 p-6 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h4 className="text-xl font-semibold text-white mb-2">Salary</h4>
          <div className="border-t border-gray-300 mt-2">
            <div className="flex justify-between py-2">
              <h5 className="text-gray-100">Total:</h5>
              <h5 className="text-white text-3xl font-bold">LKR: {salaryTotal}</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Admins Table */}
      <div className="p-8 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded-lg shadow-xl">
      <h3 className="text-3xl font-bold mb-8 text-gray-900">List of Admins</h3>
      <div>
        {admins.map((a, index) => (
          <div key={a.email} className="bg-white rounded-lg shadow-lg mb-4">
            <div
              className="p-6 cursor-pointer flex justify-between items-center hover:bg-gray-100 transition-colors"
              onClick={() => handleToggle(index)}
            >
              <h4 className="text-xl font-semibold text-gray-800">{a.email}</h4>
              <span className="text-gray-500">{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="p-6 border-t border-gray-200">
                <div className="flex gap-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                    Edit
                  </button>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
  
export default Home