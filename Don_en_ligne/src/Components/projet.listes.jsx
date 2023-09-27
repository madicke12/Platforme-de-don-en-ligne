import Modal from "react-modal";
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const Mycomponents = (props) => {
  Mycomponents.propTypes = {
    projet: PropTypes.object.isRequired,
    searchTerm: PropTypes.string.isRequired,
  };

  const { projet, searchTerm } = props;
  const [showModal, setShowModal] = useState(false);
  const [category, setcategory] = useState([]);
  const [Projet, setProjet] = useState([]);
  const getUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(projet.data.map((project) => project.categorie)),
    ];
    return uniqueCategories;
  };

  useEffect(() => {
    console.log(searchTerm);
    setProjet(
      searchTerm
        ? projet.data.filter((item) =>
            item.nom.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : projet.data
    );
  }, [projet, searchTerm]);
  console.log(Projet);

  useEffect(() => {
    setcategory(getUniqueCategories());
  }, []);

  const handleCategorieFilter = (categorie) => {
    const Projet = projet.data.filter(
      (item) => item.categorie.toLowerCase() === categorie.toLowerCase()
    );
    setProjet(Projet);
  };

  const handleClearFilter = () => {
    setProjet(projet.data);
  };
  const fairedon = async (project) => {
    try {
      const result = await axios.get("http://localhost:8000/user", {
        withCredentials: true,
      });
      console.log(result.data);
      if (result.data) {
        setShowModal(true);
        const result = await axios.post(
          "http://localhost:8000/initiate",
          { project: project },
          { withCredentials: true }
        );
      } else {
        window.location.href = "http://localhost:5173/login";
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          {category.map((cat) => (
            <button
              onClick={() => handleCategorieFilter(cat)}
              key={cat}
              className="bg-blue-500 text-white rounded-md px-4 py-2 mr-2"
            >
              {cat}
            </button>
          ))}
        </div>
        <button
          onClick={() => handleClearFilter()}
          className="bg-gray-500 text-white rounded-md px-4 py-2"
        >
          Tout afficher
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Projet.map((project) => (
          <div
            key={project._id}
            className="border border-gray-300 rounded-md p-4 shadow-md"
          >
            <h3 className="text-xl font-bold mb-2">{project.nom}</h3>
            <img
              src={project.image}
              alt={project.nom}
              className="w-full h-auto mb-4"
            />
            <p>{project.description}</p>
            <p className="mt-4 text-gray-500">Catégorie: {project.categorie}</p>
            <p className="mt-2">Montant: {project.montant}</p>
            <div className="mt-4">
              <button
                onClick={() => fairedon(project)}
                className="bg-blue-500 text-white rounded-md px-4 py-2"
                type="submit"
              >
                faire un don
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Faire un don"
        overlayClassName="fixed inset-0 bg-opacity-75 bg-gray-900"
        style={{
          content: {
            width: "600px",
            height: "450px",
          },
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Faire un don </h2>
        <Form method="post">
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block mb-2 font-medium text-gray-700"
            >
              Montant du don:
            </label>
            <input
              type="number"
              id="amount"
              name="montant"
              required
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="paymentMethod"
              className="block mb-2 font-medium text-gray-700"
            >
              Méthode de paiement:
            </label>
            <select
              id="paymentMethod"
              name="operateur"
              required
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            >
              <option value="wave">Wave</option>
              <option value="orangeMoney">Orange Money</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block mb-2 font-medium text-gray-700"
            >
              Entrez le numero du compte en question
            </label>
            <input
              type="number"
              id="amount"
              name="NumeroCompte"
              required
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
          >
            Valider le don
          </button>
        </Form>
      </Modal>
    </>
  );
};

export default Mycomponents;
