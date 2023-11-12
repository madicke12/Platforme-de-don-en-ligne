import { useEffect, useState } from 'react';
import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom';
import axios from 'axios';



const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [usertype ,setType]= useState();
  const [username ,setUserName] = useState()



  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };



  const handleLogout = async ()=>{
    const res = await axios.get('https://jazzy-creponne-c2ece4.netlify.app/.netlify/functions/logout' ,{withCredentials:true})
    localStorage.setItem('userType',null)

    window.location.href ='https://jazzy-creponne-c2ece4.netlify.app'
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
          src={'data:image/jpeg;base64,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{'test'4807+D5PsYGcA3Mswn0mtd+qt/a+QEjk+G6GhrPfL3LgSAAAAAAAAAAAAAAAAAAHmcVOLTV0znun2PxGjaTpUVKnPYqrblGEuEJRXHk27M6IYsVhoYzDyp1IqcJJqUWrpp8GB+cMxzKtmdXWq1JTa3J7Ix+7FbEapetMfR5VyputhVKrR2tw2yq0lyS3yiue/nfeUQD6AAAAAAAAAABmweMqYGvr0pyhLmnv7GtzXYzCWzRDQavpBJVJ61Gh7bXXqf0ovevtPZyuBYNBc4xWkOLdKVJOMV16y6qhyTW5yfJW5nTqNJUaajFWSMGVZbSynAxo0YKEI7ktrb4tt7W3zZtgAAAAAAAAAAAAAAAAAAAAAAqmk2gWFz2TqJdDVf8SC2SfOcNiffsfaWsAcHzzQTHZQ2+i6aC+vSTn5w9ZeTXaVlq0rPet64rvR+niOzPIsLmv+/hqVR8JSpxcl3S3rwYH5yB2rGejLL8Q7xVak/s1m15TUiOn6JsO31cVWXfGm/gkByYHWIeiWhfbiq3hCC+KZv4T0X4Ci7zdep96qor/zUQOL3sT+SaHY7OWnChKEH/EqXpQtzV1d+CZ2rLdGsFlcr0cLSjL29RSqfjd5e8lgKTo16OMNlbVSu/pFRbdsbUovsp3d++V+5F2SsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z'}
          alt="Profile"
        />
        <span className="ml-2 text-gray-800">{'test'}</span>
      </button>

      {isOpen && (
        <div className="absolute   right-1 mt-3 py-2 w-48 bg-white rounded-lg shadow-lg">
          <Link
            to={`profil/${'donateur'}`}
            className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 no-underline shadow-md ${isAdmin ? 'hidden':''}`}
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
