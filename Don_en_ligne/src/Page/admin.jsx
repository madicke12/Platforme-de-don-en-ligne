import axios from 'axios';
import { useLoaderData } from 'react-router-dom';



export const  PendingRequestLoader = async ()=>{
    try {
        const response = await axios.get('http://localhost:8000/admin/pending-requests');

        return response.data
      } catch (error) {
        console.error('Error fetching pending requests:', error);
      }

      return null
}
const AdminDashboard = () => {
    const pendingRequests = useLoaderData()



    const handleApproveRequest = async(req)=>{
        try{
            const result = await axios.post('http://localhost:8000/admin/approve',{requestId:req},{withCredentials:true})
    
        }catch(err){
            console.log(err)
        }
    }

const handleunapproveRequest= async (req)=>{
    try{
        const result = await axios.post('http://localhost:8000/admin/unapprove',{requestId:req},{withCredentials:true})

    }catch(err){
        console.log(err)
    }
}
  return (
    
    
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <h2 className="text-2xl font-bold mb-2 text-blue-300">Pending Requests</h2>
      <ul className="space-y-4">
        {pendingRequests.map((request) => (
          <li key={request._id} className="bg-white p-4 rounded shadow">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold">{request.ownerName}</h3>
             <div className='flex flex-column '>
             <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mb-2"
                onClick={() => handleApproveRequest(request._id)}
              >
                Approve
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-green-600"
                onClick={() => handleunapproveRequest(request._id)}
              >
                disapprove
              </button>
             </div>
            </div>
            <p>Description : {request.description}</p>
            <p>Adresse : {request.adresse}</p>
            <div className="flex">
              <a href={request.file1} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mr-4">File 1</a>
              <a href={request.file2} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">File 2</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
