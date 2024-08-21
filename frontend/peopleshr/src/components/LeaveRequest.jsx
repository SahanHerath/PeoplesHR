import React, { useState } from 'react';
import './LeaveRequest.css';

const LeaveRequest = () => {
    const [selectedLeaveType, setSelectedLeaveType] = useState('casual');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId');
        const leaveType = selectedLeaveType;
        if (selectedLeaveType === 'casual') {
            const date = e.target.date.value;
            const reason = e.target.reason.value;
            const user_id = localStorage.getItem('userId');

            // Make the API call to submit the leave request
            fetch('/api/leave/casual-leave-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_id, leaveType, date, reason }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Leave request submitted successfully');
                    } else {
                        alert('Failed to submit leave request');
                    }
                })
                .catch(error => {
                    console.error('Error submitting leave request', error);
                });
        }

        if (selectedLeaveType === 'medical') {
            const date = e.target.date.value;
            const reason = e.target.reason.value;
            const user_id = localStorage.getItem('userId');

            // Make the API call to submit the leave request
            fetch('/api/leave/medical-leave-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_id, leaveType, date, reason }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Leave request submitted successfully');
                    } else {
                        alert('Failed to submit leave request');
                    }
                })
                .catch(error => {
                    console.error('Error submitting leave request', error);
                });
        }

        if (selectedLeaveType === 'halfday') {
            const date = e.target.date.value;
            const reason = e.target.reason.value;
            const session = e.target.session.value;
            const user_id = localStorage.getItem('userId');
            console.log("session",session);

            // Make the API call to submit the leave request
            fetch('/api/leave/halfday-leave-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_id, leaveType, date, reason, session }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Leave request submitted successfully');
                    } else {
                        alert('Failed to submit leave request');
                    }
                })
                .catch(error => {
                    console.error('Error submitting leave request', error);
                });
        }

        if (selectedLeaveType === 'annual') {
            const requestData = {
                user_id: userId,
                leaveType,
                start_date: e.target.start_date.value,
                end_date: e.target.end_date.value,
                number_of_days: e.target.number_of_days.value,
                reason: e.target.reason.value,
            };

            fetch(`/api/leave/annual-leave-request`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        alert('Leave request submitted successfully');
                    } else {
                        alert('Failed to submit leave request');
                    }
                })
                .catch(error => {
                    console.error('Error submitting leave request', error);
                });
        }
    };

    return (
        <div className="leave-request-container">
            <h2>Request Leave</h2>
            <div className="tabs">
                <button
                    className={`tab ${selectedLeaveType === 'casual' ? 'active' : ''}`}
                    onClick={() => setSelectedLeaveType('casual')}
                >
                    Casual Leave
                </button>
                <button
                    className={`tab ${selectedLeaveType === 'annual' ? 'active' : ''}`}
                    onClick={() => setSelectedLeaveType('annual')}
                >
                    Annual Leave
                </button>
                <button
                    className={`tab ${selectedLeaveType === 'medical' ? 'active' : ''}`}
                    onClick={() => setSelectedLeaveType('medical')}
                >
                    Medical Leave
                </button>
                <button
                    className={`tab ${selectedLeaveType === 'halfday' ? 'active' : ''}`}
                    onClick={() => setSelectedLeaveType('halfday')}
                >
                    Half Day
                </button>
            </div>
            {selectedLeaveType === 'casual' && (
                <form onSubmit={handleSubmit} className="leave-form">
                    <div className="form-group">
                        <label>Date:</label>
                        <input type="date" name="date" required />
                    </div>
                    <div className="form-group">
                        <label>Reason:</label>
                        <textarea name="reason" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit Request</button>
                </form>
            )}

            {selectedLeaveType === 'halfday' && (
                <form onSubmit={handleSubmit} className="leave-form">
                    <div className="form-group">
                        <label>Date:</label>
                        <input type="date" name="date" required />
                    </div>
                    <div className="form-group">
                        <label>Session:</label>
                        <select name="session" required>
                            <option value="morning">Morning Period</option>
                            <option value="evening">Evening Period</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Reason:</label>
                        <textarea name="reason" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit Request</button>
                </form>
            )}

            {selectedLeaveType === 'medical' && (
                <form onSubmit={handleSubmit} className="leave-form">
                    <div className="form-group">
                        <label>Date:</label>
                        <input type="date" name="date" required />
                    </div>
                    <div className="form-group">
                        <label>Reason:</label>
                        <textarea name="reason" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit Request</button>
                </form>
            )}

            {selectedLeaveType === 'annual' && (
                <form onSubmit={handleSubmit} className="leave-form">
                    <div className="form-group">
                        <label>Start Date:</label>
                        <input type="date" name="start_date" required />
                    </div>
                    <div className="form-group">
                        <label>End Date:</label>
                        <input type="date" name="end_date" required />
                    </div>
                    <div className="form-group">
                        <label>Number of Days:</label>
                        <input
                            type="number"
                            name="number_of_days"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Reason:</label>
                        <textarea name="reason" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit Request</button>
                </form>
            )}
        </div>
    );
};

export default LeaveRequest;
