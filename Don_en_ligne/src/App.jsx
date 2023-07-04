import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import "./App.css";

import Acceuil from "./Page/acceuil";

import Signin, { action as Signin_action } from "./Components/Signin";
import Home from "./Page/home";
import Mission from "./Page/mission";
import Inscription, { action } from "./Page/signup";
import { loader as navLoader } from "./Components/navbar";
import ProfilePage ,{loader as l} from "./Components/profilDonateur";
import OrganisationProfilePage from "./Components/profilorga";
import CreerProjetOrga from "./Components/CreerProjetOrga";
import Dashboard, { DashboardLoader } from "./Components/dashboard";
import ValidationForm from "./Components/formulaire";
import { action as validationAction} from "./Components/formulaire";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route action={validationAction} path="validation" element={<ValidationForm/>}/>

      <Route loader={navLoader} path="/" element={<Acceuil />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Mission />} />
        <Route
          loader={l}
          path="profil/donateur"
          element={<ProfilePage />}
        />
        <Route
     
          path="profil/organisation"
          element={<OrganisationProfilePage />}
        >
        <Route loader={DashboardLoader} index element={<Dashboard/>}/>
        <Route  path="projet" element={<h1>j</h1>}/>
        <Route  path="creer" element={<CreerProjetOrga/>}/>
        </Route>
      </Route>
      <Route path="login" element={<Signin />} action={Signin_action} />
      <Route
        //loader={loginLoader}
        path="inscription"
        element={<Inscription />}
        action={action}
      />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
