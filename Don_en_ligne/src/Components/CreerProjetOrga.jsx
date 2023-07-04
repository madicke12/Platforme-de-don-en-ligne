import { useState } from "react";
import { Form ,Link} from "react-router-dom";
const  CreerProjetOrga=()=> {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectGoal, setProjectGoal] = useState(0);

    const handleProjectNameChange = (e) => {
        setProjectName(e.target.value);
      };
    
      const handleProjectDescriptionChange = (e) => {
        setProjectDescription(e.target.value);
      };
    
      const handleProjectGoalChange = (e) => {
        setProjectGoal(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Ajouter le code pour soumettre le formulaire et créer un nouveau projet
        // Utilisez les valeurs des états projectName, projectDescription et projectGoal
        // pour envoyer les données au serveur ou effectuer toute autre action requise.
      };
  return (

        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="text-2xl font-bold mb-4">Créer un nouveau projet</h2>
          <Form onSubmit={handleSubmit} className="w-1/2">
            <div className="mb-4">
              <label htmlFor="projectName" className="block mb-2 font-medium">
                Nom du projet:
              </label>
              <input
                type="text"
                id="projectName"
                className="border border-gray-300 px-2 py-1 rounded-md w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="projectDescription" className="block mb-2 font-medium">
                Description du projet:
              </label>
              <textarea
                id="projectDescription"
                className="border border-gray-300 px-2 py-1 rounded-md w-full"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="projectGoal" className="block mb-2 font-medium">
                Objectif du projet (en euros):
              </label>
              <input
                type="number"
                id="projectGoal"
                value={projectGoal}
                onChange={handleProjectGoalChange}
                className="border border-gray-300 px-2 py-1 rounded-md w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Créer le projet
            </button>
          </Form>
        </div>

)}

export default CreerProjetOrga
