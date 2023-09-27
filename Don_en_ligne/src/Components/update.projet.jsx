import axios from "axios"
import { useLoaderData ,Form } from "react-router-dom"
import {ref , uploadBytes  ,listAll ,getDownloadURL  } from "firebase/storage";
import { v4 } from "uuid";
import {storage} from '../utilities/firebase';
import { useEffect, useState } from "react";


export const updateProjetLoader= async ({params}) =>{
    try{
        const result = await axios.post('http://localhost:8000/projet',{projetId:params.id})
        return result.data
    } catch(err){
        console.log(err)
    }
    return null
}

export const UpdateProjetAction = async({request})=>{
    const imageListRef =ref(storage ,'uploads/creer/image/')
    const formdata = await request.formData()
    const image = formdata.get('image')
    const filename = image.name + v4()
    const imageRef = ref(storage ,`uploads/creer/image/${filename}`)
    uploadBytes(imageRef, image)
    .then(() => {
      getDownloadURL(imageRef)
        .then(async (url) => {
          const data = {
            _id: formdata.get('projectId'),
            nom: formdata.get('nom'),
            description: formdata.get('description'),
            categorie: formdata.get('categorie'),
            Montant: formdata.get('Montant'),
            image: url, 
          };
        console.log(data)
        try{
          const result = await axios.post('http://localhost:8000/projet/update',data,{withCredentials:true})
          return result.data
        }catch(err){
          console.log(err)
        }
    })})
   
   
  
    return null
   }

const UpdateProjet =()=> {
const projet = useLoaderData()
const [Projet,setProjet] = useState()

useEffect(()=>{
    setProjet(projet)
},[]);
const handleMontantChange = (e) => {
    setProjet({
        ...projet,
        montant : e.target.value
    });
  };
  const handleNomChange = (e) => {
    setProjet({
        ...projet,
        nom : e.target.value
    });
  };

  const handledescriptionChange = (e) => {
    setProjet({
        ...projet,
        description : e.target.value
    });
  };

  const handleCategorieChange = (e) => {
    setProjet({
        ...projet,
        description : e.target.value
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Modifier le projet</h2>
      <section className="flex items-center justify-center mt-5">
        <Form method="post" encType="multipart/form-data">
          <div className=" flex flex-col">
            <label htmlFor="image" className="mb-2 text-gray-400">
              image
            </label>
            <input name="image" type="file" id="image" />
          </div>
          <div className=" flex flex-col mt-4">
            <label htmlFor="nom" className="mb-2 text-gray-400">
              Nom du projet 
            </label>
            <input
              required
              className="border-2 border-blue-gray-100 p-2 w-96 rounded-sm"
              name="nom"
              type="text"
              placeholder={`Aide pour les enfants...`}
              id="nom"
              value={Projet && Projet.nom}
              onChange={handleNomChange}
            />
          </div>
          <div className=" flex flex-col mt-4">
            <label htmlFor="description" className="mb-2 text-gray-400">
              Descriptif du projet (breve)
            </label>
            <textarea
            onChange={handledescriptionChange}
            value={Projet && Projet.description}
              required
              className="border-2 border-blue-gray-100 p-2 w-96 rounded-sm"
              name="description"
              type="text"
              placeholder={`Ce projet .....`}
              id="description"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="categorie" className="mb-2 text-gray-400">
              Catégorie
            </label>
            <select
            onChange={handleCategorieChange}
            value={Projet && Projet.categorie}
              required
              className="border-2 border-blue-gray-100 p-2 w-96 rounded-sm"
              name="categorie"
              id="categorie"
            >
              <option value="">Sélectionner une catégorie</option>
              <option value="sante">Santé</option>
              <option value="education">Éducation</option>
              <option value="social">Social</option>
            </select>
            </div>
         
          <div className=" flex flex-col mt-4">
            <label htmlFor="Montant objectif" className="mb-2 text-gray-400">
              Montant objectif
            </label>
            <input
            onChange={handleMontantChange}
            value={parseInt(Projet && Projet.montant)}
            required
              className="border-2 border-blue-gray-100 p-2 w-96 rounded-sm"
              name="Montant"
              type="number"
              id="Montant objectif"
            />
          </div>
          <div className=" flex flex-col mt-4">
            <input
            value={Projet && Projet._id}
              className=" hidden"
              name="projectId"
            />
          </div>

          <div className="mt-5">
            <button  className="bg-red-200 px-3 py-2 rounded-sm hover:bg-red-300">
              Modifier
            </button>
          </div>
        </Form>
      </section>
    </div>
  )
}
export default UpdateProjet
