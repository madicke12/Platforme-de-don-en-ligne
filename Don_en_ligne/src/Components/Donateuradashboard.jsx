import { Form, useLoaderData, defer, Await } from "react-router-dom";
import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import Joi from "joi";
import Loader from "./loader";
import { useToast } from '@chakra-ui/react'

export const DonateurDashboardLoader = async() => {
  try {
    const data = await axios.get("http://localhost:8000/getUser", {
      withCredentials: true,
    });
    return data.data ;
  } catch (err) {
    console.log(err);
  }

  return null;
};

export const Modifyaction = async ({ request }) => {
  const formdata = await request.formData()
  console.log(formdata.get('Prenom'))
  const schema = Joi.object({
    prenom:Joi.string().required().min(3),
    nom: Joi.string().required().min(3),
    username: Joi.string().required(),
    telephone: Joi.string().required(),
  });

  const data = {
    prenom: formdata.get('Prenom'),
    nom: formdata.get("nom"),
    username: formdata.get("email"),
    telephone: formdata.get('telephone')
  };

  const result =  schema.validate(data);
  if (result.error) {
    console.log(result.error.message)
    return result.error.message;
  } else {
     sendFormDataToServer(data);
  }
  return null
};

const sendFormDataToServer = async (data) => {
  try {
     await axios.post("http://localhost:8000/updateProfil",data,{
      withCredentials: true,
    });
    
  } catch (error) {
    console.log(error);
  }
};

export default function DonateurDashboard() {
  const data = useLoaderData();
  const [user, setUser] = useState();
  const Toast = useToast()

  const showToast = () =>{
    Toast({
      title:'Modification !',
      description:'Informations personnelle modifiee avec success',
      status:'info',
      isClosable:true,
      duration:3000,
      position:"top"
    })
  }

 useEffect(()=>{
  setUser(data)
 },[data])
  
  const handleEmailChange = (e) => {
    setUser((prev)=>({
      ...prev,
      username:e.target.value
    }))};
  const handleNomChange = (e) => {
    setUser({
      ...user,
      nom: e.target.value,
    });
  };

  const handleTelephoneChange = (e) => {
    setUser({
      ...user,
      telephone: e.target.value,
    });}

  const  handlePrenomChange =(e)=>{
    setUser({
      ...user,
      prenom: e.target.value,
    }) 
  }
  console.log(user)
  return (
    <>
      <section className="mt-5">
        <div className="text-center">
          <h2>Mon profil</h2>
        </div>
      </section>
      {/* <Suspense fallback={<Loader />}> */}
        {/* <Await resolve={data.user}>
          {(User) => { */}
            {/* setUser(User.data)
            return( */}
              <section className="flex items-center justify-center mt-5">
                <Form method="post">
                  <div className=" flex flex-col">
                    <label htmlFor="email" className="mb-2 text-gray-400">
                      Email
                    </label>
                    <input
                      className="border-2 border-blue-gray-100 p-2 w-96 rounded-sm"
                      name="email"
                      type="email" 
                      id="email"
                      onChange={handleEmailChange}
                      value={user && user.username}
                    />
                  </div>

                  <div className=" flex flex-col mt-4">
                    <label htmlFor="nomorga" className="mb-2 text-gray-400">
                      Nom
                    </label>
                    <input
                      className="border-2 border-blue-gray-100 p-2 w-96 rounded-sm"
                      name="nom"
                      type="text"
                      id="nomorga"
                      value={user && user.nom}
                      onChange={handleNomChange}
                    />
                  </div>
                  <div className=" flex flex-col mt-4">
                    <label htmlFor="prenom" className="mb-2 text-gray-400">
                      Prenom
                    </label>
                    <input
                      className="border-2 border-blue-gray-100 p-2 w-96 rounded-sm"
                      name="Prenom"
                      type="text"
                      id="prenom"
                      value={user && user.prenom}
                      onChange={handlePrenomChange}
                    />
                  </div>
                  <div className=" flex flex-col mt-4">
                    <label htmlFor="telephone" className="mb-2 text-gray-400">
                      Telephone
                    </label>
                    <input
                      className="border-2 border-blue-gray-100 p-2 w-96 rounded-sm"
                      name="telephone"
                      type="number"
                      id="telephone"
                      value={user && user.telephone}
                      onChange={handleTelephoneChange}
                    />
                  </div>
                  <div className=" flex flex-col mt-4">
                    <label htmlFor="password" className="mb-2 text-gray-400">
                      Mot de passe
                    </label>
                    <input
                      className="border-2 border-blue-gray-100 p-2 w-96 rounded-sm"
                      type="password"
                      id="password"
                      value='************'
                    />
                  </div>
                  <div className="mt-5">
                    <button type="submit" className="bg-red-200 px-3 py-2 rounded-sm hover:bg-red-300" onClick={showToast}>
                      Enregister
                    </button>
                  </div>
                </Form>
              </section>
            {/* ) */}
          {/* }}
        </Await> */}
      {/* </Suspense> */}
      
    </>
  );
}
