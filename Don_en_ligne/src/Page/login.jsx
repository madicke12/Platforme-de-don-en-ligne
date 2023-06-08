import {Form} from 'react-router-dom'
const Login =()=>{
    return(
        <Form  method="post" className="max-w-md mx-auto flex  flex-col">
        <div >
          <label htmlFor="name" className="block mb-2">Nom</label>
          <input
            type="text"
            
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-green-300 focus:border-blue-500 mb-3"
            required
          />
        </div>
        <div >
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
  
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-green-300 focus:border-blue-500 mb-3"
            required
          />
        </div>
        <div >
          <label htmlFor="message" className="block mb-2">Message</label>
          <input
            type="email"
            name="email"
  
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-green-300 focus:border-blue-500 mb-3"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded ">
          Envoyer
        </button>
      </Form>
    )
}

export default Login