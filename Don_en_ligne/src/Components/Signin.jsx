import { Form, Link } from "react-router-dom";
import Joi from "joi";
import axios from "axios";
import { useActionData } from "react-router-dom";
import { useState , useEffect} from "react";





export const action = async ({request})=>{
  const formData = await request.formData();
  const schema = Joi.object({
    username: Joi.string().required(),
    password :Joi.string().required()
  })
const data = {
  username : formData.get('username'),
  password : formData.get('password')
}

const result = await schema.validate(data)
if(result.error){
  return result.error.message
}
else{
 const reponse=  await sendFormDataToServer(data)
 if(reponse.data.connected) {
  try {
    const user = await axios.get("https://jazzy-creponne-c2ece4.netlify.app/.netlify/functions/getUser");
    if (user.data) {
      localStorage.setItem("userType" ,user.data.type)
      if(user.data.type ==='admin'){
        window.location.href='/admin'

        localStorage.setItem('nom' ,user.data.nom)
      }
      if(user.data.type === 'organisation'){
        localStorage.setItem('nom' ,user.data.nom_organisation)
        window.location.href='/'
      }
      else if(user.data.type === 'donateur'){
        localStorage.setItem('nom' ,user.data.nom)
        window.location.href='/'
      }
  

    }
  } catch (err) {
    console.log(err);
  }
  console.log(reponse.data.connected)
   return null}
 if( ! reponse.data.status){
   return reponse.data.message
 }




}}
async function sendFormDataToServer(data) {
  try {
    const res = await axios.post("https://backend-3b4b.onrender.com/login", data);
    return res
  } catch (error) {
    console.log(error);
  }
}

const Signin = () => {





  const response = useActionData();
  const [error, setError] = useState();
  useEffect(() => {
    if (typeof (response) === "string") {
      setError(response);
    } else {
      setError(null);   
      
    }
  }, [response]);

  return (
    <div className="w-full flex min-h-screen">
      <div className="image w-3/5 hidden  sm:block "></div>
      <div className="flex items-center justify-center w-full   sm:w-3/5">
        <div className="  w-full py-3 px-3">
          <h2 className="text-3xl mb-4 text-center">Se connecter</h2>
          <p className="mb- text-center">Connectez vous en un instant !</p>

          <Form method="post" className={` p-4 `}>

            <div className="grid grid-cols-1 gap-3  ">
            {error && (
              <div className="mt-3 bg-red-100 text-red-900 text-sm text-center p-2 flex items-center justify-center">
                <span>{error}</span>
              </div>)}
              <input
                name='username'
                type="text"
                placeholder="Email"
                className=" rounded-lg bg-gray-300 outline-2 active:outline-red-200  py-2 px-2 "
              />
              <input
                name='password'
                type="password"
                placeholder="Mot de passe"
                className="bg-gray-300 rounded-lg  outline-2 active:outline-red-200  py-2 px-2 w-full"
              />
            </div>

            <div className="mt-5">
              <button className="w-full bg-red-300 py-3 text-center rounded-md text-white">
                Se connecter
              </button>
            </div>
            <div className="mt-1">
              <span>
                Pas de compte ?
                <Link to={'/inscription'} className="text-red-200   ml-1 font-semibold">
                  S'inscrire
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

export default Signin;