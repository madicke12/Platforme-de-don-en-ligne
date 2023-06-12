import enf from '../assets/enf.jpeg'
import imagee from '../assets/image.webp'
import image from '../assets/imagee.jpeg'

const Mission = () => {
  return (
    <div className=''>
        <div className='flex justify-center'>
            <hr className='mt-10 h-2 rounded-xl bg-red-500 w-3/6' />
        </div>
      <div className="flex  sm:bg-cover">
        <section className="mt-5 sm:w-3/6 w-full p-3 ">
          <div className="w-full mt-3">
            <p>
              <h1 className="font-bold text-xl sm:text-2xl">
                <span className="text-black-200 xl sm:text-4xl">
                  TRANSFORMER{" "}
                </span>
                <span className="text-black font-bold text-4xl">
                  DES VIES GRÂCE AUX POUVOIRS DES DONS
                </span>
              </h1>
            </p>
            <div className="mt-6">
              <span className="text-black-500 font-bold">
                <span className="text-black italic text-2xl font-bold font-mono">
                  WALLU{" "}
                </span>
                <span className="font-serif">
                  {" "}
                  a pour mission de faciliter les dons en ligne et de permettre
                  aux donateurs de faire une réelle différence dans la vie des
                  personnes dans le besoin. Nous nous engageons à soutenir des
                  causes variées, telles que l'éducation, la santé,
                  l'environnement, l'aide humanitaire, et bien d'autres.
                </span>
              </span>
            </div>
          </div>
        </section>
        <section className="sm:w-3/6 mt-5">
          <img src={image} alt="" className="hidden sm:block" />
        </section>
      </div>

      <div className="flex donate  sm:bg-cover ">
        <section className="sm:w-3/6 mt-3">
          <img src={imagee} alt="" className="hidden sm:block" />
        </section>
        <section className="mt-3 sm:w-3/6 w-full p-3 ">
          <div className="w-full mt-3">
            <div className=" fond-bold text-xl mt-8">
              <p>
                <span className="text-black-200 fond-bold xl sm:text-3xl">
                  PARTAGEZ{" "}
                </span>
                <span className="text-white font-bold text-3xl">
                  VOTRE CAUSE ET INSPIREZ LA GÉNÉROSITÉ
                </span>
              </p>
            </div>

            <div className="mt-6 ">
              <span className="text-black-500 font-bold">
                Notre objectif est d'établir un lien solide entre les donateurs
                généreux et les organisations caritatives dignes de confiance.
                Nous nous efforçons de fournir une plateforme transparente,
                sécurisée et conviviale où les utilisateurs peuvent trouver des
                projets significatifs et contribuer à des causes qui leur
                tiennent à cœur.
              </span>
            </div>
          </div>
        </section>
      </div>
      <section className="mt-9">
        <img src={enf} alt="Lama" className="mx-auto mb-4 w-1/2" />
        <p className="text-center font-bold text-black-500">
          Nous croyons en la puissance de la communauté. Notre mission est
          également de sensibiliser et d'encourager les gens à se joindre à
          notre mouvement philanthropique. En encourageant la participation et
          en partageant des histoires inspirantes, nous créons une culture de
          générosité et d'empathie, où chaque personne peut contribuer à créer
          un monde meilleur.
        </p>
      </section>

      <section className="mt-8 p-4 bg-gray-200">
        <p className="text-center text-lg">
          Prêt à changer des vies et faire une différence positive ?
        </p>
        <p className="text-center text-gray-600 mt-2">
          Rejoignez notre mouvement et participez à la construction d'un avenir
          meilleur pour tous.
        </p>
        <div className="flex justify-center mt-6 space-x-4">
          <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Inscrivez votre association
          </button>
          <button className="px-4 py-2 bg-red-300 text-white rounded hover:bg-red-600">
            Faites un don
          </button>
        </div>
      </section>
    </div>
  );
};

export default Mission;
