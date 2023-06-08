import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
  Route} from 'react-router-dom';

import './App.css'
import Layout from './Components/layout';
import Acceuil from './Page/acceuil';

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Acceuil/>}>
  </Route>  
))

const App=()=> {
  return (
    <RouterProvider router={router}/>
  )
}
export default App
