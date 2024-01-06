/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (status: boolean) => {
    setIsActive(status);
  };
  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <div className="sign-up absolute top-0 h-full transition duration-1000 ease-in-out left-0 w-[50%] ">
        <form className="bg-[#fff] flex items-center justify-center flex-col py-0 px-[40px] h-full">
          <h1>Create Account</h1>
          <div className="my-5 mx-0">
            <a
              href="#"
              className="text-[13px] text-[#ff7141] no-underline mt-[15px] mr-0 mb-[10px] border border-solid border-gray-300 rounded-1/5 inline-flex justify-center items-center mx-3 w-[40px] h-[40px]"
            >
              <i className="fa-brands fa-google-plus-g" />
            </a>
            <a
              href="#"
              className="text-[13px] text-[#ff7141] no-underline mt-[15px] mr-0 mb-[10px] border border-solid border-gray-300 rounded-1/5 inline-flex justify-center items-center mx-3 w-[40px] h-[40px]"
            >
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a
              href="#"
              className="text-[13px] text-[#ff7141] no-underline mt-[15px] mr-0 mb-[10px] border border-solid border-gray-300 rounded-1/5 inline-flex justify-center items-center mx-3 w-[40px] h-[40px]"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              href="#"
              className="text-[13px] text-[#ff7141] no-underline mt-[15px] mr-0 mb-[10px] border border-solid border-gray-300 rounded-1/5 inline-flex justify-center items-center mx-3 w-[40px] h-[40px]"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </div>
          <span className="text-[13px]">
            or use your email for registeration
          </span>
          <input
            className="bg-[#eee] border-none my-[8px] mx-0 py-[10px] px-[15px] text-[13px] rounded-[8px] w-full outline-none"
            type="text"
            placeholder="Name"
          />
          <input
            className="bg-[#eee] border-none my-[8px] mx-0 py-[10px] px-[15px] text-[13px] rounded-[8px] w-full outline-none"
            type="email"
            placeholder="Email"
          />
          <input
            className="bg-[#eee] border-none my-[8px] mx-0 py-[10px] px-[15px] text-[13px] rounded-[8px] w-full outline-none"
            type="password"
            placeholder="Password"
          />
          <button className="bg-[#ff7141] text-[#fff] text-[13px] py-[10px] px-[45px] border border-solid border-transparent border-1">
            Sign Up
          </button>
        </form>
      </div>
      <div className="sign-in absolute top-0 h-full transition duration-1000 ease-in-out left-0 w-[50%] z-[2]">
        <form className="bg-[#fff] flex items-center justify-center flex-col p-0 px-[40px] h-full">
          <h1>Sign In</h1>
          <div className="my-5 mx-0">
            <a
              href="#"
              className="text-[13px] text-[#ff7141] no-underline mt-[15px] mr-0 mb-[10px] border border-solid border-gray-300 rounded-1/5 inline-flex justify-center items-center mx-3 w-[40px] h-[40px]"
            >
              <i className="fa-brands fa-google-plus-g" />
            </a>
            <a
              href="#"
              className=" text-[13px] text-[#ff7141] no-underline mt-[15px] mr-0 mb-[10px] border border-solid border-gray-300 rounded-1/5 inline-flex justify-center items-center mx-3 w-[40px] h-[40px]"
            >
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a
              href="#"
              className="text-[13px] text-[#ff7141] no-underline mt-[15px] mr-0 mb-[10px] border border-solid border-gray-300 rounded-1/5 inline-flex justify-center items-center mx-3 w-[40px] h-[40px]"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              href="#"
              className="text-[13px] text-[#ff7141] no-underline mt-[15px] mr-0 mb-[10px] border border-solid border-gray-300 rounded-1/5 inline-flex justify-center items-center mx-3 w-[40px] h-[40px]"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </div>
          <span className="text-[13px]">or use your email password</span>
          <input
            className="bg-[#eee] border-none my-[8px] mx-0 py-[10px] px-[15px] text-[13px] rounded-[8px] w-full outline-none"
            type="email"
            placeholder="Email"
          />
          <input
            className="bg-[#eee] border-none my-[8px] mx-0 py-[10px] px-[15px] text-[13px] rounded-[8px] w-full outline-none"
            type="password"
            placeholder="Password"
          />
          <a
            href="#"
            className="icon text-[13px] text-[#ff7141] no-underline mt-[15px] mr-0 mb-[10px]"
          >
            Forget Your Password?
          </a>
          <button className="bg-[#ff7141] text-[#fff] text-[13px] py-[10px] px-[45px] border border-solid border-transparent border-1">
            Sign In
          </button>
        </form>
      </div>
      <div className="toggle-container ">
        <div className="toggle bg-[#ff7141] text-white relative left-[-100%] h-full w-[200%] transform translate-x-0 transition-all duration-700 ease-in-out">
          <div className="toggle-panel absolute w-1/2 h-full flex justify-center items-center flex-col py-0 px-[30px] text-center top-0 transform translate-x-0 transition-all duration-700 ease-in-out toggle-left">
            <h1>Welcome Back!</h1>
            <p className="text-[14px] leading-5 tracking-tight my-3 mx-0">
              Enter your personal details to come to my website
            </p>
            <button
              className="bg-[#ff7141] text-[#fff] text-[13px] py-[10px] px-[45px] border border-solid border-transparent border-1 bg-transparent "
              id="login"
              onClick={() => handleClick(false)}
            >
              Sign In
            </button>
          </div>
          <div className="toggle-panel absolute w-1/2 h-full flex justify-center items-center flex-col py-0 px-[30px] text-center top-0 transform translate-x-0 transition-all duration-700 ease-in-out   toggle-right">
            <h1>Hi, Guy!</h1>
            <p className="text-[14px] leading-5 tracking-tight my-3 mx-0">
              Register with your personal details to come to my website
            </p>
            <button
              className="bg-transparent text-[#fff] text-[13px] py-[10px] px-[45px] border border-solid border-transparent border-1"
              id="register"
              onClick={() => handleClick(true)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
