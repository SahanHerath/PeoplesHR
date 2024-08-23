import React, { useState, useEffect } from 'react';
import './ManageEmployees.css';
import axios from 'axios';

const ManageEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [filter, setFilter] = useState({ team: '', position: '', employeeType: '' });

  useEffect(() => {
    axios.get('/api/employee/employees')
      .then(response => {
        setEmployees(response.data);
        setFilteredEmployees(response.data);
      })
      .catch(error => console.error('Error fetching employees', error));
  }, []);

  const handleRemoveEmployee = (userId) => {
    if (window.confirm('Are you sure you want to remove this employee?')) {
      axios.delete(`/api/employee/employees/${userId}`)
        .then(() => {
          const updatedEmployees = employees.filter(employee => employee.user_id !== userId);
          setEmployees(updatedEmployees);
          setFilteredEmployees(updatedEmployees);
          alert('Employee removed successfully');
        })
        .catch(error => console.error('Error removing employee', error));
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
  
    setFilter(prev => {
      const updatedFilter = { ...prev, [name]: value };
  
      const filtered = employees.filter(employee => {
        return (
          (updatedFilter.team === '' || employee.team === updatedFilter.team) &&
          (updatedFilter.position === '' || employee.position === updatedFilter.position) &&
          (updatedFilter.employeeType === '' || employee.employee_type === updatedFilter.employeeType)
        );
      });
  
      setFilteredEmployees(filtered);
      return updatedFilter;
    });
  };
  

  return (
    <div className="manage-employees-container">
      <h2>Manage Employees</h2>
      <div className="filters">
        <select name="team" onChange={handleFilterChange} value={filter.team}>
          <option value="">All Teams</option>
          <option value="FASTEN">FASTEN</option>
          <option value="DDF">DDF</option>
          <option value="HEALTHGUARD">HEALTHGUARD</option>
          <option value="HR">HR</option>
        </select>
        <select name="position" onChange={handleFilterChange} value={filter.position}>
          <option value="">All Positions</option>
          <option value="Intern">Intern</option>
          <option value="Associate Software Engineer">Associate Software Engineer</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Senior Software Engineer">Senior Software Engineer</option>
          <option value="Technical Lead">Technical Lead</option>
          <option value="Software Architect">Software Architect</option>
          <option value="HR Manager">HR Manager</option>
          <option value="Project Manager">Project Manager</option>
          <option value="UI/UX Developer">UI/UX Developer</option>
          <option value="Senior UI/UX Developer">Senior UI/UX Developer</option>
          <option value="QA Engineer">QA Engineer</option>
          <option value="Senior QA Engineer">Senior QA Engineer</option>
          <option value="QA Lead">QA Lead</option>
          <option value="Team Lead">Team Lead</option>
        </select>
        <select name="employeeType" onChange={handleFilterChange} value={filter.employeeType}>
          <option value="">All Employee Types</option>
          <option value="Probation">Probation</option>
          <option value="Permanent">Permanent</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Team</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(employee => (
            <tr key={employee.user_id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.team}</td>
              <td>
                <button 
                  className="remove-button" 
                  onClick={() => handleRemoveEmployee(employee.user_id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageEmployees;
