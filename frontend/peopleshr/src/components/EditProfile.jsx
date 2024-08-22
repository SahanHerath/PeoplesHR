import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditProfile.css';

const EditProfile = ({ userId, onBackToProfile }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [team, setTeam] = useState('');
  const [age, setAge] = useState('');
  const [employeeType, setEmployeeType] = useState('');
  const [distance, setDistance] = useState('');
  const [medicalCondition, setMedicalCondition] = useState('');
  const [hasChildren, setHasChildren] = useState(false);
  const [availableDays, setAvailableDays] = useState([]);
  const [weekendAvailable, setWeekendAvailable] = useState(false);
  const [weekendDays, setWeekendDays] = useState([]);
  
  // New state for work details
  const [workDays, setWorkDays] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
  });

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    axios.get(`/api/profile/profile/${userId}`)
      .then(response => {
        setName(response?.data?.name);
        setPosition(response?.data?.position)
        setTeam(response?.data?.team)
        setAge(response?.data?.age)
        setEmployeeType(response?.data?.employee_type)
        setDistance(response?.data?.distance_to_office)
        setMedicalCondition(response?.data?.medical_description)
        setHasChildren(response?.data?.children_available)
        setWorkDays({
          Monday: response?.data?.monday || false,
          Tuesday: response?.data?.tuesday || false,
          Wednesday: response?.data?.wednesday || false,
          Thursday: response?.data?.thursday || false,
          Friday: response?.data?.friday || false,
          Saturday: response?.data?.saturday || false,
          Sunday: response?.data?.Sunday || false,
        });
        console.log("response", response);
      })
      .catch(error => console.error('Error fetching profile data', error));
  }, []);

  const handleBasicSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/profile/basic/${userId}`, { name, position, team, age, employeeType });
      alert('Basic details updated successfully');
    } catch (err) {
      console.error('Failed to update basic details', err);
    }
  };

  const handleAdditionalSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/profile/additional/${userId}`, { distance, medicalCondition, hasChildren, availableDays, weekendAvailable, weekendDays });
      alert('Additional details updated successfully');
    } catch (err) {
      console.error('Failed to update additional details', err);
    }
  };

  const handleWorkDetailsSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/profile/work-details/${userId}`, { workDays });
      alert('Work details updated successfully');
    } catch (err) {
      console.error('Failed to update work details', err);
    }
  };

  const handleWorkDayChange = (day) => {
    setWorkDays(prevState => ({ ...prevState, [day]: !prevState[day] }));
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <button onClick={onBackToProfile} className="back-to-profile-button">Back to Profile</button>

      {/* Basic Details Section */}
      <div className="edit-section">
        <h3>Basic Details</h3>
        <form onSubmit={handleBasicSubmit}>
          <table>
            <tbody>
              <tr>
                <td><label>Name:</label></td>
                <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" /></td>
              </tr>
              <tr>
                <td><label>Position:</label></td>
                <td>
                  <select value={position} onChange={(e) => setPosition(e.target.value)}>
                    <option value="">Select Position</option>
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
                </td>
              </tr>
              <tr>
                <td><label>Team:</label></td>
                <td>
                    <select value={team} onChange={(e) => setTeam(e.target.value)}>
                        <option value="">Select Team</option>
                        <option value="FASTEN">FASTEN</option>
                        <option value="DDF">DDF</option>
                        <option value="HEALTHGUARD">HEALTHGUARD</option>
                        <option value="HR">HR</option>
                    </select>
                </td>
              </tr>
              <tr>
                <td><label>Age:</label></td>
                <td><input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" /></td>
              </tr>
              <tr>
                <td><label>Employee Type:</label></td>
                <td>
                    <select value={employeeType} onChange={(e) => setEmployeeType(e.target.value)} required>
                        <option value="">Select Type</option>
                        <option value="Probation">Probation</option>
                        <option value="Permanent">Permanent</option>
                        <option value="Contract">Contract</option>
                    </select>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit">Update Basic Details</button>
        </form>
      </div>

      {/* Additional Details Section */}
      <div className="edit-section">
        <h3>Additional Details</h3>
        <form onSubmit={handleAdditionalSubmit}>
          <table>
            <tbody>
              <tr>
                <td><label>Distance to Office:</label></td>
                <td><input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="Distance to Office" /></td>
              </tr>
              <tr>
                <td><label>Medical Condition:</label></td>
                <td><textarea value={medicalCondition} onChange={(e) => setMedicalCondition(e.target.value)} placeholder="Medical Condition"></textarea></td>
              </tr>
              <tr>
                <td>
                  <label>Has Children (below 6-7 years):</label>
                </td>
                <td className="checkbox-container">
                  <input type="checkbox" checked={hasChildren} onChange={(e) => setHasChildren(e.target.checked)} />
                </td>
              </tr>
              {/* Add checkboxes for available days and weekend preference here */}
            </tbody>
          </table>
          <button type="submit">Update Additional Details</button>
        </form>
      </div>

      {/* Work Details Section */}
      <div className="edit-section">
        <h3>Work Details</h3>
        <form onSubmit={handleWorkDetailsSubmit}>
          <div className="workdays-container">
            <label>Week Days</label>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
              <div key={day} className="workday-item">
                <label>{day}</label>
                <input type="checkbox" checked={workDays[day]} onChange={() => handleWorkDayChange(day)}/>
              </div>
            ))}
          </div>
          <div className="workdays-container1">
            <label>Weekend Days</label>
            {['Saturday', 'Sunday'].map(day => (
              <div key={day} className="workday-item1">
                <label>{day}</label>
                <input type="checkbox" checked={workDays[day]} onChange={() => handleWorkDayChange(day)}/>
              </div>
            ))}
          </div>
          <button type="submit">Update Work Details</button>
        </form>
      </div>

    </div>
  );
};

export default EditProfile;
