import React from "react";
import BaseLogo from "../../assets/base.svg";
import GithubLogo from "../../assets/github.svg";
import GoogleLogo from "../../assets/google.svg";
import AppleLogo from "../../assets/apple.svg";

import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AuthContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { setUser } = useAppContext();
  const googleLogin = useGoogleLogin({
    flow: "implicit",
    onSuccess: async (tokenResponse) => {
      fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setUser(data);
          handleLogin()
        });
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  const handleLogin = () => {
    navigate("/upload");
  };
  return (
    <div className=" dark:bg-gray-900 h-screen bg-[#F8FAFF]">
      <div className="flex justify-center h-full">
        <div className="hidden h-full bg-[#605BFF] lg:block lg:w-1/2 transform -skew-x-12 -ml-[105px]">
          <div className="transform skew-x-12">
            <img
              src={BaseLogo}
              className="w-20 h-20 ml-16 mt-14"
              alt="Base logo"
            />
          </div>

          <div className="flex items-center justify-center transform skew-x-12 my-72">
            <h1 className="text-white text-6xl font-bold">BASE</h1>
          </div>
          <div className="transform skew-x-12 flex justify-center my-96 ml-40">
            <img src={GithubLogo} alt="Base logo" />
          </div>
        </div>
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="w-full max-w-md">
            <h1 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white mb-3">
              Sign In
            </h1>
            <h6 class="text-sm leading-tight tracking-tight text-gray-900 dark:text-white">
              Sign in to your account
            </h6>
            <div className="flex flex-row justify-between items-center my-6">
              <div
                onClick={googleLogin}
                className="flex flex-row justify-center items-center bg-white cursor-pointer px-8 py-2 rounded-xl"
              >
                <img src={GoogleLogo} alt="google-logo" className="w-4 h-4" />
                <p className="text-[#858585] font-normal text-xs ml-3">
                  Sign in with Google
                </p>
              </div>
              <div className="flex flex-row justify-center items-center bg-white cursor-pointer px-8 py-2 rounded-xl ">
                <img src={AppleLogo} alt="apple-logo" className="w-4 h-4" />
                <p className="text-[#858585] font-normal text-xs ml-3">
                  Sign in with Apple
                </p>
              </div>
            </div>
            <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8 bg-white rounded-2xl">
                <form class="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div class="flex items-center">
                    <a
                      href="#"
                      class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
            <p class="text-sm text-center font-light text-gray-500 dark:text-gray-400 mt-5">
              Don’t have an account?{" "}
              <a
                href="#"
                class="font-light text-primary-600 hover:underline dark:text-primary-500"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
