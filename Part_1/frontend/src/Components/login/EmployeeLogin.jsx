import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

const EmployeeLogin = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/employee/employee_login', values)
            .then(result => {
                if (result.data.loginStatus) {
                    localStorage.setItem("valid", true);
                    navigate('/employee_detail/' + result.data.id);
                } else {
                    setError(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-800'>
            <div className='p-6 rounded-lg w-full max-w-md bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 shadow-lg'>
                <div className="flex justify-center mb-4">
                    <img src={Logo} alt="Company Logo" className="h-12" />
                </div>
                <h2 className='text-white text-2xl mb-6 font-semibold'>Employee Login</h2>
                <div className='text-red-400 mb-4'>
                    {error && error}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="email" className='text-white font-medium'><strong>Email:</strong></label>
                        <input 
                            type="email" 
                            name='email' 
                            autoComplete='off' 
                            placeholder='Enter your email'
                            onChange={(e) => setValues({ ...values, email: e.target.value })} 
                            className='w-full px-3 py-2 mt-1 border border-orange-500 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-colors'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className='text-white font-medium'><strong>Password:</strong></label>
                        <input 
                            type="password" 
                            name='password' 
                            placeholder='Enter your password'
                            onChange={(e) => setValues({ ...values, password: e.target.value })} 
                            className='w-full px-3 py-2 mt-1 border border-orange-500 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-colors'
                        />
                    </div>
                    <button 
                        type="submit"
                        className='w-full py-2 px-4 mb-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-md shadow-md hover:bg-gradient-to-l transition-colors'
                    >
                        Log In
                    </button>
                    <div className='flex items-center'>
                        <input 
                            type="checkbox" 
                            name="tick" 
                            id="tick" 
                            className='mr-2'
                        />
                        <label htmlFor="tick" className='text-white'>
                            I agree to the terms & conditions
                        </label>
                    </div>
                    <Link
              to="/"
              className='mt-4 text-lg text-gray-400 flex justify-center hover:underline'
            >
              Home
            </Link>
                </form>
            </div>
        </div>
    );
};

export default EmployeeLogin;
