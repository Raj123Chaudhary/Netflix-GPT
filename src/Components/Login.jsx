import { useRef, useState } from "react";
import { Header } from "./Header";
// import {validForm} from ../Utils/valid.js
import { validForm } from "../Utils/valide";
import { auth } from "../Utils/firebase";

import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [IsSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const toggleSignIN = () => {
    setIsSignIn(!IsSignIn);
  };
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    // validateForm
    
    const message = validForm(email.current.value, password.current.value);

    setErrorMsg(message);
    if (message) {
      return;
    }
   

    // signup/singIN logic
    if (!IsSignIn) {
   
      //signUP Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorCode, errorMessage);
          setErrorMsg(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // signIN Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    // console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode+"-"+errorMessage)
  });

    
    }
  };
  return (
    <div className="h-full w-full ">
      <Header />
      <div className="absolute left-0 top-0 z-10">
        <img
          className="h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_medium.jpg"
          alt=""
        />
        <div className="absolute top-0 z-20 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action=""
        className="w-4/12 rounded-lg z-40 relative bg-black opacity-80   px-16 py-12   mx-auto my-28 left-0 top-0"
      >
        <h1 className="text-white text-3xl font-bold my-3">
          {IsSignIn ? "Sign IN" : "Sign Up"}
        </h1>
        {!IsSignIn && (
          <input
            className="w-full rounded-md p-2 my-2"
            type="text"
            name=""
            id="firstName"
            placeholder="First Name"
          />
        )}

        {!IsSignIn && (
          <input
            className="w-full rounded-md p-2 my-2"
            type="text"
            name=""
            id="SecondName"
            placeholder="Second Name"
          />
        )}

        <input
          ref={email}
          className="my-2 rounded-md p-2 w-full"
          type="email"
          placeholder="Username"
        />
        <input
          ref={password}
          className="my-2 w-full rounded-md p-2"
          type="password"
          placeholder="password"
        />
        <p className="text-lg font-bold text-red-500">{errorMsg}</p>
        <button
          onClick={handleSubmit}
          className="bg-red-600 rounded-md text-center text-lg font-semibold p-2 w-full my-2 text-white"
        >
          {IsSignIn ? "Sign IN" : "Sign UP"}
        </button>
        <p className="text-lg text-white my-2">
          New to netflix ?{" "}
          <span onClick={toggleSignIN} className="cursor-pointer">
            {IsSignIn ? "Sign Up" : "Sign In"}
          </span>{" "}
        </p>
      </form>
    </div>
  );
};
export { Login };
