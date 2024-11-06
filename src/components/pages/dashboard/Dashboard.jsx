import React, { useEffect, useState } from "react";
import getUser from "../../../api/getUser";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../../../utils/store/authUserSlice";
import Loader from "../loader/Loader";
import Sidebar from "./sidebar/Sidebar";
import View from "./user/View";

const Dashboard = () => {
  const dispatch = useDispatch();
  const userDetailslist = useSelector((store) => store.user.details);
  console.log("userDetailslist", userDetailslist);
  useEffect(() => {
    const storedAccessToken = localStorage.getItem("authToken");
    getAuthUser(storedAccessToken);
  }, []);
  const getAuthUser = async (token) => {
    try {
      const data = await getUser(token);
      dispatch(userDetails(data));
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  if (userDetailslist.length === 0) {
    return <Loader />;
  }
  return (
    <div className="d-flex">
      <Sidebar />
      <View userData={userDetailslist} />
    </div>
  );
};

export default Dashboard;
