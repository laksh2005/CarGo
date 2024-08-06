//create a sign in/ sign up page, with authentication from firebase, which take user to the main page only when the process is authenticatedimport Header from "./Header"
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(emailRef.current.value, passwordRef.current.value);
    setErrorMessage(message);
    if (message) return;

    if (isSignUpForm) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      ).then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: nameRef.current.value,
        }).then(() => {
          const { email, displayName } = auth.currentUser;
          dispatch(adduser({ email: email, displayName: displayName }));
          navigate("/home");
        }).catch((error) => {
          setErrorMessage(error.message);
        });
      }).catch((error) => {
        setErrorMessage(error.message);
      });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      ).then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
      }).catch((error) => {
        setErrorMessage(error.message);
      });
    }
  };

  const toggleSignUpForm = () => {
    setIsSignUpForm(!isSignUpForm);
  };

  return (
    <div>
      <div className="absolute w-screen h-screen overflow-hidden flex items-center justify-end">
        <img src="https://www.mychoize.com/_next/static/media/login_bg.9b366799.jpg" alt="background" />
      </div>
      <form
        className="bg-black text-white rounded-lg bg-opacity-65 absolute p-12 w-3/12 mx-auto my-20 mr-[300px] right-0 left-0"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">{isSignUpForm ? "Sign Up" : "Sign In"}</h1>
        <p className="p-4 text-gray-300 hover:text-white cursor-pointer" onClick={toggleSignUpForm}>
          {isSignUpForm ? "Already a user? Sign In now." : "New to CarGo? Sign up now."}
        </p>
        
        {isSignUpForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Name"
            className="p-4 my-2 font-bold w-full bg-gray-700 hover:border-white bg-opacity-80 text-white"
          />
        )}
        
        <input
          ref={emailRef}
          type="text"
          placeholder="E-mail"
          className="p-4 my-2 font-bold w-full bg-gray-700 bg-opacity-80 text-white"
        />
        
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter Password"
          className="p-4 my-2 font-bold w-full bg-gray-700 hover:border-white bg-opacity-80 text-white"
        />
        
        {isSignUpForm && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-4 my-2 font-bold w-full bg-gray-700 hover:border-white bg-opacity-80 text-white"
          />
        )}
        
        <button
          onClick={handleButtonClick}
          className="p-4 my-6 text-black font-bold bg-white hover:bg-gray-400 hover:text-black w-full rounded-lg hover:cursor-pointer"
        >
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </button>
        
        {errorMessage && (
          <p className="text-red-500 font-bold mt-4">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Login;

