import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import RegisterDetails from './components/RegisterDetails';
import Dashboard from './components/Dashboard';

function App(){
  return (
    <Router>
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/registerDetails" element={<RegisterDetails/>} />
            <Route exact path="/dashboard" element={<Dashboard/>} />
          </Routes>
    </Router>
  );
};

export default App;

