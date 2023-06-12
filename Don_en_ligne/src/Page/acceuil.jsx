import { Outlet } from "react-router-dom";
import Navbar from "../Components/navacceuil";

const Acceuil =()=>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}

export default Acceuil          