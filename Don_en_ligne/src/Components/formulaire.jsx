
  
   
import  { useState } from 'react';
import logo from '../assets/logo.jpeg'
import {Form, useActionData} from 'react-router-dom'
import axios from 'axios';
import { v4 } from 'uuid';
import {storage} from '../utilities/firebase';
import {ref , uploadBytes   ,getDownloadURL  } from "firebase/storage";



export const action = async ({ request }) => {
  const formdata = await request.formData();
  const image1 = formdata.get('receiptFile1');
  const image2 = formdata.get('receiptFile');
  const address = formdata.get('address');
  const description = formdata.get('description');

  const filename1 = image1.name + v4();
  const filename2 = image2.name + v4();

  const imageRef1 = ref(storage, `uploads/file/${filename1}`);
  const imageRef2 = ref(storage, `uploads/file/${filename2}`);

  const uploadTask1 = uploadBytes(imageRef1, image1);
  const uploadTask2 = uploadBytes(imageRef2, image2);

  try {
    await Promise.all([uploadTask1, uploadTask2]);

    const [url1, url2] = await Promise.all([
      getDownloadURL(imageRef1),
      getDownloadURL(imageRef2),
    ]);

    const data = {
      description : description,
      address: address,
      file1: url1,
      file2: url2,
    };

    try {
      const result = await axios.post('http://localhost:8000/uploads', data, {
        withCredentials: true,
      });
      window.location.href='/profil/organisation'
      return result.data;
    } catch (err) {
      console.log(err);
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};




  
  const ValidationForm = () => {
    const [description, setDescription] = useState('');
   const a = useActionData()
   console.log(a)
    
    const [statusFile, setStatusFile] = useState('');
    const [receiptFile, setReceiptFile] = useState('');

  
 
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded shadow-md p-6">
          <div className="flex items-center justify-center mb-4">
            <img src={logo} alt="Logo de la plateforme" className="h-15 w-14 mr-15" />
            </div>
            <div className="flex items-center justify-center mb-4">
            <h2 className="text-2xl text-rose-300 font-bold">Faisons un peu plus connaissance ! </h2>
          </div>
  
          <Form method='post'  className="max-w-lg mx-auto" encType='multipart/form-data'>
  
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description de l'organisation (breve description)
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="description"
                placeholder="Description de l'organisation"
                
                required
              />
            </div>
            

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Quelle est l’adresse de votre siège social ? 
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="address"
              type="text"
              placeholder="Adresse"
              required
            />
          </div>
         
          <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Document officiel prouvant le statut d'association caritative :
  </label>
  <p className="text-sm text-gray-600 mb-2">
    Veuillez fournir une copie numérisée ou une photo du document officiel qui prouve le statut d'association caritative de votre organisation. Acceptés : PDF, JPEG, PNG.
  </p>
  <input
    type="file"
    name="receiptFile1"
    accept=".pdf,.jpeg,.jpg,.png"
    onChange={(e) => setStatusFile(e.target.files?.[0]?.name || '')}
  required
  />
</div>

<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    Récépissé de l'organisation caritative :
  </label>
  <p className="text-sm text-gray-600 mb-2">
    Veuillez fournir une copie numérisée ou une photo du récépissé de l'organisation caritative. Acceptés : PDF, JPEG, PNG.
  </p>
  <input
    type="file"
    name="receiptFile"
    accept=".pdf,.jpeg,.jpg,.png"
    onChange={(e) => setReceiptFile(e.target.files?.[0]?.name || '')}
    required
  />
</div>
  
          
  
              <button
                className="bg-red-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Soumettre
              </button>
          </Form>
        </div>
      </div>
    );
  };
  
  export default ValidationForm;