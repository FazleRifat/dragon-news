import { AiFillGithub, AiOutlineGoogle,AiOutlineInstagram } from "react-icons/ai";
import { LiaFacebookF } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa6";
const RightSideNav = () => {
  return (
    <div className="h-screen">
      {/* login with */}
      <div>
        <h1 className="text-xl font-semibold text-center md:text-left">
          Login with
        </h1>
        <div className="border border-sky-400 rounded-lg mt-3">
          <button className="btn text-sky-400 w-full">
            <AiOutlineGoogle className="text-xl"></AiOutlineGoogle>Login with
            Google
          </button>
        </div>
        <div className="border border-black rounded-lg mt-3">
          <button className="btn text-black w-full">
            <AiFillGithub className="text-xl"></AiFillGithub>Login with Github
          </button>
        </div>
      </div>
      {/* find us */}
      <div className="mt-9">
        <h1 className="text-xl font-semibold text-center md:text-left">
          Find Us On
        </h1>
        <div className="border">
          <div className="border ">
            <button className="btn bg-base-100 w-full">
              <span className="bg-base-300 p-1 rounded-full">
                <LiaFacebookF className="text-xl text-blue-600"></LiaFacebookF>
              </span>
              <p className="text-xl normal-case">Facebook</p>
            </button>
          </div>
          <div className="border  ">
            <button className="btn bg-base-100 w-full">
              <span className="bg-base-300 p-1 rounded-full">
                <FaTwitter className="text-xl  text-sky-600"></FaTwitter>
              </span>
              <p className="text-xl normal-case">Twitter &nbsp; &nbsp; &nbsp;</p>
            </button> 
          </div>
          <div className="border ">
            <button className="btn bg-base-100 w-full">
              <span className="bg-base-300  p-1 rounded-full">
                <AiOutlineInstagram className="text-xl "></AiOutlineInstagram>
              </span>
              <p className="text-xl normal-case">Facebook</p>
            </button>
          </div>
        </div>
      </div>
      {/* Q-zone */}
      <div>
      <h1 className="text-xl font-semibold text-center md:text-left">
          Q-zone
        </h1>
      </div>
    </div>
  );
};

export default RightSideNav;
