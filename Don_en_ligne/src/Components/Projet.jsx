import axios from "axios";
import { useState, useEffect, Suspense } from "react";
import { useLoaderData, Form, Await, defer } from "react-router-dom";
import Loader from "./loader";
import Mycomponents from "./projet.listes";

export const ProjetLoader = async () => {
  try {
    const result = axios.get("http://localhost:8000/projets", {
      withCredentials: true,
    });
    return defer({ data: result });
  } catch (err) {
    console.log(err);
  }
  return null;
};
export const donateAction = async ({ request }) => {
  const formdata = await request.formData();
  console.log(formdata.get("montant"));
  try {
    const result = await axios.post(
      "http://localhost:8000/donate",
      {
        montant: formdata.get("montant"),
        NumeroCompte: formdata.get("NumeroCompte"),
        paymentMethod: formdata.get("operateur"),
      },
      { withCredentials: true }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
  return null;
};


const Projet = () => {
  const projects = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");



  // const donate = async () =>{
  //   try{
  //     await axios.post('http://localhost:8000/donate',,{withCredentials:true})
  //   }catch(err){
  //     console.log(err)
  //   }
  // }
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  };
 
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Projets</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Rechercher un projet..."
          className="border border-gray-300 rounded-md px-4 py-2 w-full"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <Suspense fallback={<Loader />}>
        <Await resolve={projects.data}>
          {(projet) => {
            return <Mycomponents projet={projet} searchTerm={searchTerm}/>;
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export default Projet;
