//create a sign in/ sign up page, with authentication from firebase, which take user to the main page only when the process is authenticatedimport Header from "./Header"
import { useState } from "react";

const Login = () => {

  const [isSignUpForm, setisSignUpForm] = useState(true);

  const toggleSignUpForm=()=>{
    setisSignUpForm(!isSignUpForm);
  }

  return (
    <div>
        <div className="absolute w-screen h-screen overflow-hidden">
          <img src="https://www.mychoize.com/_next/static/media/login_bg.9b366799.jpg"
           />
        </div>
        <form
          onSubmit={(e)=>e.preventDefault}
          className="bg-black text-white rounded-lg bg-opacity-65 absolute p-12 w-3/12 mx-auto my-36 right-0 left-0">

          <h1 className="font-bold text-3xl py-4">{isSignUpForm ? "Sign Up" : "Sign In"}</h1> 

          <p className="p-4 text-gray-300 hover:*:text-white" onClick={toggleSignUpForm}>{isSignUpForm ? "Already a user? Sign In now." : "New to CarGo? Sign up now."}</p>

          {isSignUpForm &&(
          <input
          type="text"
          placeholder="Name"
          className="p-4 my-2 font-bold w-full bg-gray-700 hover:border-white bg-opacity-80 text-white"
          />
          )}

          <input
          type="text"
          placeholder="E-mail"
          className="p-4 my-2 font-bold w-full bg-gray-700 bg-opacity-80 text-white"
          />

          <input
          type="password"
          placeholder="Enter Password"
          className="p-4 my-2 font-bold w-full bg-gray-700 hover:border-white bg-opacity-80 text-white"
          />

          {isSignUpForm &&(
          <input
          type="password"
          placeholder="Confirm Password"
          className="p-4 my-2 font-bold w-full bg-gray-700 hover:border-white bg-opacity-80 text-white"
          />
          )}

          <button
            className="p-4 my-6 text-black font-bold bg-white hover:bg-gray-400 hover:text-black w-full hover:*:cursor-pointer">
            {isSignUpForm ? "Sign Up" : "Sign In"}
          </button>

        </form>
    </div> 
  )
}

export default Login