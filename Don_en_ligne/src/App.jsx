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
import { action as validationAction } from "./Components/formulaire";
import { action as creeraction } from "./Components/CreerProjetOrga";
import { ProjetOrga } from "./Components/projetOrga";
import { loader as projetLoader } from "./Components/projetOrga";
import DonateurDashboard, {
  DonateurDashboardLoader, Modifyaction,
} from "./Components/Donateuradashboard";
import DonateurProfilePage from "./Components/profilDonateur";
import DonateurHistory, { HistoriqueLoader } from "./Components/donateurHistory";
import Projet, { ProjetLoader ,donateAction  } from "./Components/Projet";
import AdminDashboard from "./Page/admin";
import AdminSide from "./Components/adminSide";
import { PendingRequestLoader } from "./Page/admin";
import Valide, { ValideRequestLoader } from "./Page/valide";
import Invalide, { InvalideRequestLoader } from "./Page/invalide";
import HistoriqueDons from "./Components/donateurHistory";
import UpdateProjet, { UpdateProjetAction, updateProjetLoader } from "./Components/update.projet";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        action={validationAction}
        path="validation"
        element={<ValidationForm />}
      />
      <Route loader={navLoader} path="/" element={<Acceuil />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Mission />} />
        <Route  action={donateAction} loader={ProjetLoader} path="projects" element={<Projet/>}/>

        <Route path="profil/donateur" element={<DonateurProfilePage />}>
          <Route
            loader={DonateurDashboardLoader}
            index
            element={<DonateurDashboard />}
            action={Modifyaction}
          />
          <Route loader={HistoriqueLoader} path="historique" element={<HistoriqueDons/>} />
        </Route>
        <Route path="profil/organisation" element={<OrganisationProfilePage />}>
          <Route loader={DashboardLoader} index element={<Dashboard />} />
          <Route  loader={projetLoader} path="projet" element={<ProjetOrga />} />
          <Route 
            path="update/projet/:id"  
            action={UpdateProjetAction} 
            loader={updateProjetLoader} 
            element={<UpdateProjet/>}/>
          <Route
            action={creeraction}
            path="creer"
            element={<CreerProjetOrga />}
          />
        </Route>
        <Route path="admin" element={<AdminSide/>}> 
        <Route index loader={PendingRequestLoader}  element={<AdminDashboard/>}/>
        <Route path="demande/valide" loader={ValideRequestLoader}  element={<Valide/>}/>
        <Route path="demande/invalide" loader={InvalideRequestLoader}  element={<Invalide/>}/>

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
