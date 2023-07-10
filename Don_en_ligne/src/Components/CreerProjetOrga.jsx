import { useEffect } from "react";
import { Form,  useActionData } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import {storage} from '../utilities/firebase';
import {ref , uploadBytes  ,listAll ,getDownloadURL  } from "firebase/storage";
import { v4 } from "uuid";


export const action = async({request})=>{
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
          nom: formdata.get('nom'),
          description: formdata.get('description'),
          categorie: formdata.get('categorie'),
          Montant: formdata.get('Montant'),
          image: url, 
        };
      console.log(data)
      try{
        const result = await axios.post('http://localhost:8000/creer',data,{withCredentials:true})
        return result.data
      }catch(err){
        console.log(err)
      }
  })})
 
 

  return null
 }
const CreerProjetOrga = () => {

  const result = useActionData() 

  console.log(result)
  const showToast = (message) => {
    toast.success(message, {
      position:"top-center",
      autoClose:5000,
      hideProgressBar:false,
      closeOnClick:true,
      pauseOnHover:true,
      draggable:true,
      progress:undefined,
      theme: "light",});
  }



  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Créer un nouveau projet</h2>
      <ToastContainer 
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/>
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
            />
          </div>
          <div className=" flex flex-col mt-4">
            <label htmlFor="description" className="mb-2 text-gray-400">
              Descriptif du projet (breve)
            </label>
            <textarea
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
            required
              className="border-2 border-blue-gray-100 p-2 w-96 rounded-sm"
              name="Montant"
              type="number"
              id="Montant objectif"
            />
          </div>

          <div className="mt-5">
            <button  className="bg-red-200 px-3 py-2 rounded-sm hover:bg-red-300">
              creer
            </button>
          </div>
        </Form>
      </section>
    </div>
  );
};

export default CreerProjetOrga;
