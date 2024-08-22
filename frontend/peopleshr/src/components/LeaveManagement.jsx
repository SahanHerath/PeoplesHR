import React, { useState, useEffect } from 'react';
import './LeaveManagement.css'; // Create and style this file
import axios from 'axios';

const LeaveManagement = () => {
  const [leaves, setLeaves] = useState([]);
  const [filteredLeaves, setFilteredLeaves] = useState([]);
  const [filters, setFilters] = useState({ type: '', team: '', status: '' });

  useEffect(() => {
    // Fetch all leave requests from the backend
    axios.get('/api/leave/all-leaves')
      .then(response => {
        setLeaves(response.data);
        setFilteredLeaves(response.data);
      })
      .catch(error => console.error('Error fetching leaves', error));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    let filtered = leaves;

    if (filters.type) {
      filtered = filtered.filter(leave => leave.type === filters.type);
    }
    if (filters.team) {
      filtered = filtered.filter(leave => leave.team === filters.team);
    }
    if (filters.status) {
      filtered = filtered.filter(leave => leave.status === filters.status);
    }

    setFilteredLeaves(filtered);
  };

  const handleAccept = (leaveId) => {
    axios.put(`/api/leave/leaves/${leaveId}/accept`)
      .then(() => {
        setLeaves(leaves.map(leave => leave.id === leaveId ? { ...leave, status: 'accepted' } : leave));
        setFilteredLeaves(filteredLeaves.map(leave => leave.id === leaveId ? { ...leave, status: 'accepted' } : leave));
      })
      .catch(error => console.error('Error accepting leave', error));
  };

  const handleReject = (leaveId) => {
    axios.put(`/api/leave/leaves/${leaveId}/reject`)
      .then(() => {
        setLeaves(leaves.map(leave => leave.id === leaveId ? { ...leave, status: 'rejected' } : leave));
        setFilteredLeaves(filteredLeaves.map(leave => leave.id === leaveId ? { ...leave, status: 'rejected' } : leave));
      })
      .catch(error => console.error('Error rejecting leave', error));
  };

  return (
    <div className="leave-management-container">
      <h2>Leave Management</h2>
      <div className="filters">
        <select name="type" value={filters.type} onChange={handleFilterChange}>
          <option value="">All Types</option>
          <option value="Casual">Casual Leave</option>
          <option value="Annual">Annual Leave</option>
          <option value="Medical">Medical Leave</option>
          <option value="Half Day">Half Day</option>
        </select>
        <select name="team" value={filters.team} onChange={handleFilterChange}>
          <option value="">All Teams</option>
          <option value="FASTEN">FASTEN</option>
          <option value="DDF">DDF</option>
          <option value="HEALTHGUARD">HEALTHGUARD</option>
          <option value="HR">HR</option>
        </select>
        <select name="status" value={filters.status} onChange={handleFilterChange}>
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button className="apply-button" onClick={applyFilters}>Apply Filters</button>
      </div>

      <table className="leave-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>No of Days</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeaves.map(leave => (
            <tr key={leave.leave_id}>
              <td>{leave.name}</td>
              <td>{leave.team}</td>
              <td>{leave.type}</td>
              <td>{leave.start_date ? new Date(leave.start_date).toISOString().split('T')[0] : '--'}</td>
              <td>{leave.end_date ? new Date(leave.end_date).toISOString().split('T')[0] : '--'}</td>
              <td>{leave.number_of_days ? leave.number_of_days : '--'}</td>
              <td>{leave.status}</td>
              <td>
                <button onClick={() => handleAccept(leave.leave_id)} disabled={leave.status !== 'pending'}>Accept</button>
                <button onClick={() => handleReject(leave.leave_id)} disabled={leave.status !== 'pending'}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveManagement;
