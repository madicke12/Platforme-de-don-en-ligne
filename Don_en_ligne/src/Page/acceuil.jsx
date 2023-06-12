import { Outlet } from "react-router-dom";
import Navbar from "../Components/navbar";

const Acceuil =()=>{
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}

export default Acceuil          