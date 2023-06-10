import { Form, Link, useLoaderData } from "react-router-dom";

export function loginLoader({ params }) {
  return params.type;
}
const Login = () => {
  const type = useLoaderData();
  return (
    <>
      <div className={`  flex  h-fit donate`}>
        <div className="min-h-screen py-40 w-full ">
          <div className="container mx-auto my-auto w-96">
            <div className="flex flex-col sm:w-3/6 lg:flex-row w-full  bg-white rounded-xl mx-auto  overflow-hidden">
              <div className="w-full  py-16 px-12">
                <h2 className="text-3xl mb-4">S'inscrire</h2>
                <p className="mb-4">Creer votre compte en un instant !</p>
                <Form methode="post" className={` `}>
                  <div className="grid grid-cols-1 gap-3  ">
                    <input
                      type="text"
                      placeholder="Nom "
                      className={` ${
                        type == 1 ? "hidden" : null
                      } border rounded-lg outline-double outline-blue-gray-200 border-gray-400 py-1 px-2`}
                    />
                    <input
                      type="text"
                      placeholder="Prenom"
                      className={` ${
                        type == 1 ? "hidden" : null
                      } border rounded-lg outline-double outline-blue-gray-200 border-gray-400 py-1 px-2`}
                    />
                    <input
                      type="text"
                      placeholder="Nom de l'organisation"
                      className={`${
                        type != 1 ? "hidden" : null
                      } border rounded-lg outline-double outline-blue-gray-200 border-gray-400 py-1 px-2`}
                    />
                    <input
                      type="text"
                      placeholder="Adresse"
                      className={`${
                        type != 1 ? "hidden" : null
                      } border rounded-lg outline-double outline-blue-gray-200 border-gray-400 py-1 px-2`}
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      className="border rounded-lg outline-double outline-blue-gray-200 border-gray-400 py-1 px-2 w-full"
                    />
                    <input
                      type="text"
                      placeholder="Telephone"
                      className="border rounded-lg outline-double outline-blue-gray-200 border-gray-400 py-1 px-2 w-full"
                    />
                    <input
                      type="date"
                      placeholder="Date de creation"
                      className={`${
                        type != 1 ? "hidden" : null
                      } border rounded-lg outline-double outline-blue-gray-200 border-gray-400 py-1 px-2 w-full`}
                    />
                    <input
                      type="password"
                      placeholder="Mot de passe"
                      className="border rounded-lg outline-double outline-blue-gray-200 border-gray-400 py-1 px-2 w-full"
                    />
                    <input
                      type="password"
                      placeholder="Confirmer mot de passe"
                      className="border rounded-lg outline-double outline-blue-gray-200 border-gray-400 py-1 px-2 w-full"
                    />
                  </div>
                  <div className="mt-5">
                    <input
                      type="checkbox"
                      className="border hover:cursor-pointer rounded-lg outline-double outline-blue-gray-200 border-gray-400"
                    />
                    <span className="ml-2">
                      I accept the{" "}
                      <Link href="#" className="text-blue-200   font-semibold">
                        Terms of Use
                      </Link>{" "}
                      &
                      <Link
                        href="#"
                        className="text-blue-200 font-semibold ml-2"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </div>
                  <div className="mt-3">
                    <button className="w-full bg-blue-500 py-3 text-center text-white">
                      Register Now
                    </button>
                  </div>
                  <div className="mt-1">
                    <span>
                      Deja inscrit ?
                      <Link
                        to={'/login'}
                        className="text-blue-200   ml-1 font-semibold"
                      >
                        Se connecter
                      </Link>
                    </span>
                  </div>
                  <div className="mt-3   w-24  p-2 rounded-md">
                    <Link
                      to={"/"}
                      className=" py-3 text-center text-black no-underline"
                    >
                      <button className=" bg-blue-100 hover:bg-blue-gray-300 p-2 rounded-sm w-full">
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
    </>
  );
};

export default Login;
