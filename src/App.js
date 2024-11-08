import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Dashboard from "./components/pages/dashboard/Dashboard";
import store from "./utils/store/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Allusers from "./components/pages/allusers/Allusers";
import ViewTask from "./components/pages/todoTask/ViewTask";
import Skills from "./components/pages/skillsList/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/userlist",
    element: <Allusers />,
  },
  {
    path: "/todolist",
    element: <ViewTask />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  );
}

export default App;
