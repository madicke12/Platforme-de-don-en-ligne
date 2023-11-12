/* eslint-disable react/prop-types */
import axios from "axios"
import { useLoaderData ,Link, Outlet } from "react-router-dom"
import {Box, Button, SimpleGrid} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import { useState } from "react"

export const loader = async ()=>{
    try{
        const projet = await axios.get("http://localhost:8000/myProjects",{withCredentials:true})
       if(projet.data) return projet.data
        
    }catch(err){
        console.log(err)
    }

    return null
}





  
  
export const ProjetOrga = () =>{
    const [projects ,setProjects] = useState (useLoaderData())
    console.log(projects)
const Delete =(projetID)=>{
  try{
    axios.post('http://localhost:8000/projet/delete',{projetID},{withCredentials:true})
    setProjects(projects.filter(projet=>projet._id != projetID))
  }
  catch(e){
    console.log(e)
  }
}
  const ProjetList = projects.map((projet)=>{
    return(
    <Box borderTop={'4px'} bg={'gray.200'} borderTopColor={'red.300'} as={'div'} key={projet._id} className=" hover:shadow-md  rounded-lg p-6 mb-4  w-96" >
    <h3 className="text-xl font-bold mb-2">{projet.nom}</h3>
    <img src={projet.image} alt={projet.nom} className="w-full mb-4" />
    <p >Description : {projet.description.slice(0, 30) + "..."}</p>
    <p >Catégorie : {projet.categorie}</p>
    <p >Montant objectif : {projet.montant}</p>
    <p >Montant Receuillie : {projet.receuilli}</p>
    <div className="flex justify-between mt-4">
   <Link to={`/profil/organisation/update/projet/${projet._id}`}>
     <Button variant={'ghost'} leftIcon={<EditIcon/>}> Modifier</Button>
 </Link>
 <Button variant={'ghost'} onClick={()=>Delete(projet._id)} leftIcon={<DeleteIcon/>}>Supprimer</Button>
  </div>
  </Box>
    )
  })
    console.log(projects)

  return (
     
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Liste des projets</h2>
    <SimpleGrid  spacing={12} minChildWidth={300}>
      {ProjetList}
        
      </SimpleGrid>
    </div>
    )
}
