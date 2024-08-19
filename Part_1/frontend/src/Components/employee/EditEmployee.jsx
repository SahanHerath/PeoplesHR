import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    salary: "",
    team: "",
    position: "",
    category_id: "",
    available_days: "",
    distance: "",
    conflicts: "",
    medical_condition: "",
    family: "",
    image: "",
  });
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/auth/category')
      .then(result => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      }).catch(err => console.log(err));

    axios.get('http://localhost:3000/auth/employee/' + id)
      .then(result => {
        setEmployee({
          ...employee,
          name: result.data.Result[0].name,
          email: result.data.Result[0].email,
          salary: result.data.Result[0].salary,
          team: result.data.Result[0].team,
          position: result.data.Result[0].position,
          category_id: result.data.Result[0].category_id,
          available_days: result.data.Result[0].available_days,
          distance: result.data.Result[0].distance,
          conflicts: result.data.Result[0].conflicts,
          medical_condition: result.data.Result[0].medical_condition,
          family: result.data.Result[0].family,
          image: result.data.Result[0].image,
        });
      }).catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:3000/auth/edit_employee/' + id, employee)
      .then(result => {
        if (result.data.Status) {
          navigate('/dashboard/employee');
        } else {
          alert(result.data.Error);
        }
      }).catch(err => console.log(err));
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <div className="p-8 rounded-lg w-full max-w-3xl bg-gray-900 shadow-xl overflow-y-auto max-h-[82vh]">
        <h3 className="text-4xl font-semibold text-center text-gradient bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
          Edit Employee
        </h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="w-full">
            <label htmlFor="inputName" className="block text-sm font-medium text-gray-400 mb-1">
              Name
            </label>
            <input
              type="text"
              id="inputName"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
              placeholder="Enter Name"
              value={employee.name}
              onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
            />
          </div>

          <div className="w-full">
            <label htmlFor="inputEmail" className="block text-sm font-medium text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              id="inputEmail"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
              placeholder="Enter Email"
              autoComplete="off"
              value={employee.email}
              onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
            />
          </div>

          <div className="w-full">
            <label htmlFor="inputSalary" className="block text-sm font-medium text-gray-400 mb-1">
              Salary
            </label>
            <input
              type="text"
              id="inputSalary"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
              placeholder="Enter Salary"
              autoComplete="off"
              value={employee.salary}
              onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
            />
          </div>

          <div className="w-full">
            <label htmlFor="inputTeam" className="block text-sm font-medium text-gray-400 mb-1">
              Team
            </label>
            <input
              type="text"
              id="inputTeam"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
              placeholder="Enter Team"
              autoComplete="off"
              value={employee.team}
              onChange={(e) => setEmployee({ ...employee, team: e.target.value })}
            />
          </div>

          <div className="w-full">
            <label htmlFor="inputPosition" className="block text-sm font-medium text-gray-400 mb-1">
              Position
            </label>
            <input
              type="text"
              id="inputPosition"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
              placeholder="Enter Position"
              autoComplete="off"
              value={employee.position}
              onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
            />
          </div>

          <div className="w-full">
            <label htmlFor="inputAge" className="block text-sm font-medium text-gray-400 mb-1">
              Age
            </label>
            <input
              type="text"
              id="inputAge"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
              placeholder="Enter Age"
              value={employee.age}
              onChange={(e) => setEmployee({ ...employee, age: e.target.value })}
            />
          </div>

          <div className="w-full">
            <label htmlFor="inputAvailableDays" className="block text-sm font-medium text-gray-400 mb-1">
              Available Days
            </label>
            <input
              type="text"
              id="inputAvailableDays"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
              placeholder="Enter Available Days"
              value={employee.available_days}
              onChange={(e) => setEmployee({ ...employee, available_days: e.target.value })}
            />
          </div>

          <div className="w-full">
            <label htmlFor="inputDistance" className="block text-sm font-medium text-gray-400 mb-1">
              Distance to Office
            </label>
            <input
              type="text"
              id="inputDistance"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
              placeholder="Enter Distance to Office"
              value={employee.distance}
              onChange={(e) => setEmployee({ ...employee, distance: e.target.value })}
            />
          </div>

          <div className="w-full">
            <label htmlFor="inputMedicalCondition" className="block text-sm font-medium text-gray-400 mb-1">
              Medical Condition
            </label>
            <input
              type="text"
              id="inputMedicalCondition"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
              placeholder="Enter Medical Condition"
              value={employee.medical_condition}
              onChange={(e) => setEmployee({ ...employee, medical_condition: e.target.value })}
            />
          </div>

          <div className="w-full">
            <label htmlFor="inputFamily" className="block text-sm font-medium text-gray-400 mb-1">
              Family
            </label>
            <input
              type="text"
              id="inputFamily"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
              placeholder="Enter Family Details"
              value={employee.family}
              onChange={(e) => setEmployee({ ...employee, family: e.target.value })}
            />
          </div>

          <div className="w-full">
            <label htmlFor="category" className="block text-sm font-medium text-gray-400 mb-1">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
              value={employee.category_id}
              onChange={(e) => setEmployee({ ...employee, category_id: e.target.value })}
            >
              <option value="">Select Category</option>
              {category.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className="w-full mb-4">
            <label htmlFor="inputGroupFile01" className="block text-sm font-medium text-gray-400 mb-1">
              Select Image
            </label>
            <input
              type="file"
              id="inputGroupFile01"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
              name="image"
              onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })}
            />
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-md hover:from-teal-600 hover:to-blue-600 transition-colors"
            >
              Update Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}  

 export default EditEmployee;


// return (
//   <div className="flex justify-center items-center mt-6">
//   <div className="p-8 rounded-lg w-full max-w-3xl bg-gray-900 shadow-xl overflow-y-auto max-h-[82vh]">
//     <h3 className="text-4xl font-semibold text-center text-gradient bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
//       Edit Employee
//     </h3>
//     <form className="space-y-6" onSubmit={handleSubmit}>
//       {[
//         { id: 'inputName', label: 'Name', value: employee.name, type: 'text', placeholder: 'Enter Name' },
//         { id: 'inputEmail', label: 'Email', value: employee.email, type: 'email', placeholder: 'Enter Email' },
//         { id: 'inputSalary', label: 'Salary', value: employee.salary, type: 'text', placeholder: 'Enter Salary' },
//         { id: 'inputTeam', label: 'Team', value: employee.team, type: 'text', placeholder: 'Enter Team' },
//         { id: 'inputPosition', label: 'Position', value: employee.position, type: 'text', placeholder: 'Enter Position' },
//         { id: 'inputAge', label: 'Age', value: employee.age, type: 'text', placeholder: 'Enter Age' },
//         { id: 'inputAvailableDays', label: 'Available Days', value: employee.available_days, type: 'text', placeholder: 'Enter Available Days' },
//         { id: 'inputDistance', label: 'Distance to Office', value: employee.distance, type: 'text', placeholder: 'Enter Distance to Office' },
//         { id: 'inputMedicalCondition', label: 'Medical Condition', value: employee.medical_condition, type: 'text', placeholder: 'Enter Medical Condition' },
//         { id: 'inputFamily', label: 'Family', value: employee.family, type: 'text', placeholder: 'Enter Family Details' },
//       ].map(({ id, label, value, type, placeholder }) => (
//         <div key={id} className="w-full">
//           <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-1">{label}</label>
//           <input
//             type={type}
//             id={id}
//             className="w-full p-3 rounded-md bg-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
//             placeholder={placeholder}
//             value={value}
//             onChange={(e) => setEmployee({ ...employee, [id.replace('input', '').toLowerCase()]: e.target.value })}
//           />
//         </div>
//       ))}
//       <div className="w-full">
//         <label htmlFor="category" className="block text-sm font-medium text-gray-400 mb-1">Category</label>
//         <select
//           name="category"
//           id="category"
//           className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
//           value={employee.category_id}
//           onChange={(e) => setEmployee({ ...employee, category_id: e.target.value })}
//         >
//           <option value="">Select Category</option>
//           {category.map((c) => (
//             <option key={c.id} value={c.id}>{c.name}</option>
//           ))}
//         </select>
//       </div>
//       <div className="w-full">
//         <label htmlFor="inputGroupFile01" className="block text-sm font-medium text-gray-400 mb-1">Select Image</label>
//         <input
//           type="file"
//           id="inputGroupFile01"
//           className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
//           name="image"
//           onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })}
//         />
//       </div>
//       <div className="w-full">
//         <button
//           type="submit"
//           className="w-full py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-md hover:from-teal-600 hover:to-blue-600 transition-colors"
//         >
//           Update Employee
//         </button>
//       </div>
//     </form>
//   </div>
// </div>
// );