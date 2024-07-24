import { handlePageBack, handlePageNext } from "../../helper/pagination";

import PokeCard from "../../components/pokemon-card";
import { Pokemon } from "../../services/home/type";
import useAllPokemon from "./hooks/useGetPokemon";

const Home = () => {
  const { offset, pokemonData, navigate } = useAllPokemon();
  return (
    <div className="flex flex-col p-10">
      <div className="flex flex-row justify-around">
        <button onClick={() => handlePageBack(offset, navigate)}>Back</button>
        <button onClick={() => handlePageNext(offset, navigate)}>Next</button>
      </div>
      <div className="flex flex-row px-5 py-10 gap-5 flex-wrap justify-center">
        {pokemonData?.results.map((item: Pokemon) => (
          <PokeCard
            name={item.name}
            url={item.url}
            size="w-36"
            hover="hover:scale-110"
            transition="transition-all"
          />
        ))}
      </div>
      <div className="flex flex-row justify-around">
        <button onClick={() => handlePageBack(offset, navigate)}>Back</button>
        <button onClick={() => handlePageNext(offset, navigate)}>Next</button>
      </div>
    </div>
  );
};

export default Home;
