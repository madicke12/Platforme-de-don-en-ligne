import { useEffect, useState } from 'react';
import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom';
import axios from 'axios';



const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [usertype ,setType]= useState();

  const type = localStorage.getItem('user').replace(/"/g, '') === 'organisation' ? 'organisation' : 'donateur'
useEffect(()=>{
  setType(type)
},[type])



  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async ()=>{
    const res = await axios.get('http://localhost:8000/logout' ,{withCredentials:true})
    window.location.href ='http://localhost:5173'
    console.log(res)
}
  return (
    <div className="relative ">
      <button
        className="flex items-center focus:outline-none"
        onClick={toggleDropdown}
      >
        <img
          className="w-8 h-8 rounded-full"
          src={logo}
          alt="Profile"
        />
        <span className="ml-2 text-gray-800">John Doe</span>
      </button>

      {isOpen && (
        <div className="absolute   right-1 mt-3 py-2 w-48 bg-white rounded-lg shadow-lg">
          <Link
            to={`profil/${usertype}`}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 no-underline shadow-md"
          >
            Mon profil
          </Link>
          <button
            to="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 "
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
