import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
    const {handleLogin} = useContext(AuthContext)
    const handleSubmit =(e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        handleLogin(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            toast.error(error.message);
        })
    }
  return (
    <div className=" bg-base-100 ">
      <div className="mt-8">
        <Navbar></Navbar>
      </div>
      <div className="hero mt-6 ">
        <div className="card flex-shrink-0 w-full max-w-xl  shadow-2xl ">
          <h2 className="text-xl text-center pt-3 my-3 font-bold">
            Login your account
          </h2>
          <hr className="mx-auto w-96" />
          <form className="card-body ml-14 mr-20" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label" htmlFor="emal">
                <span className="label-text font-semibold">Email address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered bg-base-200"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered bg-base-200"
                name="password"
                id="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Login</button>
            </div>
          </form>
          <p className="text-sm text-center pb-7 ">Dont have an account? <Link to="/register" className="text-error">Register</Link></p>
          <Toaster></Toaster>
        </div>
      </div>
    </div>
  );
};

export default Login;
