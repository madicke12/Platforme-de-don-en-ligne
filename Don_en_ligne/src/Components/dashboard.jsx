
import { Form } from "react-router-dom"


export default function Dashboard() {
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
                        placeholder={`cissemadicke8@gmail.com`} 
                        id="email"
                        value={''}
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
                        value={''}
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
                        name='creation' 
                        type="date" 
                        placeholder={``} 
                        id="creation"
                        value={'2023-06-24'}
                    />
                </div>

                <div className=" flex flex-col mt-4">
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
                        placeholder={`cissemadicke8@gmail.com`} 
                        id="email"
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
