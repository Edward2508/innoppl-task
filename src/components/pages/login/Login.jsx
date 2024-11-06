import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import loginUser from "../../../api/login";
import "./Login.css";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { username, password } = data;
    loginUser(username, password)
      .then((response) => {
        console.log("Login successful:", response);
        const { username, accessToken } = response;
        localStorage.setItem("username", username);
        localStorage.setItem("authToken", accessToken);
        toast.success("Login Successful!");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Login error:", error);
        toast.error("Login Failed. Please enter valid username / password");
      });
  };

  return (
    <div className="container-fluid">
      <div className="row login-container">
        <div className="col-6 d-flex justify-content-center align-items-center login-img">
          {/* <img src="../../images/login.png" alt="login-image" /> */}
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div className="login-form w-75">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="login-form-list ps-5 py-5"
            >
              <h3 className="text-center pe-5 pb-3">Welcome</h3>

              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  {...register("username", {
                    required: "User  Name is required",
                  })}
                  className={`form-control w-75 ${
                    errors.username ? "is-invalid" : ""
                  }`}
                  id="username"
                />
                {errors.username && (
                  <p className="text-danger error-message">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`form-control w-75 ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  id="password"
                />
                {errors.password && (
                  <p className="text-danger error-message">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="login-btns d-flex justify-content-between">
                <button type="submit" className="btn" id="login-btn-submit">
                  Login
                </button>
                <Link className="new-user-link pe-5 me-5 pt-2" to="/register">
                  New User?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
