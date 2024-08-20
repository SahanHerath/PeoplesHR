import React, { useState } from 'react';
import './RegisterDetails.css'; // Create and style this file similarly to your Login.css
import logo from '../assets/PeoplesHR.webp'; // Update with the correct path to your logo
import background from '../assets/backgroundHR.jpg'; // Update with the correct path to your background image
import axios from 'axios';

const RegisterDetails = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [team, setTeam] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [employeeType, setEmployeeType] = useState('');
  const [availableDays, setAvailableDays] = useState([]);
  const [weekendAvailable, setWeekendAvailable] = useState(false);
  const [weekendDays, setWeekendDays] = useState([]);
  const [distance, setDistance] = useState('');
  const [medicalCondition, setMedicalCondition] = useState('');
  const [hasChildren, setHasChildren] = useState(false);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setAvailableDays(prev =>
      prev.includes(value) ? prev.filter(day => day !== value) : [...prev, value]
    );
  };

  const handleWeekendCheckboxChange = (e) => {
    const value = e.target.value;
    setWeekendDays(prev =>
      prev.includes(value) ? prev.filter(day => day !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Logic to handle the submission of the form
    // Send the collected data to the backend
    try {
    const user_id = localStorage.getItem('userId');  
    const response = await axios.post('/api/auth/register-details', {
        user_id,
        name,
        position,
        team,
        gender,
        age,
        employeeType,
        availableDays,
        weekendAvailable,
        weekendDays,
        distance,
        medicalCondition,
        hasChildren,
      });

      alert('Registration phase 2 successful');
      // Optionally, redirect to the next phase or dashboard
      window.location.href = '/dashboard';
    } catch (err) {
      console.error('Error during registration phase 2', err);
    }
  };

  return (
    <div className="register-details-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="register-details-box">
        <div className="register-details-left">
          <img src={logo} alt="Peoples HR Logo" className="register-details-logo" />
        </div>
        <div className="register-details-right">
          <h2>Additional Details</h2>
          <form onSubmit={handleSubmit} className="register-details-form">
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Position:</label>
              <select value={position} onChange={(e) => setPosition(e.target.value)} required>
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
                {/* Add other positions as needed */}
              </select>
            </div>

            <div className="form-group">
              <label>Team Assigned:</label>
              <select value={team} onChange={(e) => setTeam(e.target.value)} required>
                <option value="">Select Team</option>
                <option value="FASTEN">FASTEN</option>
                <option value="DDF">DDF</option>
                <option value="HEALTHGUARD">HEALTHGUARD</option>
                <option value="HR">HR</option>
                {/* Add other teams as needed */}
              </select>
            </div>

            <div className="form-group">
              <label>Gender:</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Age:</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Employee Type:</label>
              <select value={employeeType} onChange={(e) => setEmployeeType(e.target.value)} required>
                <option value="">Select Type</option>
                <option value="Probation">Probation</option>
                <option value="Permanent">Permanent</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            <div className="form-group">
              <label>Available Days:</label>
              <div className="checkbox-group">
                <label>
                  <div className="checkbox-container">
                    <input
                        type="checkbox"
                        value="Monday"
                        onChange={handleCheckboxChange}
                        checked={availableDays.includes('Monday')}
                    /> 
                    <div>Monday</div>
                  </div>
                </label>
                <label>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    value="Tuesday"
                    onChange={handleCheckboxChange}
                    checked={availableDays.includes('Tuesday')}
                  /> 
                  <div>Tuesday</div>
                </div>
                </label>
                <label>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    value="Wednesday"
                    onChange={handleCheckboxChange}
                    checked={availableDays.includes('Wednesday')}
                  /> 
                  <div>
                    Wednesday
                  </div>
                </div>
                </label>
                <label>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    value="Thursday"
                    onChange={handleCheckboxChange}
                    checked={availableDays.includes('Thursday')}
                  />
                  <div>
                    Thursday
                  </div> 
                </div>
                </label>
                <label>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    value="Friday"
                    onChange={handleCheckboxChange}
                    checked={availableDays.includes('Friday')}
                  /> 
                  <div>
                    Friday
                  </div>
                </div>
                </label>
              </div>
            </div>

            <div className="form-group">
                <label>
                <div  className="checkbox-container">
                <input
                  type="checkbox"
                  checked={weekendAvailable}
                  onChange={(e) => setWeekendAvailable(e.target.checked)}
                /> 
                <div>
                    Weekend Available
                </div>
                </div>
                </label>
            </div>

            {weekendAvailable && (
              <div className="form-group">
                <label>Weekend Days:</label>
                <div className="checkbox-group">
                  <label>
                    <div className="checkbox-container">
                        <input
                        type="checkbox"
                        value="Saturday"
                        onChange={handleWeekendCheckboxChange}
                        checked={weekendDays.includes('Saturday')}
                        />
                        <div>
                            Saturday
                        </div>
                    </div> 
                  </label>
                  <label>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      value="Sunday"
                      onChange={handleWeekendCheckboxChange}
                      checked={weekendDays.includes('Sunday')}
                    /> 
                    <div>
                        Sunday
                    </div>
                    </div>
                  </label>
                </div>
              </div>
            )}

            <div className="form-group">
              <label>Distance to Office (in km):</label>
              <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Medical Condition (if any):</label>
              <textarea
                value={medicalCondition}
                onChange={(e) => setMedicalCondition(e.target.value)}
                rows="3"
              ></textarea>
            </div>

            <div className="form-group">
              <label>
              <div  className="checkbox-container">
                <input
                  type="checkbox"
                  checked={hasChildren}
                  onChange={(e) => setHasChildren(e.target.checked)}
                /> 
                <div>
                    Has Children (below 5-6 years)
                </div>
            </div>
              </label>
            </div>

            <button type="submit" className="register-details-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterDetails;
