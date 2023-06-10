import { Form, Link } from "react-router-dom";
const Signin = () => {
  return (
    <div className="flex items-center justify-center w-full bg-blue-gray-100">
      <div className="min-h-screen py-40 w-full ">
        <div className="container mx-auto my-auto w-96">
          <div className="flex flex-col w-3/6 shadow-2xl   bg-white rounded-xl mx-auto  overflow-hidden">
            <div className="  py-16 px-12">
              <h2 className="text-3xl mb-4">Se connecter</h2>
              <p className="mb-4">Connectez vous en un instant !</p>
              <Form methode="post" className={` `}>
                <div className="grid grid-cols-1 gap-3  ">
                  <input
                    type="text"
                    placeholder="Email"
                    className="border rounded-lg outline-double outline-blue-gray-200 border-gray-400 py-1 px-2 w-full"
                  />
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    className="border rounded-lg outline-double outline-blue-gray-200 border-gray-400 py-1 px-2 w-full"
                  />
                </div>

                <div className="mt-5">
                  <button className="w-full bg-blue-500 py-3 text-center text-white">
                    Se connecter
                  </button>
                </div>
                <div className="mt-1">
                  <span>
                    Pas de compte ?
                    <Link
                      href="#"
                      className="text-blue-200   ml-1 font-semibold"
                    >
                      S'inscrire
                    </Link>
                  </span>
                </div>
                <div className="mt-3   w-24  p-2 rounded-md">
                  <Link
                    to={"/"}
                    className=" py-3 text-center text-black no-underline"
                  >
                    <button className=" hover:bg-blue-200 p-3 rounded-sm w-full">
                      Retour
                    </button>
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
