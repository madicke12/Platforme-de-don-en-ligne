import logo from "../assets/charity.png";
const Home = () => {
  return (
    <div className="     sm:bg-cover">
      <section className=" mainc text-white w-full p-4 bg-transparent">
        <div className="w-full mt-20">
          <p>
            <h1 className="font-bold text-xl sm:text-5xl text-grey  ">
              {" "}
              Make someone's <span className="text-red-900">life</span> by{" "}
              <span className="text-red-900">giving</span> of Yours
            </h1>
          </p>
          <div className=" mt-5">
            <span className=" text-black-500 text-black font-bold">
              <span className="text-black text-2xl font-bold">WALLU</span> est
              une platforme digital creer pour les organisations caritatives.
              Elle facilite la collecte de dons qui sera redistribuer au
              personne en besoin.
            </span>
            <div className="mt-10">
              <button className="font-bold bg-gray-800 px-4 py-3 rounded-xl hover:bg-gray-500">
                Faire un don
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-3/6"></section>
      <section className="  sm:w-3/6 w-full p-4 bg-transparent">
        <div className="w-full mt-20">
          <p>
            <h1 className="font-bold text-xl sm:text-5xl  ">
              {" "}
              Make someone's <span className="text-red-900">life</span> by{" "}
              <span className="text-red-900">giving</span> of Yours
            </h1>
          </p>
          <div className=" mt-5">
            <span className=" text-black-500 font-bold">
              <span className="text-red-900 text-2xl font-bold">WALLU</span> est
              une platforme digital creer pour les organisations caritatives.
              Elle facilite la collecte de dons qui sera redistribuer au
              personne en besoin.
            </span>
            <div className="mt-10">
              <button className="font-bold bg-gray-200 px-4 py-3 rounded-xl hover:bg-gray-500">
                Faire un don
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-3/6"></section>
    </div>
  );
};

export default Home;
