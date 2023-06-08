
import { NavLink } from "react-router-dom";
import logo from '../assets/logo1.jpg' 
import { useState } from "react";



 
const Navaccuil=()=> {
  const [isopen,setIsopen]= useState(null)
 

 
  return (
    <>
      <header className=" bg-gray-200 shadow-md  sm:flex sm:justify-between">
      <div className="  item-center flex  flex-shrink-0 justify-between">
        <div className="ml-4 p-1">
        <NavLink 
          to={'/'} 
          className={'flex no-underline text-black'}>
            <img src={logo} alt="" className="rounded-full h-12  w-12 " />
              <span className="font-bold p-2 text-2xl">
                WALLU
              </span>
          </NavLink>
        </div>
          <button onClick={()=>setIsopen(prev => !prev)} className=" sm:hidden">
            {isopen 
            ?
             <svg  className={`w-7 h-7 mr-5`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            :
            <svg className={`w-7 h-7 mr-5`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
            }  
          </button>
        </div>
        <nav className={` mr-7  ${isopen ? 'hidden' : null} ml-2  sm:flex flex-shrink-0 `}>
            <NavLink 
              to={''}
              className={' rounded-sm no-underline'}
             >
                <button 
                  className="bg-white-800 p-2 text-black font-bold rounded-sm hover:bg-blue-400 mr-2 block my-2">
                Notre mission
                </button>
            </NavLink>
            <NavLink 
              to={''}
              className={' rounded-sm no-underline'}
              
              >
                <button 
                  className="bg-blue-800 p-2 text-white font-bold rounded-sm hover:bg-blue-400 mr-2 block my-2">
                  Inscrire mon association
                </button>
            </NavLink>
            <NavLink 
              to={''}
              className={' rounded-sm no-underline'}
              >
              <button 
                className=" border-1 border-blue-200 p-2 text-black font-bold rounded-sm hover:bg-blue-200 :text-white block my-2" >
                  Faire un don
              </button>
            </NavLink>
            
        </nav>
      </header>

    </>
  );
}

export default Navaccuil;