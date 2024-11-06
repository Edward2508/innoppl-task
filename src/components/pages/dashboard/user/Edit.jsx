import React, { useState } from "react";
import "./Edit.css";
const Edit = ({ userData, onSave }) => {
  const [formData, setFormData] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="container-fluid w-100 edit-container">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <form
          onSubmit={handleSubmit}
          className="edit-form text-start edit-box p-5"
        >
          <h4 className="text-center">Edit User Details</h4>
          <div className="mb-3 row">
            <div className="col-sm-6">
              <label className="col-form-label">First Name:</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-sm-6">
              <label className="col-form-label">Last Name:</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-6">
              <label className="col-form-label">Age:</label>
              <input
                type="number"
                name="age"
                className="form-control"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-sm-6">
              <label className="col-form-label">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-6">
              <label className="col-form-label">Phone:</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-sm-6">
              <label className="col-form-label">Role:</label>
              <input
                type="text"
                name="role"
                className="form-control"
                value={formData.role}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
