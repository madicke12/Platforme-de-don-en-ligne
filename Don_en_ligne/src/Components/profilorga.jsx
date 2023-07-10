import { Link, Outlet } from "react-router-dom";


const OrganisationProfilePage =()=>{
 
return(
  <main className="flex">
    <aside className=" w-1/6 bg-red-200 ">
      <ul className="flex flex-col mt-4 pl-0 pb-0 h-screen">
      <Link  className={`no-underline text-gray-800 p-2 font-bold hover:bg-red-300 mb-0 `} to={"."}>Mon profil</Link>
        <Link  className={`no-underline text-gray-800 p-2 font-bold hover:bg-red-300 mb-0 `} to={'creer'}>Creer Projet</Link>
        <Link className={`no-underline text-gray-800 p-2 font-bold hover:bg-red-300 mb-0 `} to={'projet'}>Mes projets</Link>
      </ul>
    </aside>
    <section className=" w-5/6">
      <Outlet/>
    </section>

  </main>
  
)  ;
}


export default OrganisationProfilePage