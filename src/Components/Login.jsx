import { useState } from "react";
import { Header } from "./Header";

const Login = () => {

  const[IsSignIn,setIsSignIn]= useState(false)
  const toggleSignIN =()=>{
    setIsSignIn(!IsSignIn)
  }
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
        action=""
        className="w-4/12 rounded-lg z-40 relative bg-black opacity-80   px-16 py-12   mx-auto my-28 left-0 top-0"
      >
        <h1 className="text-white text-3xl font-bold my-3">{IsSignIn?"Sign Up":"Sign In"}</h1>
       {
             IsSignIn && <input className="w-full rounded-md p-2 my-2" type="text" name="" id="" placeholder="First Name" />
       } 
       
          {
             IsSignIn && <input className="w-full rounded-md p-2 my-2" type="text" name="" id="" placeholder="Second Name" />
       } 
       
        <input className="my-2 rounded-md p-2 w-full" type="text" placeholder="Username" />
        <input className="my-2 w-full rounded-md p-2" type="password" placeholder="password" />
        <button className = "bg-red-600 rounded-md text-center text-lg font-semibold p-2 w-full my-2 text-white">{IsSignIn?"Sign Up":"Sign In"}</button>
        <p className="text-lg text-white my-2">New to netflix ? <span onClick={toggleSignIN} className="cursor-pointer">{IsSignIn?"Sign In":"Sign Up"} </span> </p>
      </form>

   
    </div>
  );
};
export { Login };
