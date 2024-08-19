const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require('jsonwebtoken'); // For token generation

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Add your MySQL root password here if set
  database: 'peopleshr'
});

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log("req", req.body);
  if (!email || !password) {
    return res.status(400).json({ message: 'Please enter both email and password' });
  }

  // Check if user exists
  connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) throw err;

    if (results.length === 0) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const user = results[0];

    // Compare the entered password with the hashed password in the database
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;

      if (isMatch) {
        // Create a token
        const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, 'your_jwt_secret', {
          expiresIn: '1h',
        });

        return res.json({
          message: 'Login successful',
          token,
          userId: user.id
        });
      } else {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
    });
  });
});

router.post('/register', (req, res) => {
  const { email, password, confirmPassword } = req.body;

  // Basic validation
  if (!email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  // Check if the user already exists
  connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) throw err;

      // Insert the new user into the database
      connection.query(
        'INSERT INTO users (email, password) VALUES (?, ?)',
        [email, hash],
        (err, result) => {
          if (err) throw err;

          // Optionally, you can create a JWT token here and send it to the user
          const token = jwt.sign({ id: result.insertId, email: email }, 'your_jwt_secret', {
            expiresIn: '1h',
          });

          res.status(201).json({
            message: 'User registered successfully',
            token,
          });
        }
      );
    });
  });
});

router.post('/register-details', (req, res) => {
  const {
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
  } = req.body;

  // First query to insert user details
  connection.query(
    'INSERT INTO user_details (user_id, name, position, team, gender, age, employee_type, distance_to_office, medical_description, children_available) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      user_id,
      name,
      position,
      team,
      gender,
      age,
      employeeType,
      distance,
      medicalCondition,
      hasChildren,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to save user details' });
      }

      // Second query to insert work days after the first one succeeds
      connection.query(
        'INSERT INTO work_days (user_id, monday, tuesday, wednesday, thursday, friday, weekend_prefer, saturday, sunday) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          user_id,
          availableDays.includes('Monday'),
          availableDays.includes('Tuesday'),
          availableDays.includes('Wednesday'),
          availableDays.includes('Thursday'),
          availableDays.includes('Friday'),
          weekendAvailable || 0,
          weekendDays.includes('Saturday'),
          weekendDays.includes('Sunday')
        ],
        (err, result) => {
          if (err) {
            return res.status(500).json({ message: 'Failed to save work days' });
          }
          // Send the final response only once, after both queries are successful
          return res.status(201).json({ message: 'User details and working details saved successfully' });
        }
      );
    }
  );
});


module.exports = router;