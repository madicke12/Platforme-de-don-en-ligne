import im from '../assets/3.jpeg';
import gen from '../assets/2.jpeg';
import edu from '../assets/edu.jpeg';
import faim from '../assets/faim.jpeg'
import sante from'../assets/1.jpeg';
import hum from '../assets/4.jpeg';


const Home = () => {
  const causes = [
    {
      title: "Éducation pour tous",
      description:
        "Offrez le pouvoir de l'éducation et transformez des vies.",
      image: edu,
    },
    {
      title: "Lutte contre la faim",
      description:
        "Luttons ensemble contre la faim et apportons un repas à chaque table.",
      image: faim,
    },
    {
      title: "Santé",
      description:
        "Donnez le don précieux de la santé et changez des vies.",
      image: sante,
    },
    {
      title: "Social",
      description:
        "Brisons les barrières de l'injustice sociale et façonnons un monde où personne n'est laissé pour compte.",
      image: hum,
    },
  ];
  const testimonials = [
    {
      id: 1,
      name: 'Astou',
      message: 'Grâce à WALLU, j\'ai pu poursuivre mes études et réaliser mon rêve de devenir médecin. Votre soutien m\'a donné l\'espoir et la motivation nécessaires pour surmonter tous les obstacles. Merci pour tout !',
    },
    {
      id: 2,
      name: 'Matar',
      message: 'Je tiens à exprimer ma profonde gratitude envers l\'association soutenue par WALLU. Grâce à votre générosité, j\'ai pu retrouver un toit, de la nourriture et une nouvelle perspective dans la vie. Votre aide a changé ma vie.',
    },
    {
      id: 3,
      name: 'Mouhamed',
      message: 'En tant que bénévole dans une association soutenue par WALLU, je peux témoigner de l\'impact positif de vos dons. Chaque contribution, qu\'elle soit grande ou petite, fait une réelle différence dans la vie des personnes que nous aidons. Ensemble, nous construisons un avenir meilleur.',
    },
  ];
  return (
    <div className="container mx-auto mt-10">
      <section className="flex flex-col items-center justify-center bg-gray-100  mb-8">
        <img
          src={im} alt="Logo de la plateforme"
          className="w-60 h-60 rounded-full mb-8"
        />
        <h1 className="text-2xl font-bold text-center">
          Avec WALLU, répandez l'amour et transformez des vies par vos dons
        </h1>
      </section>

      <section className="flex items-center justify-center">
        <div className="flex flex-col items-center md:flex-row">
          <img
            src={gen}
            alt="WALLU Logo"
            className="w-64 h-64 rounded-full mb-8 md:w-80 md:h-80 object-cover"
          />
          <h1 className="text-2xl  text-center md:text-left md:ml-8 md:text-2xl md:w-1/2 font-roboto">
            Bienvenue sur WALLU, où chaque don compte et prend vie. Ensemble, répandons l'amour, semons le changement et créons un monde meilleur. Joignez-vous à notre mouvement de générosité et laissez vos dons transformer des vies.
          </h1>
        </div>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Causes soutenues</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {causes.map((cause) => (
              <div className="bg-white p-4 rounded-lg shadow-md" key={cause.title}>
                <img src={cause.image} alt={cause.title} className="w-full h-40 md:w-full md:h-60 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold mb-2">{cause.title}</h3>
                <p className="text-gray-600">{cause.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Témoignages et Histoires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-gray p-6 shadow-lg rounded-lg">
                <p className="text-lg mb-4">{testimonial.message}</p>
                <p className="text-gray-600">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-300 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Faites une différence dès maintenant</h2>
          <p className="text-lg text-black mb-8">Rejoignez-nous dans notre mission pour un monde meilleur</p>
          <div className="flex justify-center">
            <a href="/faire-un-don" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg mr-4">
              Faire un don
            </a>
            <a href="/devenir-benevole" className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg">
              Inscrire son association
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;