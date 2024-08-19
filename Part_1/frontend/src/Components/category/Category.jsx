import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Category = () => {

    const [category, setCategory] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000/auth/category')
        .then(result => {
            if(result.data.Status) {
                setCategory(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [])
  return (
  
        <div className='px-6 py-8 bg-gray-50  overflow-y-auto max-h-[85vh]'>
          {/* Header Section */}
          <div className='flex justify-center mb-8'>
            <h1 className="text-4xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 inline-block text-transparent bg-clip-text">
              Category List
            </h1>
          </div>
    
          {/* Add Category Button */}
          <div className='flex justify-center mb-8'>
            <Link
              to="/dashboard/add_category"
              className='inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg'>
              Add Category
            </Link>
          </div>
    
          {/* Table Section */}
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <table className='w-full border-separate border-spacing-0'>
              <thead>
                <tr className='bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-800'>
                  <th className='py-4 px-6 text-left text-sm font-medium'>Name</th>
                </tr>
              </thead>
              <tbody>
                {category.map((c) => (
                  <tr key={c.id} className='border-b border-gray-200 hover:bg-gray-50'>
                    <td className='py-3 px-6 text-sm text-gray-700'>{c.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default Category