import { useEffect, useState } from "react";
import { Form, Link, useActionData } from "react-router-dom";
import axios from "axios";
import "joi";
import Joi   from "joi";

export async function action({ request }) {
  const formData = await request.formData();
  const type= formData.get("Donateur") ? 'Donateur' : 'Organisation'



  if (type === 'Organisation') {
    const schema = Joi.object({
      organisation: Joi.string().min(3).required().max(30),
      telephone: Joi.number().min(9),
      email: Joi.string().required(),
      type: Joi.string().required(),
      password: Joi.string().min(8).required(),
      confirm_password: Joi.ref("password"),
    }).with("password", "confirm_password");

    const data = {
      organisation: formData.get("orga"),
      telephone: formData.get("telephone"),
      email: formData.get("email"),
      type: 'Organisation',
      password: formData.get("password"),
      confirm_password: formData.get("confirmePassword"),
    };

    const result = await schema.validate(data);
    if (result.error) {
      return result.error.message;
    } else {
       await sendFormDataToServer({ 
      organisation: formData.get("orga"),
      telephone: formData.get("telephone"),
      email: formData.get("email"),
      type: 'Organisation',
      password: formData.get("password")})
      const data = {
        username : formData.get('email'),
        password : formData.get('password')
      }
      localStorage.setItem('nom' ,formData.get('orga'))

      await logUserIn(data)
      return null
    }
  }
  else if(formData.get("Donateur")){
    const schema = Joi.object({
      nom: Joi.string().min(3).required().max(30),
      prenom: Joi.string().required().min(3),
      email: Joi.string().required(),
      telephone: Joi.number().min(9),
      type: Joi.string().required(),
      password: Joi.string().min(8).required(),
      confirm_password: Joi.ref("password"),
    }).with("password", "confirm_password");
    const data = {
      nom: formData.get("nom"),
      prenom: formData.get("prenom"),
      email: formData.get("email"),
      telephone: formData.get("telephone"),
      type:formData.get('Donateur'),
      password: formData.get("password"),
      confirm_password: formData.get("confirmePassword"),
    }
    const result = await schema.validate(data)
    if(result.error){
      return result.error.message
    } else{
      await sendFormDataToServer({
        nom: formData.get("nom"),
        prenom: formData.get("prenom"),
        email: formData.get("email"),
        telephone: formData.get("telephone"),
        type:formData.get('Donateur'),
        password: formData.get("password")
      })
      
      return null
  
    }
  }
}

async function logUserIn(data){
  try{
    const res = await axios.post('http://localhost:8000/login',data,{withCredentials:true})
    console.log(res)
    window.location.href='/validation'
  }catch(Err){
    console.log(Err)
  }
}
async function sendFormDataToServer(data) {
  try {
    const res = await axios.post("http://localhost:8000/register", data, { withCredentials: true });
    console.log(res.data);
   

  } catch (error) {
    console.log(error);
  }
}

const Inscription = () => {
  const response = useActionData();
  const [Donor, setIsDonor] = useState(false);
  const [charity, setIsCharity] = useState(false);
  const [error, setError] = useState();
  console.log(Donor)
  console.log(charity)
  console.log(response)
  const handleDonorChange = () => {
    setIsDonor(true);
    setIsCharity(false);
  };

  const handleCharityChange = () => {
    setIsCharity(true);
    setIsDonor(false);
  };

  useEffect(() => {
    if (typeof (response) === "string") {
      setError(response);
    } else {
      setError(null);   
    }
  }, [response]);


  // const logger = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:8000/register", response, { withCredentials: true });
  //     console.log(res.data); 
  //   } catch (error) {
  //     console.error(error); 
  //   }
  // };
  
  


  

  return (
    <div className="w-full flex min-h-screen">
      <div className="images w-3/5 hidden  sm:block "></div>
      <div className="flex items-center justify-center w-full   sm:w-3/5">
        <div className="  w-full py-2 ">
          <h2 className="text-3xl mb-4 text-center text-red-200">S'inscrire</h2>
          <p className="mb- text-center">
            Creer un compte wallu en un instant !
          </p>

          <Form method="post" className={` p-4 `} >
            <div className="mb-3 flex ">
              <input
                name="Donateur"
                type="checkbox"
                className="border rounded-lg"
                onChange={handleDonorChange}
                checked={Donor}
                value={Donor}
              />
              Donateur
              <input
                name="Organisation"
                type="checkbox"
                placeholder="Email"
                className="border rounded-lg ml-2  "
                onChange={handleCharityChange}
                checked={charity}
                value={charity}
              />
              Organisation caritative
            </div>
            <div className="grid grid-cols-1 gap-3  ">
            {error && (
              <div className="mt-3 bg-red-100 text-red-900 text-sm text-center p-2 flex items-center justify-center">
                <span>{error}</span>
              </div>
            )}
              <input
                name="nom"
                type="text"
                placeholder="Nom"
                className={`border rounded-lg bg-gray-300 outline-2 active:outline-red-200 py-2 px-2   ${
                  !Donor ? "hidden" : ""
                } `}
              />
              <input
                name="prenom"
                type="text"
                placeholder="Prenom"
                className={`border rounded-lg bg-gray-300 outline-2 active:outline-red-200 py-2 px-2  ${
                  !Donor ? "hidden" : ""
                }`}
              />
              <input
                name="orga"
                type="text"
                placeholder="Nom de votre organisation"
                className={`border rounded-lg bg-gray-300 outline-2 active:outline-red-200 py-2 px-2 w-full ${
                  Donor ? "hidden" : ""
                }`}
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
              <button className="w-full bg-red-300 py-3 text-center rounded-xl text-white" >
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
