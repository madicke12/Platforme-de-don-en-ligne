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
import SignInSide from './Components/sidesign';

const router=createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Acceuil/>}>
      <Route index element={<Mission/>}/>
     
    </Route>
    <Route
      path='inscription/:type'
      element={<Login/>}
      loader={loginLoader}
    />
    <Route 
      path='login'
      element={<Signin/>}
    />
     
  </Route>
))

const App=()=> {
  return (
    <RouterProvider router={router}/>
  )
}
export default App
