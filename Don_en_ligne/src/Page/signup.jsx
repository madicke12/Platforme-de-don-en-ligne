import { useState } from "react";
import { Form, Link, useActionData } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export async function action({ request }) {
  const formData = await request.formData();
  const type = formData.get("Donateur") ? "Donateur" : "Organisation";
  const user={
    email : formData.email,
    password: formData.password
  }
  return user
  
  // try{
  //     const data = await loginUser({email , password})
  //     localStorage.setItem('loggedin',true)
  //     window.location.href='/host'
  //     console.log(data)
  // }

  // catch(error){
  //     return error.message
  // }

}

const Inscription = () => {
  const User = useActionData()
  console.log(User)
  const [Donor, setIsDonor] = useState(false);
  const [charity, setIsCharity] = useState(false);
  const { signup} = useAuth()

  async function logger(user){
  try{
   const resp = await signup(User.email ,User.password)
  }catch(error){
    alert(error)
  }
  }




  const handleDonorChange = (e) => {
    setIsDonor(e.target.checked);
    setIsCharity(false);
  };

  const handleCharityChange = (e) => {
    setIsCharity(e.target.checked);
    setIsDonor(false);
  };

  return (
    <div className="w-full flex min-h-screen">
      <div className="images w-3/5 hidden  sm:block "></div>
      <div className="flex items-center justify-center w-full   sm:w-3/5">
        <div className="  w-full py-2 ">
          <h2 className="text-3xl mb-4 text-center text-red-200">S'inscrire</h2>
          <p className="mb- text-center">
            Creer un compte wallu en un instant !
          </p>

          <Form method="post" className={` p-4 `} onSubmit={async ()=>{
            await logger(User)
          }}>
            <div className="mb-3 flex ">
              <input
                name="Donateur"
                type="checkbox"
                placeholder="Email"
                className="border rounded-lg   "
                checked={Donor}
                onChange={handleDonorChange}
                value={Donor}
              />
              Donateur
              <input
                name="organisation"
                type="checkbox"
                placeholder="Email"
                className="border rounded-lg ml-2  "
                checked={charity}
                onChange={handleCharityChange}
                value={charity}
              />
              Organisation caritative
            </div>
            <div className="grid grid-cols-1 gap-3  ">
              <input  
                name='nom'
                type="text"
                placeholder="Nom"
                className={`border rounded-lg bg-gray-300 outline-2 active:outline-red-200 py-2 px-2   ${!Donor ? 'hidden' : ''  } `}
              />
              <input 
                name="prenom"
                type="text"
                placeholder="Prenom"
                className={`border rounded-lg bg-gray-300 outline-2 active:outline-red-200 py-2 px-2  ${!Donor ? 'hidden' : '' }` }
              />
              <input 
                name="organisation"
                type="text"
                placeholder="Nom de votre organisation"
                className={`border rounded-lg bg-gray-300 outline-2 active:outline-red-200 py-2 px-2 w-full ${Donor ? 'hidden' : '' }`}
              />
              <input
                name="email"
                type="text"
                placeholder="Email"
                className={`border rounded-lg bg-gray-300 outline-2 active:outline-red-200 py-2 px-2 `}
              />
              <input
                name="telephone"
                type="number"
                placeholder="Telephone"
                className="border rounded-lg bg-gray-300 outline-2 active:outline-red-200 py-2 px-2 "
              />
              <input 
                name="adresse"
                type="text"
                placeholder="adresse"
                className={`border rounded-lg bg-gray-300 outline-2 active:outline-red-200 py-2 px-2  ${Donor ? 'hidden' :'' }`}
              />
              <input 
                name="dateCreation"
                type="date"
                placeholder="Date de creation "
                className={`border rounded-lg bg-gray-300 outline-2 active:outline-red-200 py-2 px-2 ${Donor ? 'hidden' : '' } `}
              />
              
              <input
                name="password"
                type="password"
                placeholder="Mot de passe"
                className="border rounded-lg bg-gray-300 outline-2 active:outline-red-200 py-2 px-2 "
              />
              <input
                name="confirmePassword"
                type="password"
                placeholder="confirmer mot de passe"
                className="border rounded-lg bg-gray-300 outline-2 active:outline-red-200 py-2 px-2 "
              />
             
            </div>

            <div className="mt-5">
              <button className="w-full bg-red-300 py-3 text-center rounded-xl text-white">
                S'inscrire
              </button>
            </div>
            <div className="mt-1">
              <span>
                D'eja inscrit ?
                <Link
                  to={"/login"}
                  className="text-red-200   ml-1 font-semibold"
                >
                  Se connecter?
                </Link>
              </span>
            </div>
          </Form>

          <div className="mt-3     p-2 rounded-md">
            <Link to={"/"} className=" py-3 text-center text-black w-24">
              <button className="  p-3 rounded-sm underline">Retour</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
