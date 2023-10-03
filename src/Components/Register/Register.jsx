import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Register = () => {
  return (
    <div>
      <div className=" bg-base-100 ">
        <div className="mt-8">
          <Navbar></Navbar>
        </div>
        <div className="hero mt-6 ">
          <div className="card flex-shrink-0 w-full max-w-xl  shadow-2xl ">
            <h2 className="text-xl text-center pt-3 my-3 font-bold">
            Register your account
            </h2>
            <hr className="mx-auto w-96" />
            <form className="card-body ml-14 mr-20">
            <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text font-semibold">
                    Your Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered bg-base-200"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text font-semibold">
                    Email address
                  </span>
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
                <label className="label" htmlFor="password">
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
                <div className="flex mt-3 gap-2"><input type="checkbox" name="terms" id="terms" required />
                <label htmlFor="terms">Accept <Link className="text-neutral-700 font-semibold">Terms & policy</Link></label></div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
