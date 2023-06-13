import { Form, Link } from "react-router-dom";
import image from "../assets/enf.jpeg";
const Signin = () => {
  return (
    <div className="w-full flex min-h-screen">
      <div className="image w-3/5 hidden  sm:block "></div>
      <div className="flex items-center justify-center w-full   sm:w-3/5">
        <div className="  w-full py-3 px-3">
          <h2 className="text-3xl mb-4 text-center">Se connecter</h2>
          <p className="mb- text-center">Connectez vous en un instant !</p>

          <Form methode="post" className={` p-4 `}>

            <div className="grid grid-cols-1 gap-3  ">
              <input
                type="text"
                placeholder="Email"
                className=" rounded-lg bg-gray-300 outline-2 active:outline-red-200  py-2 px-2 "
              />
              <input
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
