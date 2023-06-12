import {Form ,Link} from 'react-router-dom'

const Inscription=()=>{
    return (
        <div className="w-full flex min-h-screen">
      <div className="images w-3/5 hidden  sm:block "></div>
      <div className="flex items-center justify-center w-full   sm:w-3/5">
        <div className="  w-full py-16 px-12">
          <h2 className="text-3xl mb-4 text-center text-red-200">S'inscrire</h2>
          <p className="mb- text-center">Creer un compte wallu en un instant !</p>

          <Form methode="post" className={` p-4 `}>
          <input
                type="checkbox"
                placeholder="Email"
                className="border rounded-lg outline-double outline-red-200 border-gray-400 py-1 px-2 "
              />Donateur
               <input
                type="checkbox"
                placeholder="Email"
                className="border rounded-lg outline-double outline-red-200 border-gray-400 py-1 px-2 "
              />Organisation caritative
            <div className="grid grid-cols-1 gap-3  ">
           

              <input
                type="text"
                placeholder="Email"
                className="border rounded-lg outline-double outline-red-200 border-gray-400 py-1 px-2 "
              />
              <input
                type="password"
                placeholder="Mot de passe"
                className="border rounded-lg outline-double outline-red-200 border-gray-400 py-1 px-2 w-full"
              />
            </div>

            <div className="mt-5">
              <button className="w-full bg-red-300 py-3 text-center text-white">
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
    )
}


export default Inscription