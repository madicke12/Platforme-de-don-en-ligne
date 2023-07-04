import axios from "axios";
export   const getuser = async ()=>{
    try{
        const user = await axios.get("http://localhost:8000/user",  { withCredentials: true });
        if(user){
            console.log(user)
        }
    }catch(err){
        console.log(err)
    }
  
    return null
  }