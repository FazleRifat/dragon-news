import { Link, NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import loginLogo from "../../../assets/user.png"
import { useContext, useState } from "react";
import { AuthContext } from "../../../Authprovider/AuthProvider";

const Navbar = () => {
    const [show,setShow] = useState(false)
    const {user,handleLogout} = useContext(AuthContext)
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
    
    <div className="navbar bg-base-100 flex items-center">
      <div className="navbar-start">
        <div className="dropdown md:hidden" onClick={()=> setShow(!show)}>
            {show?<AiOutlineClose className="text-4xl"></AiOutlineClose > :<FaBars className="text-4xl"></FaBars>}
            <ul className={`absolute bg-base-200 rounded-lg w-36 font-bold top-14 left-0  ${show? ' ':'hidden'}`}>
                {
                    navlinks
                }
            </ul>
        </div>
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
        {
          user?<a className="btn btn-neutral w-24 rounded-sm" onClick={handleLogout} >Logout</a>:<a className="btn btn-neutral w-24 rounded-sm" ><Link to='/login'>Login</Link></a>
        }
      </div>
    </div>
  );
};

export default Navbar;
