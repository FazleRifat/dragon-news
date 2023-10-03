import { NavLink } from "react-router-dom";
import loginLogo from "../../../assets/user.png"

const Navbar = () => {
  const navlinks = (
    <>
      <li className="text-gray-400">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-400" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-gray-400">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-400" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li className="text-gray-400">
        <NavLink
          to="/career"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-400" : ""
          }
        >
          Career
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown"></div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {
            navlinks
         }
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <img src={loginLogo} className="w-12"></img>
        <a className="btn btn-neutral w-24 rounded-sm">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
