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

// GET route to fetch all employees
router.get('/employees', (req, res) => {
  const query = 'SELECT user_id, name, position, team, employee_type FROM user_details';
  
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Failed to fetch employees', error: err });
    }

    res.status(200).json(results);
  });
});

// DELETE route to remove an employee
router.delete('/employees/:id', (req, res) => {
    const userId = req.params.id;

    // Start a transaction
    connection.beginTransaction(err => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Transaction failed', error: err });
        }

        // First, delete from 'user_details' table
        connection.query('DELETE FROM user_details WHERE user_id = ?', [userId], (err, result) => {
            if (err) {
                return connection.rollback(() => {
                    res.status(500).json({ success: false, message: 'Failed to delete from user_details', error: err });
                });
            }

            // Then, delete from 'users' table
            connection.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
                if (err) {
                    return connection.rollback(() => {
                        res.status(500).json({ success: false, message: 'Failed to delete from users', error: err });
                    });
                }

                connection.query('DELETE FROM leaves WHERE user_id = ?', [userId], (err, result) => {
                    if (err) {
                        return connection.rollback(() => {
                            res.status(500).json({ success: false, message: 'Failed to delete from users', error: err });
                        });
                    }

                    // Commit the transaction if both queries are successful
                    connection.commit(err => {
                        if (err) {
                            return connection.rollback(() => {
                                res.status(500).json({ success: false, message: 'Transaction commit failed', error: err });
                            });
                        }

                        res.status(200).json({ success: true, message: 'Employee removed successfully' });
                    });
                });
            });
        });
    });
});

module.exports = router;
