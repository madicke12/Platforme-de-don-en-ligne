import logo from '../assets/charity.png'
const Home = () => {
  return (
    <div className="  flex  donate ">
      <section className=" mt-20 w-3/6 p-4 bg-transparent">
        <div className=" ">
          <p>
            <h1 className="font-bold text-xl sm:text-5xl  ">
              {" "}
              Make someone's <span className="text-blue-200">life</span> by{" "}
              <span className="text-green-200">giving</span> of Yours
            </h1>
          </p>
          <div className=" mt-5">
            <span className=" text-black-500 font-bold">
              <span className="text-blue-500 text-2xl font-bold">WALLU</span>{" "}
              est une platforme digital creer pour les organisations caritatives
              . Elle facilite  la collecte de dons qui sera redistribuer au
              personne en besoin.
            </span>
            <div className="mt-10">
                <button className="font-bold bg-blue-100 px-4 py-3 rounded-xl hover:bg-blue-200">
                    Faire un don
                </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-3/6">
       <img src={logo} alt="" />
      </section>
    </div>
  );
};

export default Home;
