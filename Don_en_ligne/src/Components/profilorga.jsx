import { Editable, List, ListIcon, ListItem } from "@chakra-ui/react";
import {  NavLink, Outlet } from "react-router-dom";
import { AtSignIcon, CalendarIcon, EditIcon,ViewIcon } from "@chakra-ui/icons";



const OrganisationProfilePage =()=>{
 
return(
  <main className="flex">
    <aside className=" w-1/6 bg-red-200 ">
      <ul className="flex flex-col mt-4 pl-0 pb-0 h-screen">
      <List spacing={'10px'} color={'white'}>
      <ListItem>
      <NavLink   to={"."}><ListIcon as={AtSignIcon}/>Mon profil</NavLink>
      </ListItem>
      <ListItem>
      <NavLink   to={'creer'}><ListIcon as={EditIcon} /> Creer Projet</NavLink>
      </ListItem>
      <ListItem>
      <NavLink  to={'projet'}><ListIcon as={ViewIcon}/>Mes projets</NavLink>
      </ListItem>
      </List>
      </ul>
    </aside>
    <section className=" w-5/6">
      <Outlet/>
    </section>

  </main>
  
)  ;
}


export default OrganisationProfilePage