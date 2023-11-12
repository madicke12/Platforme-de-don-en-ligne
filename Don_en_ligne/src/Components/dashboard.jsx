
import { Form, useLoaderData } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"
import Joi from "joi"

export const DashboardLoader = async ()=>{
    try {
        const data = await axios.get('https://jazzy-creponne-c2ece4.netlify.app/.netlify/functions/getUser' ,{withCredentials:true})
        if(data){
            return data.data
        }
    } catch(err){
        console.log(err)
    }

    return null
}

export const Modifyaction = async ({request})=>{
    const formData = request.formData();

    const schema = Joi.object({
        nom : Joi.string().required(),
        username: Joi.string().required(),
        date :Joi.date().required()
      })

      const data = {
        nom : formData.get('nom'),
        username : formData.get('email'),
        date : formData.get('date')
      }

const result = await schema.validate(data)
if(result.error){
    return result.error.message
  }
  else{
    const reponse=  await sendFormDataToServer(data)
  }

}

const sendFormDataToServer = async (data) =>{
    try{

        const res = await axios.post('http://localhost:8000/updateOrga' ,{withCredentials:true})
        return res
    }
 catch (error) {
  console.log(error);
}
}


export default function Dashboard() {
    const data = useLoaderData()
    const [user ,setUser] = useState()

    useEffect(()=>{
        setUser(data)

    },[data])
    const handleEmailChange = (e) => {
        setUser({
            ...user,
            username : e.target.value
        });
      };
      const handleNomChange = (e) => {
        setUser({
            ...user,
            nom_organisation : e.target.value
        });
      };

      const handleTelephoneChange = (e) => {
        setUser({
            ...user,
            telephone : e.target.value
        });
      };

      const handleAdresseChange = (e) => {
        setUser({
            ...user,
            adresse : e.target.value
        });
      };



  return (
    <>
        <section className="mt-5">
            <div className="text-center">
                <h2>Mon profil</h2>
            </div>
        </section>
        <section className="flex items-center justify-center mt-5">
            <Form method="post">
                <div className=" flex flex-col">
                    <label 
                    htmlFor="email"
                    className="mb-2 text-gray-400"
                    >
                        Email
                    </label>
                    <input 
                        className="border-2 border-blue-gray-100 p-2 w-96 rounded-sm" 
                        name='email' 
                        type="email" 
                        id="email"
                        value={user && user.username}
                        onChange={handleEmailChange}
                       
                    />
                </div>

                <div className=" flex flex-col mt-4">
                    <label 
                    htmlFor="nomorga"
                    className="mb-2 text-gray-400"
                    >
                        Nom de votre organisme
                    </label>
                    <input 
                        className="border-2 border-blue-gray-100 p-2 w-96 rounded-sm" 
                        name='nom' 
                        type="text" 
                        placeholder={``} 
                        id="nomorga"
                        value={user && user.nom_organisation}
                        onChange={handleNomChange}
                    />
                </div>
                <div className=" flex flex-col mt-4">
                    <label 
                    htmlFor="telephone"
                    className="mb-2 text-gray-400"
                    >
                        Telephone
                    </label>
                    <input 
                        className="border-2 border-blue-gray-100 p-2 w-96 rounded-sm" 
                        name='telephone' 
                        type="number" 
                        id="telephone"
                        value={user && user.telephone}
                        onChange={handleTelephoneChange}
                    />
                </div>

                <div className=" flex flex-col mt-4">
                    <label 
                    htmlFor="adresse"
                    className="mb-2 text-gray-400"
                    >
                        adresse
                    </label>
                    <input 
                        className="border-2 border-blue-gray-100 p-2 w-96 rounded-sm" 
                        name='adresse' 
                        type="text" 
                        id="adresse"
                        value={user && user.adresse}
                        onChange={handleAdresseChange}
                    />
                </div> 


                <div className=" flex flex-col mt-4">
                    <label 
                    htmlFor="creation"
                    className="mb-2 text-gray-400"
                    >
                        Date de creation
                    </label>
                    <input 
                        className="border-2 border-blue-gray-100 p-2 w-96 rounded-sm" 
                        name='date' 
                        type="date" 
                        placeholder={``} 
                        id="creation"
                        value={'2023-06-24'}
                    />
                </div>

                <div className="mt-5">
                    <button className="bg-red-200 px-3 py-2 rounded-sm hover:bg-red-300">Enregister</button>
                </div>
                
            </Form>
        </section>
    </>
  )
}
