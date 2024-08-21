// In your auth.js or profile.js route file
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Add your MySQL root password here if set
  database: 'peopleshr'
});

// Profile route
router.get('/profile/:userId', (req, res) => {
  const userId = req.params.userId;
    console.log("Received request for user profile with ID:");
  // Query to fetch user basic and additional details
  connection.query(
    'SELECT u.id, u.email, ud.name, ud.position, ud.team, ud.gender, ud.age, ud.employee_type, ud.distance_to_office, ud.medical_description, ud.children_available, wd.monday, wd.tuesday, wd.wednesday, wd.thursday, wd.friday, wd.weekend_prefer, wd.saturday, wd.sunday FROM users u JOIN user_details ud ON u.id = ud.user_id JOIN work_days wd ON u.id = wd.user_id WHERE u.id = ?',
    [userId],
    (err, results) => {
      if (err) return res.status(500).json({ message: 'Database error', err });
      if (results.length === 0) return res.status(404).json({ message: 'User not found' });

      res.json(results[0]);
    }
  );
});


router.put('/update-profile/:userId', (req, res) => {
  const userId = req.params.userId;
  const {
    name,
    position,
    team,
    gender,
    age,
    employeeType,
    distance_to_office,
    medical_description,
    children_available,
  } = req.body;

  const query = `
    UPDATE user_details 
    SET name = ?, position = ?, team = ?, gender = ?, age = ?, employee_type = ?, 
    distance_to_office = ?, medical_description = ?, children_available = ? 
    WHERE user_id = ?`;

  connection.query(
    query,
    [name, position, team, gender, age, employeeType, distance_to_office, medical_description, children_available, userId],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to update profile' });
      }
      return res.status(200).json({ message: 'Profile updated successfully' });
    }
  );
});

// Update Basic Details
router.put('/basic/:userId', (req, res) => {
  const userId = req.params.userId;
  const { name, position, team, age, employeeType } = req.body;

  connection.query(
    'UPDATE user_details SET name = ?, position = ?, team = ?, age = ?, employee_type = ? WHERE user_id = ?',
    [name, position, team, age, employeeType, userId],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'Failed to update basic details', err });
      res.json({ message: 'Basic details updated successfully' });
    }
  );
});

// Update Additional Details
router.put('/additional/:userId', (req, res) => {
  const userId = req.params.userId;
  const { distance, medicalCondition, hasChildren, availableDays, weekendAvailable, weekendDays } = req.body;

  connection.query(
    'UPDATE user_details SET distance_to_office = ?, medical_description = ?, children_available = ? WHERE user_id = ?',
    [distance, medicalCondition, hasChildren, userId],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'Failed to update additional details', err });

      // Update available days and weekend preference
      connection.query(
        'UPDATE work_days SET monday = ?, tuesday = ?, wednesday = ?, thursday = ?, friday = ?, weekend_prefer = ?, saturday = ?, sunday = ? WHERE user_id = ?',
        [
          availableDays.includes('Monday'),
          availableDays.includes('Tuesday'),
          availableDays.includes('Wednesday'),
          availableDays.includes('Thursday'),
          availableDays.includes('Friday'),
          weekendAvailable,
          weekendDays.includes('Saturday'),
          weekendDays.includes('Sunday'),
          userId
        ],
        (err, result) => {
          if (err) return res.status(500).json({ message: 'Failed to update work days', err });
          res.json({ message: 'Additional details updated successfully' });
        }
      );
    }
  );
});

module.exports = router;
