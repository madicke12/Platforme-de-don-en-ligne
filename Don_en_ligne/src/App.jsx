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
import OrganisationProfilePage from "./Components/profilorga";
import CreerProjetOrga from "./Components/CreerProjetOrga";
import Dashboard, { DashboardLoader } from "./Components/dashboard";
import ValidationForm from "./Components/formulaire";
import { action as validationAction} from "./Components/formulaire";
import { action as creeraction } from "./Components/CreerProjetOrga";
import { ProjetOrga } from "./Components/projetOrga";
import { loader as projetLoader } from "./Components/projetOrga";
import DonateurDashboard ,{DonateurDashboardLoader} from "./Components/Donateuradashboard";
import DonateurProfilePage from "./Components/profilDonateur";
import DonateurHistory from "./Components/donateurHistory";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route action={validationAction} path="validation" element={<ValidationForm/>}/>

      <Route loader={navLoader} path="/" element={<Acceuil />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Mission />} />
        <Route
          
          path="profil/donateur"
          element={<DonateurProfilePage/>}
        >
          <Route loader={DonateurDashboardLoader} index element={<DonateurDashboard/>}/>
          <Route path="historique" element={<DonateurHistory/>}/>
        </Route>
        <Route
     
          path="profil/organisation"
          element={<OrganisationProfilePage />}
        >
        <Route loader={DashboardLoader} index element={<Dashboard/>}/>
        <Route loader={projetLoader} path="projet" element={<ProjetOrga/>}/>
        <Route  action={creeraction} path="creer" element={<CreerProjetOrga/>}/>
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
