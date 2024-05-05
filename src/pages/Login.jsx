import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeForm, setActiveForm] = useState("login");
  const [buttonText, setButtonText] = useState("Claim your link: Skillify/");
  const [showSignupDetails, setShowSignupDetails] = useState(false);

  const handleSignupClick = () => {
    setActiveForm("signup");
  };
  const handleLoginClick = () => {
    setActiveForm("login");
  };

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // Handle login logic here (e.g., send login request to backend)
  //     console.log('Login:', username, password);
  // };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const isEmailFilled = email.trim() !== "";

  const handleUsernameChange = (event) => {
    const username = event.target.value;
    setUsername(username);
    setButtonText(`Claim your link: Skillify/${username}`);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      id: Math.random().toString(36).substring(2, 15),
      username,
      email,
      password,
    };

    // setUsers([...users, newUser]);
    // Pass the new user object (without password) to UserList component (assuming connection)
    setUsername("");
    setEmail("");
    setPassword("");

    console.log("Username claimed successfully!");
    setShowSignupDetails(true);
  };

  // Implement functions for email/password and Google sign-up (replace with your actual logic)
  const handleEmailPasswordSignup = async (event) => {
    event.preventDefault();
    console.log("Email/password sign-up:", { username, email, password });
    // Implement your backend logic for email/password sign-up
  };

  const handleGoogleSignup = () => {
    console.log("Google sign-up initiated");
    // Implement your logic for Google sign-up
  };

  return (
    <>
      {activeForm !== "signup" && (
        <div className="popup flex flex-col justify-center ml-2 h-300 ">
          <div className="text-white text-3xl font-semibold font-['Inter'] mt-2">
            Log in to your account
          </div>
          <div className="mt-5 text-white text-xl font-normal font-['Inter']">
            Good to have you back!
          </div>
          <div className="flex mt-8">
            <input
              type="email"
              onChange={handleEmailChange}
              className="rounded-xl mr-3 px-3 py-2 text-gray-900 text-sm font-normal font-['Inter']"
              placeholder="Email address"
            />
            <div>
              <input
                type="password"
                className="rounded-xl mr-3 px-3 py-2 text-gray-900 text-sm font-normal font-['Inter']"
                placeholder="Password"
              />
              <button className="rounded-xl text-white text-m font-semibold font-['Inter'] underline hover:text-gray-300">
                Show
              </button>
            </div>
          </div>
          <button
            type="reset"
            className="pt-4 w-30 w-28 text-[#b1b1b1] text-sm font-normal font-['Inter'] underline leading-none"
          >
            Reset Password
          </button>
          <div className="pt-6 text-white text-center text-sm font-semibold font-['Inter']">
            OR
          </div>
          <button
            className="bg-[#163abbf0] flex rounded-lg mt-6 p-2 px-36 text-center text-white text-sm font-semibold leading-tight"
            disabled={!isEmailFilled}
          >
            {isEmailFilled ? null : (
              <img
                src="./images/google.png"
                alt="Google Logo"
                className="mr-2 mt-0.5 h-6 w-6 align-middle justify-center"
              />
            )}
            {isEmailFilled ? (
              <p className="text-lg pl-14 text-center">Log in</p>
            ) : (
              <p className="text-lg">Sign in with Google</p>
            )}
          </button>
          <div className=" pt-5 pb-10 text-center text-white text-sm font-normal font-['Inter'] leading-none">
            <button className="" onClick={handleSignupClick}>
              Not registered? Create account
            </button>
          </div>
        </div>
      )}

      {activeForm === "signup" && (
        <div className="">
          <div className="text-white text-3xl font-bold font-['Inter'] leading-10 px-10 mt-5">
            Claim your unique link here!
          </div>
          <div className=" text-gray-300 text-center text-m font-['Inter'] leading-9 px-10 py-0">
            The good ones are still available!
          </div>

          {!showSignupDetails && (
            <div className="mt-10  rounded-lg">
              <form onSubmit={handleSubmit}>
                <div className="flex border border-gray-700 rounded-xl py-1 text-white text-sm font-normal font-['Inter'] mx-20">
                  <div className="pl-2 content-center text-white text-base font-normal font-['Inter'] ">
                    Skillify/
                  </div>
                  <input
                    type="text"
                    className="p-3 bg-white ml-2 text-stone-400 border-white rounded-lg text-base font-normal font-['Inter']"
                    placeholder="your-name"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <button
                  className="py-2 px-2 mt-3 mx-auto bg-blue-700 hover:bg-blue-900 text-white font-bold rounded-lg shadow-md block"
                  type="submit"
                >
                  {buttonText}
                </button>
              </form>
            </div>
          )}
          {showSignupDetails && (
            <div class="mt-10 bg-gray-900 rounded-lg px-20  max-w-md mx-auto">
              <form onSubmit={handleEmailPasswordSignup} class="space-y-4">
                <div class="flex flex-col">
                  <input
                    type="email"
                    class="p-3 bg-gray-200 text-gray-700 text-base font-normal font-inter placeholder-gray-500 rounded-lg"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <input
                    type="password"
                    class="p-3 bg-gray-200 text-gray-700 text-base font-normal font-inter placeholder-gray-500 rounded-lg mt-4"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <button
                  class="py-2 px-4 w-full bg-[#0038FF] hover:bg-blue-800 text-white font-bold rounded-lg shadow-md mt-4"
                  onClick={handleGoogleSignup}
                >
                  Sign up with Google
                </button>
              </form>
            </div>
          )}

          <div className="py-10 px-15">
            <div className="border-t border-gray-600 w-full"></div>
            <div className="flex justify-center pt-6">
              <button
                onClick={handleLoginClick}
                className="text-neutral-500 font-normal font-['Inter'] leading-none"
              >
                Click here to log in
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
