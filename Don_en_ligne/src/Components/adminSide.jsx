import { Link, Outlet } from "react-router-dom";


const AdminSide =()=>{
 
return(
  <main className="flex">
    <aside className=" w-1/6 bg-red-200 ">
      <ul className="flex flex-col mt-4 pl-0 pb-0 h-screen">
      <Link  className={`no-underline text-gray-800 p-2 font-bold hover:bg-red-300 mb-0 `} to={"."}>Demande en attente</Link>
        <Link  className={`no-underline text-gray-800 p-2 font-bold hover:bg-red-300 mb-0 `} to={'demande/valide'}>Demande valide</Link>
        <Link className={`no-underline text-gray-800 p-2 font-bold hover:bg-red-300 mb-0 `} to={'demande/invalide'}>Demande invalide</Link>
      </ul>
    </aside>
    <section className=" w-5/6">
      <Outlet/>
    </section>

  </main>
  
)  ;
}


export default AdminSide