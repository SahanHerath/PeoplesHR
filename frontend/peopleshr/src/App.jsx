import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import RegisterDetails from './components/RegisterDetails';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App(){
  return (
    <Router>
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/registerDetails" element={<RegisterDetails/>} />
            <Route exact path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
    </Router>
  );
};

export default App;

