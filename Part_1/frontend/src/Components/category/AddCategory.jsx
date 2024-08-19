import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/auth/add_category', { category })
            .then(result => {
                if (result.data.Status) {
                    navigate('/dashboard/category');
                } else {
                    alert(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='flex justify-center items-center bg-gray-200 w-full h-[570px] '>
            <div className='p-6 rounded-lg w-full max-w-md bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 shadow-lg'>
                <h2 className='text-white text-2xl mb-6 font-semibold'>Add Category</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="category" className='text-white font-medium'><strong>Category:</strong></label>
                        <input 
                            type="text" 
                            name='category' 
                            placeholder='Enter Category'
                            onChange={(e) => setCategory(e.target.value)} 
                            className='w-full px-3 py-2 mt-1 border border-orange-500 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-colors'
                        />
                    </div>
                    <button 
                        type="submit"
                        className='w-full py-2 px-4 mb-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-md shadow-md hover:bg-gradient-to-l transition-colors'
                    >
                        Add Category
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;
