const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// MySQL connection setup
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Your MySQL password
  database: 'peopleshr'
});

// POST route to handle leave requests
router.post('/casual-leave-request', (req, res) => {
  const { user_id, leaveType, date, reason } = req.body;
  const status = 'pending';

  const query = `
    INSERT INTO leaves (user_id, type, start_date, reason, status)
    VALUES (?, ?, ?, ?, ?)
  `;

  connection.query(query, [user_id, leaveType, date, reason, status], (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Failed to submit leave request', error: err });
    }

    res.status(200).json({ success: true, message: 'Leave request submitted successfully' });
  });
});

router.post('/medical-leave-request', (req, res) => {
    console.log("req.body", req.body)
    const { user_id, leaveType, date, reason } = req.body;
    const status = 'pending';
  
    const query = `
      INSERT INTO leaves (user_id, type, start_date, reason, status)
      VALUES (?, ?, ?, ?, ?)
    `;
  
    connection.query(query, [user_id, leaveType, date, reason, status], (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Failed to submit leave request', error: err });
      }
  
      res.status(200).json({ success: true, message: 'Leave request submitted successfully' });
    });
  });

router.post('/annual-leave-request', (req, res) => {
    const { user_id, leaveType, start_date, end_date, number_of_days, reason } = req.body;
    const status = 'pending';
  
    const query = `
      INSERT INTO leaves (user_id, type, start_date, end_date, number_of_days, reason, status)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
  
    connection.query(query, [user_id, leaveType, start_date, end_date, number_of_days, reason, status], (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Failed to submit leave request', error: err });
      }
  
      res.status(200).json({ success: true, message: 'Annual leave request submitted successfully' });
    });
  });

  router.post('/halfday-leave-request', (req, res) => {
    const { user_id, leaveType, date, reason, session } = req.body;
    const status = 'pending';
  
    const query = `
      INSERT INTO leaves (user_id, type, start_date, reason, status, session)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
  
    connection.query(query, [user_id, leaveType, date, reason, status, session], (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Failed to submit leave request', error: err });
      }
  
      res.status(200).json({ success: true, message: 'Leave request submitted successfully' });
    });
  });

  router.get('/all-leaves', (req, res) => {
    const query = `
      SELECT l.leave_id, l.type, l.start_date, l.end_date, l.status, l.reason, l.number_of_days, l.session, u.name, u.team
      FROM leaves l
      JOIN user_details u ON l.user_id = u.user_id
    `;
    connection.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Failed to fetch leave requests', error: err });
      }
      res.status(200).json(results);
    });
  });
  
  // PUT route to accept a leave request
  router.put('/leaves/:id/accept', (req, res) => {
    const leaveId = req.params.id;
    const query = 'UPDATE leaves SET status = ? WHERE id = ?';
    connection.query(query, ['accepted', leaveId], (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Failed to accept leave request', error: err });
      }
      res.status(200).json({ success: true, message: 'Leave request accepted successfully' });
    });
  });
  
  // PUT route to reject a leave request
  router.put('/leaves/:id/reject', (req, res) => {
    const leaveId = req.params.id;
    const query = 'UPDATE leaves SET status = ? WHERE id = ?';
    connection.query(query, ['rejected', leaveId], (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Failed to reject leave request', error: err });
      }
      res.status(200).json({ success: true, message: 'Leave request rejected successfully' });
    });
  });

module.exports = router;
