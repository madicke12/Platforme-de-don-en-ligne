import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
  Route} from 'react-router-dom';

import './App.css'

import Acceuil from './Page/acceuil';
import Login, { loginLoader } from './Page/login';
import Signin from './Components/Signin';
import Home from './Page/home';
import Mission from './Page/mission';
import Inscription from './Components/signup';

const router=createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Acceuil/>}>
      <Route index element={<Mission/>}/>
     
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
    />
     
  </Route>
))

const App=()=> {
  return (
    <RouterProvider router={router}/>
  )
}
export default App
