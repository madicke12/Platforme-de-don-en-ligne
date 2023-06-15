import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
  Route} from 'react-router-dom';

import './App.css'

import Acceuil from './Page/acceuil';

import Signin from './Components/Signin';
import Home from './Page/home';
import Mission from './Page/mission';
import Inscription, { action } from './Page/signup';
import { AuthProvider } from './context/AuthContext';

const router=createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Acceuil/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<Mission/>}/>
     
    </Route>
    <Route 
      //loader={loginLoader}
      path='login'
      element={<Signin/>}
    />
       <Route 
      //loader={loginLoader}
      path='inscription'
      element={<Inscription/>}
      action={action}
    />
     
  </Route>
  
))

const App=()=> {
  return (
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>    
    )
}
export default App
