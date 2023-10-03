import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";

const RightSideNav = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold text-center md:text-left">Login with</h1>
        <div className="border border-sky-400 rounded-lg mt-3">
          <button className="btn text-sky-400 w-full">
            <AiOutlineGoogle className="text-xl"></AiOutlineGoogle>Login with
            Google
          </button>
        </div>
        <div className="border border-black rounded-lg mt-3">
          <button className="btn text-black w-full">
            <AiFillGithub className="text-xl"></AiFillGithub>Login with
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
