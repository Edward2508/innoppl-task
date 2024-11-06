import "./Sidebar.css";
import { Link } from "react-router-dom";
import logo from "../../../../images/service.png";
import { useDispatch } from "react-redux";
import { logout } from "../../../../utils/store/authUserSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
  };
  return (
    <div className="d-flex side-bar ">
      <nav className="sidebar border-right">
        <div className="sidebar-header p-3 d-flex align-items-center">
          <img src={logo} alt="logo" className="logo-img" />
          <p className="logo-name p-0 m-0 ps-3">Innoppl</p>
        </div>
        <ul className="nav flex-column align-items-center">
          <li className="nav-item">
            <Link className="nav-link active text-dark" to="/dashboard">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/userlist">
              All Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/todolist">
              Todo Management
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
