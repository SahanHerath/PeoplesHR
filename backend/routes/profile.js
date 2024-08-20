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

module.exports = router;
