import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser,addUser } from "../Utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useEffect } from "react";
import {onAuthStateChanged} from 'firebase/auth'


export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HandleSignOut = () => {
    // dispatch(removeUser())
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        // navigate("/errorpage")
      });
  };
  useEffect(() => {
   const unsubscribe=   onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        // console.log(uid, email);
        dispatch(addUser({ uid: uid, email: email }));
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
        // ...
      }
    }); 
    return ()=>{unsubscribe()}
  }, []);
  return (
    <div className=" w-full absolute z-30 left-0 top-0 bg-gradient-to-b from-black flex justify-between">
      {/* Netflix Logo */}
      <div className="w-48 ml-28">
        <img
          className=""
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>
      {/* Signout Hamburger */}
      <div className="flex m-8 ">
        <img src="" alt="logoImg" />
        <button
          onClick={HandleSignOut}
          className="text-white font-bold cursor-pointer"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};
