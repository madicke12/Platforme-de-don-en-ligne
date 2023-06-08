import { Outlet } from "react-router-dom";
import Navaccuil from "../Components/navacceuil";

const Acceuil =()=>{
    return(
        <>
        <Navaccuil/>
        <Outlet/>
        </>
    )
}

export default Acceuil          