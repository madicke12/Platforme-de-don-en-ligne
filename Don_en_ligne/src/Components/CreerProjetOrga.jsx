import { useEffect, useState } from "react";
import { Form, Link, useActionData } from "react-router-dom";
import axios from "axios";



export const action = async({request})=>{
  const formdata = await request.formData()
  console.log(formdata.get('image'))

  try{
    const result = await axios.post('http://localhost:8000/creer',formdata,{withCredentials:true})
    return result
  }catch(err){
    console.log(err)
  }
  return null
}
const CreerProjetOrga = () => {

  const result = useActionData() 
  const [message ,setMessage]= useState()

  useEffect(()=>{ setMessage(result)},[result])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Créer un nouveau projet</h2>
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
          <div className=" flex flex-col mt-4">
            <label htmlFor="Montant objectif" className="mb-2 text-gray-400">
              Montant objectif
            </label>
            <input
            required
              className="border-2 border-blue-gray-100 p-2 w-96 rounded-sm"
              name="Montant objectif"
              type="number"
              id="Montant objectif"
            />
          </div>

          <div className="mt-5">
            <button className="bg-red-200 px-3 py-2 rounded-sm hover:bg-red-300">
              creer
            </button>
          </div>
        </Form>
      </section>
    </div>
  );
};

export default CreerProjetOrga;
