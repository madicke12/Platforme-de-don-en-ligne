import React from 'react';

const HomePage = () => {
  // Exemple de fausses données pour les projets
  const projects = [
    {
      id: 1,
      title: 'Projet d\'éducation pour les enfants défavorisés',
      category: 'Éducation',
      image: 'https://example.com/project1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Projet de soins de santé pour les personnes âgées',
      category: 'Santé',
      image: 'https://example.com/project2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Projet de soins de santé pour les personnes âgées',
      category: 'Santé',
      image: 'https://example.com/project2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Projet de soins de santé pour les personnes âgées',
      category: 'Santé',
      image: 'https://example.com/project2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Projet de soins de santé pour les personnes âgées',
      category: 'Santé',
      image: 'https://example.com/project2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
    // Ajoutez plus de projets ici
  ];

  return (
    <div>
      <div>
      <form  className=" mt-5 mr-5 flex justify-end">
            <div className="flex   py-2">
              <input
                type="text"
                placeholder="Rechercher des projets"
                className=" bg-transparent border-2 border-gray-400 rounded-lg w-full text-gray-700 mr-3 py-1 px-2  focus:outline-none"
              />
              <button
                type="submit"
                className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
              >
                Rechercher
              </button>
            </div>
          </form>
      </div>
      <section className="bg-gray-100 py-8">
        
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Projets en vedette</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project.id} className="bg-white p-4 rounded shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4" />
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Catégories de dons</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-yellow-200 p-2 text-center rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Éducation</h3>
              {/* Plus d'informations ou liens vers les projets dans cette catégorie */}
            </div>
            
            <div className="bg-green-200 p-2 text-center rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Santé</h3>
              {/* Plus d'informations ou liens vers les projets dans cette catégorie */}
            </div>
            <div className="bg-blue-200 p-2 text-center rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Social</h3>
              {/* Plus d'informations ou liens vers les projets dans cette catégorie */}
            </div>
            {/* Ajoutez plus de catégories ici */}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Témoignages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {'A venir'}
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Organisations caritatives</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Exemples d'organisations caritatives */}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Rejoignez notre communauté</h2>
         
          {/* Formulaire d'inscription */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
