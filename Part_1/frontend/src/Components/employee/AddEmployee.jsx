import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    available_days: "",
    team: "",
    position:'',
    age: '',
    distance: "",
    family: "",
    medical_condition: "",
    image: "",
    category_id: "",

  });

  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', employee.name);
    formData.append('email', employee.email);
    formData.append('password', employee.password);
    formData.append('salary', employee.salary);
    formData.append('available_days', employee.available_days);
    formData.append('team', employee.team);
    formData.append('position', employee.position);
    formData.append('age', employee.age);
    formData.append('distance', employee.distance);
    formData.append('family', employee.family);
    formData.append('medical_condition', employee.medical_condition);
    formData.append('image', employee.image);
    formData.append('category_id', employee.category_id);

    axios.post('http://localhost:3000/auth/add_employee', formData)
      .then(result => {
        if (result.data.Status) {
          navigate('/dashboard/employee');
        } else {
          alert(result.data.Error);
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-5 rounded-lg bg-white border shadow-lg w-[820px] overflow-y-auto max-h-[85vh]">
        <h3 className="text-center text-3xl font-semibold text-gradient bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
          Add Employee
        </h3>
        <form className="row g-3" onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="col-12">
            <h4 className="text-lg font-semibold mb-3">Personal Information</h4>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputName" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                  id="inputName"
                  placeholder="Enter Name"
                  onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                  id="inputEmail4"
                  placeholder="Enter Email"
                  autoComplete="off"
                  onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputAge" className="form-label">Age</label>
                <input
                  type="text"
                  className="form-control rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                  id="inputAge"
                  placeholder="Enter Age"
                  onChange={(e) => setEmployee({ ...employee, age: e.target.value })}
                />
              </div>
            </div>
          </div>
  
          {/* Employment Details */}
          <div className="col-12">
            <h4 className="text-lg font-semibold mb-3">Employment Details</h4>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputSalary" className="form-label">Salary</label>
                <input
                  type="text"
                  className="form-control rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                  id="inputSalary"
                  placeholder="Enter Salary"
                  onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputAvailableDays" className="form-label">Available Days</label>
                <input
                  type="text"
                  className="form-control rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                  id="inputAvailableDays"
                  placeholder="Enter Available Days"
                  onChange={(e) => setEmployee({ ...employee, available_days: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputDistance" className="form-label">Distance to Office</label>
                <input
                  type="text"
                  className="form-control rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                  id="inputDistance"
                  placeholder="Enter Distance to Office"
                  onChange={(e) => setEmployee({ ...employee, distance: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputTeam" className="form-label">Team</label>
                <input
                  type="text"
                  className="form-control rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                  id="inputTeam"
                  placeholder="Enter Team"
                  onChange={(e) => setEmployee({ ...employee, team: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPosition" className="form-label">Position</label>
                <input
                  type="text"
                  className="form-control rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                  id="inputPosition"
                  placeholder="Enter Position"
                  onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
                />
              </div>
            </div>
          </div>
  
          {/* Health and Family */}
          <div className="col-12">
            <h4 className="text-lg font-semibold mb-3">Health and Family</h4>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputMedicalCondition" className="form-label">Medical Condition</label>
                <input
                  type="text"
                  className="form-control rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                  id="inputMedicalCondition"
                  placeholder="Enter Medical Condition"
                  onChange={(e) => setEmployee({ ...employee, medical_condition: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputFamily" className="form-label">Family</label>
                <input
                  type="text"
                  className="form-control rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                  id="inputFamily"
                  placeholder="Enter Family Details"
                  onChange={(e) => setEmployee({ ...employee, family: e.target.value })}
                />
              </div>
            </div>
          </div>
  
          {/* Other */}
          <div className="col-12">
            <h4 className="text-lg font-semibold mb-3">Other</h4>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="category" className="form-label">Category</label>
                <select 
                  name="category" 
                  id="category" 
                  className="form-select rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                  onChange={(e) => setEmployee({ ...employee, category_id: e.target.value })}
                >
                  <option value="">Select Category</option>
                  {category.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="inputGroupFile01">Select Image</label>
                <input
                  type="file"
                  className="form-control rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition"
                  id="inputGroupFile01"
                  name="image"
                  onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input 
                  type="password" 
                  id="inputPassword4"
                  name='password' 
                  placeholder='Enter Password'
                  onChange={(e) => setEmployee({ ...employee, password: e.target.value })}
                  className='form-control rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 transition'
                />
              </div>
            </div>
          </div>
  
          <div className="col-12 mt-8 mb-[-15px]">
            <button type="submit" className="btn btn-primary w-100 py-2 bg-gradient-to-r from-cyan-500 to-blue-900 text-white rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-blue-500 hover:to-green-400 transition-transform transform hover:scale-105">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}  
export default AddEmployee;
