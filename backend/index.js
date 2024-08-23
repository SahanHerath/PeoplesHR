const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.js');
const profileRoutes = require('./routes/profile.js');
const leaveRoutes = require('./routes/leave.js');
const employeeRoutes = require('./routes/employee.js');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/leave', leaveRoutes);
app.use('/api/employee', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});