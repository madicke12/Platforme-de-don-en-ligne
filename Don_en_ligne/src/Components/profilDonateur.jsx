import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
export const loader = async()=>{
    try{
        const user = await axios.get("http://localhost:8000/getUser" , {withCredentials: true})
        if(user){
            return user.data
        }
    }catch(err ){
        console.log(err)
    }
    return null
    }

const ProfilePage = () => {
  const data = useLoaderData()
  const [isEditMode, setIsEditMode] = useState(false);
  const [user , setUser] = useState({})
  
  useEffect(()=>{
    setUser(data)
  },[data])
  
  console.log(user)
  const handleEditModeToggle = () => {
    setIsEditMode(!isEditMode);
  };

  const handleFirstNameChange = (e) => {
    setUser({
        ...user,
        prenom : e.target.value
    });
  };

  const handleLastNameChange = (e) => {
    setUser({
        ...user,
        nom : e.target.value
    });
  };

  const handlePhoneNumberChange = (e) => {
    setUser({
        ...user,
        telephone : e.target.value
    });
  };

  const handleEmailChange = (e) => {
    setUser({
        ...user,
        username : e.target.value
    });
  };

  return (
    <div className="flex flex-col p-5 mt-5 w-96 h-screen">
      <h2 className="text-2xl font-bold mb-2">{`${user.nom} ${user.prenom}`}</h2>
      <p className="text-gray-500 mb-4">Description du profil...</p>
      {isEditMode ? (
        <>
          <div className="mb-4">
            <label className="block mb-2">Nom:</label>
            <input
              type="text"
              value={user.prenom}
              onChange={handleFirstNameChange}
              className="border border-red-400 px-2 py-1 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Prénom:</label>
            <input
              type="text"
              value={user.nom}
              onChange={handleLastNameChange}
              className="border border-red-400 px-2 py-1 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Téléphone:</label>
            <input
              type="tel"
              value={user.telephone}
              onChange={handlePhoneNumberChange}
              className="border border-red-400 px-2 py-1 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email: </label>
            <input
              type="email"
              value={user.username}
              onChange={handleEmailChange}
              className="border border-red-400 px-2 py-1 rounded-md"
            />
          </div>
        </>
      ) : (
        <>
          <div className="mb-4">
            <span className="block mb-2">Nom: {user.prenom}</span>
          </div>
          <div className="mb-4">
            <span className="block mb-2">Prénom: {user.nom}</span>
          </div>
          <div className="mb-4">
            <span className="block mb-2">Téléphone: {user.telephone}</span>
          </div>
          <div className="mb-4">
            <span className="block mb-2">Email: {user.username}</span>
          </div>
        </>
      )}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
        onClick={handleEditModeToggle}
      >
        {isEditMode ? 'Enregistrer' : 'Modifier Profil'}
      </button>
      <h3 className="text-lg font-bold mb-2">Historique des Dons</h3>
      {/* Afficher l'historique des dons ici */}
    </div>
  );
};

export default ProfilePage;
