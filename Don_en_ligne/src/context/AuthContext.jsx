import { createContext, useContext, useEffect, useState } from "react";
import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";
export function useAuth() {
  return useContext(AuthContext);
}

const AuthContext = createContext();
const auth =getAuth()
export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState();


  useEffect(()=>{
    const unsuscribe= auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
      });
      return unsuscribe
    
  },[])
  const signup = (email, password) => {
   return createUserWithEmailAndPassword(auth , email ,password);
  };


  const value = {
    currentUser,
    signup
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
