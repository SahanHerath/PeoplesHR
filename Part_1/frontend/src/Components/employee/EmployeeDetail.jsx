// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'


// const EmployeeDetail = () => {
//     const [employee, setEmployee] = useState([])
//     const {id} = useParams()
//     const navigate = useNavigate()
//     useEffect(() => {
//         axios.get('http://localhost:3000/employee/detail/'+id)
//         .then(result => {
//             setEmployee(result.data[0])
//         })
//         .catch(err => console.log(err))
//     }, [])
//     const handleLogout = () => {
//         axios.get('http://localhost:3000/employee/logout')
//         .then(result => {
//           if(result.data.Status) {
//             localStorage.removeItem("valid")
//             navigate('/')
//           }
//         }).catch(err => console.log(err))
//       }
//   return (
//     <div>
//         <div className="p-2 d-flex justify-content-center shadow">
//             <h4>People HR</h4>
//         </div>
//         <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
//             <img src={`http://localhost:3000/Images/`+employee.image} className='emp_det_image'/>
//             <div className='d-flex align-items-center flex-column mt-5'>
//                 <h3>Name: {employee.name}</h3>
//                 <h3>Email: {employee.email}</h3>
//                 <h3>Salary: ${employee.salary}</h3>
//             </div>
//             <div>
//                 <button className='btn btn-primary me-2'>Edit</button>
//                 <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default EmployeeDetail


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { PencilSquareIcon, ArrowRightOnRectangleIcon, EnvelopeIcon, CurrencyDollarIcon, UserIcon } from '@heroicons/react/24/solid';

// const EmployeeDetail = () => {
//   const [employee, setEmployee] = useState({});
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:3000/employee/detail/${id}`)
//       .then(result => {
//         setEmployee(result.data[0]);
//       })
//       .catch(err => console.log(err));
//   }, [id]);

//   const handleLogout = () => {
//     axios.get('http://localhost:3000/employee/logout')
//       .then(result => {
//         if (result.data.Status) {
//           localStorage.removeItem("valid");
//           navigate('/');
//         }
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center">
//       <div className="w-full p-6 bg-gray-800 shadow-lg flex justify-between items-center">
//         <h4 className="text-2xl font-bold">People HR</h4>
//         <button 
//           onClick={handleLogout} 
//           className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition-transform transform hover:scale-105"
//         >
//           <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
//           Logout
//         </button>
//       </div>

//       <div className="mt-10 flex flex-col items-center">
//         <img
//           src={`http://localhost:3000/Images/${employee.image}`}
//           alt={`${employee.name}`}
//           className="w-36 h-36 rounded-full shadow-xl border-4 border-gray-700"
//         />
//         <div className="mt-6 text-center">
//           <div className="flex items-center justify-center space-x-2">
//             <UserIcon className="h-6 w-6 text-blue-500" />
//             <h3 className="text-xl font-semibold">Name: {employee.name}</h3>
//           </div>
//           <div className="flex items-center justify-center space-x-2 mt-3">
//             <EnvelopeIcon className="h-6 w-6 text-yellow-500" />
//             <h3 className="text-xl font-semibold">Email: {employee.email}</h3>
//           </div>
//           <div className="flex items-center justify-center space-x-2 mt-3">
//             <CurrencyDollarIcon className="h-6 w-6 text-green-500" />
//             <h3 className="text-xl font-semibold">Salary: ${employee.salary}</h3>
//           </div>
//         </div>

//         <div className="mt-10 flex space-x-4">
//           <button
//             className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
//           >
//             <PencilSquareIcon className="h-5 w-5 mr-2" />
//             Edit
//           </button>
//           <button
//             className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition-transform transform hover:scale-105"
//             onClick={handleLogout}
//           >
//             <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeDetail;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PencilSquareIcon, ArrowRightOnRectangleIcon, EnvelopeIcon, CurrencyDollarIcon, UserIcon, CalendarIcon, GlobeAltIcon, DevicePhoneMobileIcon, HeartIcon, UsersIcon } from '@heroicons/react/24/solid';
import Logo from '../../assets/logo.svg'; 

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/employee/detail/${id}`)
      .then(result => {
        setEmployee(result.data[0]);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleLogout = () => {
    axios.get('http://localhost:3000/employee/logout')
      .then(result => {
        if (result.data.Status) {
          localStorage.removeItem("valid");
          navigate('/');
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center">
      <header className="w-full p-6 bg-gray-800 shadow-md flex justify-between items-center">
        <img src={Logo} alt="Company Logo" className="h-12" />
        <h1 className="text-2xl font-bold">Employee Details</h1>

        <button 
          onClick={handleLogout} 
          className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition-transform transform hover:scale-105"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
          Logout
        </button>
      </header>

      <main className="mt-10 flex flex-col items-center w-full max-w-3xl">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full ">
          <div className="flex flex-col items-center">
            <img
              src={`http://localhost:3000/Images/${employee.image}`}
              alt={`${employee.name}`}
              className="w-36 h-36 rounded-full shadow-xl border-4 border-gray-700"
            />
            <h2 className="text-3xl font-bold mt-4 text-orange-200">{employee.name}</h2>
          </div>

          <div className="mt-12">
            <div className="flex items-center mb-4">
              <UserIcon className="h-6 w-6 text-blue-500 mr-3" />
              <span className="text-lg font-semibold">Name: {employee.name} </span>
            </div>
            <div className="flex items-center mb-4">
              <EnvelopeIcon className="h-6 w-6 text-yellow-500 mr-3" />
              <span className="text-lg font-semibold">Email: {employee.email}</span>
            </div>
            <div className="flex items-center mb-4">
              <CurrencyDollarIcon className="h-6 w-6 text-green-500 mr-3" />
              <span className="text-lg font-semibold">Salary: ${employee.salary}</span>
            </div>
            <div className="flex items-center mb-4">
              <CalendarIcon className="h-6 w-6 text-orange-500 mr-3" />
              <span className="text-lg font-semibold">Available Days: {employee.available_days}</span>
            </div>
            <div className="flex items-center mb-4">
              <GlobeAltIcon className="h-6 w-6 text-indigo-500 mr-3" />
              <span className="text-lg font-semibold">Distance to Office: {employee.distance}</span>
            </div>
            <div className="flex items-center mb-4">
              <UsersIcon className="h-6 w-6 text-teal-500 mr-3" />
              <span className="text-lg font-semibold">Team: {employee.team}</span>
            </div>
            <div className="flex items-center mb-4">
              <PencilSquareIcon className="h-6 w-6 text-pink-500 mr-3" />
              <span className="text-lg font-semibold">Position: {employee.position}</span>
            </div>
            <div className="flex items-center mb-4">
              <DevicePhoneMobileIcon className="h-6 w-6 text-purple-500 mr-3" />
              <span className="text-lg font-semibold">Age: {employee.age}</span>
            </div>
            <div className="flex items-center mb-4">
              <HeartIcon className="h-6 w-6 text-red-500 mr-3" />
              <span className="text-lg font-semibold">Medical Condition: {employee.medical_condition}</span>
            </div>
            <div className="flex items-center mb-4">
              <UsersIcon className="h-6 w-6 text-teal-500 mr-3" />
              <span className="text-lg font-semibold">Family: {employee.family}</span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex space-x-4">
        </div>
      </main>
    </div>
  );
};

export default EmployeeDetail;