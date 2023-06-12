import {  NavLink } from "react-router-dom";
import logo from "../assets/logo1.jpg";
import { useState } from "react";


const Navbar = () => {
  const [isopen, setIsopen] = useState(null);

  return (
    <header className={`shadow-md  sm:flex sm:justify-between items-center`}>
      <div className=" mx-4 px-4">
        <div className="flex  justify-between h-16">
          <div className="flex items-center">
            <NavLink to={"/"}  className={`flex no-underline text-black `}>
              <img src={logo} alt="" className="rounded-full h-12  w-12 " />
              <span className="font-bold p-2 text-2xl">WALLU</span>
            </NavLink>
          </div>
          <button
            onClick={() => setIsopen((prev) => !prev)}
            className=" sm:hidden"
          >
            {isopen ? (
              <svg
                className={`w-7 h-7 mr-3`}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            ) : (
              <svg
                className={`w-7 h-7 mr-3`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
              </svg>
            )}
          </button>
          
        </div>
        
      </div>
      
      <div
        className={`sm:flex flex-shrink-0 sm:mr-12 ml-9 ${
          isopen ? "hidden" : null
        }`}
      >
        <NavLink
          to="/"
          className="text-black font-bold hover:shadow-lg  px-3 py-2 block rounded-md no-underline"
        >
          Accueil
        </NavLink>
        <NavLink
          to="/projects"
          className="text-black font-bold hover:shadow-lg  px-3 py-2 block rounded-md no-underline"
        >
          Projets
        </NavLink>
        <NavLink
          to="/donate"
          className="text-black font-bold hover:shadow-lg  px-3 py-2 block rounded-md no-underline"
        >
          Faire un don
        </NavLink>
        <NavLink
          to="/login"
          className="text-black font-bold hover:shadow-lg  px-3 py-2 block  rounded-md no-underline"
        >
          Se connecter
        </NavLink>
        
      </div>
      
    </header>
  );
};

export default Navbar;
