// src/components/Layout.js
import React from "react";
import Sidebar from "./components/pages/dashboard/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />{" "}
    </>
  );
};

export default Layout;
