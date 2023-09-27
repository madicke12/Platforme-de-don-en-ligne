/* eslint-disable react/prop-types */
import axios from "axios"
import { useLoaderData ,Link, Outlet } from "react-router-dom"


export const loader = async ()=>{
    try{
        const projet = await axios.get("http://localhost:8000/myProjects",{withCredentials:true})
       if(projet.data) return projet.data
        
    }catch(err){
        console.log(err)
    }

    return null
}

const Delete = (projetID) => {
  try {
    axios.post("http://localhost:8000/projet/delete", { projetID: projetID }, { withCredentials: true });
    window.location.href ="/profil/organisation/projet" ; 
  } catch (err) {
    console.log(err);
  }
}


const ProjetCard = ({ projet }) => {
    return (
      <div className="bg-white hover:shadow-md  rounded-lg p-6 mb-4" >
        <h3 className="text-xl font-bold mb-2">{projet.nom}</h3>
        <img src={projet.image} alt={projet.nom} className="w-full mb-4" />
        <p className="text-gray-600 mb-2">Description : {projet.description.slice(0, 30) + "..."}</p>
        <p className="text-gray-600 mb-2">Catégorie : {projet.categorie}</p>
        <p className="text-gray-600">Montant objectif : {projet.montant}</p>
        <div className="flex justify-between mt-4">
       <Link to={`/profil/organisation/update/projet/${projet._id}`} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Modifier
     </Link>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={()=>Delete(projet._id)}
        >
          Supprimer
        </button>
      </div>
      </div>
    );
  };
  
  const ProjetList = ({ projets }) => {
    return (
      <div className="grid grid-cols-3 gap-4">
        {projets.map((projet) => (
          <ProjetCard key={projet._id} projet={projet} />
        ))}
      </div>
    );
  };
export const ProjetOrga = () =>{
    const projects = useLoaderData()
    console.log(projects)

  return (
     
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Liste des projets</h2>
      <ProjetList projets={projects} />

    </div>
    )
}
