import React, { useState } from "react";
import Edit from "./Edit";
import "./View.css";
import { userDetails } from "../../../../utils/store/authUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const View = ({ userData }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserData, setCurrentUserData] = useState(userData[0]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedData) => {
    setCurrentUserData(updatedData);
    dispatch(userDetails(updatedData));
    toast.success("Data Updated Successfully!");
    setIsEditing(false);
  };
  const authUserDetails = useSelector((store) => store.user.details);

  const { image, firstName, lastName, age, email, phone, role, birthDate } =
    authUserDetails[0];

  return (
    <>
      {isEditing ? (
        <Edit userData={currentUserData} onSave={handleSave} />
      ) : (
        <div className="container-fluid w-100 d-flex justify-content-center detail-container">
          <div className="detail-box mt-5">
            <div className="d-flex justify-content-end pe-4 pt-3">
              <span
                className="material-icons-outlined"
                style={{ cursor: "pointer" }}
                title="edit"
                onClick={handleEditClick}
              >
                ✏️
              </span>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    src={image}
                    alt="user-profile"
                    className="user-profile-img"
                  />
                  <br />
                  <p className="userName">{`${firstName} ${lastName}`}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <div className="userDetails d-flex flex-column align-items-center">
                    <p className="fs-6">DOB: {birthDate}</p>
                    <p className="fs-6">Age: {age}</p>
                    <p className="fs-6">Phone: {phone}</p>
                    <p className="fs-6">Email: {email}</p>
                    <p className="fs-6">Role: {role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default View;
