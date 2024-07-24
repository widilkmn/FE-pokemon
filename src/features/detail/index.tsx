import { Link, useParams } from "react-router-dom";

import usePokemonDetail from "./hooks/pokemon-detail";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemonData = usePokemonDetail(url);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-4 bg-white p-6 shadow-lg rounded-lg max-w-screen-lg mx-auto">
        <div className="flex-shrink-0 flex justify-center items-center md:w-1/2">
          <img
            className="rounded-xl shadow-sm max-w-full h-auto"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt={pokemonData.name}
            loading="lazy"
          />
        </div>

        <div className="flex-grow md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">{pokemonData.name}</h1>

          <div className="mb-4">
            <p>
              <strong>Height:</strong> {pokemonData.height / 10} m
            </p>
            <p>
              <strong>Weight:</strong> {pokemonData.weight / 10} kg
            </p>
            <p>
              <strong>Base Experience:</strong> {pokemonData.base_experience}
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Abilities:</h2>
            <ul>
              {pokemonData.abilities.map((ability) => (
                <li key={ability.ability.name}>
                  {ability.ability.name} {ability.is_hidden ? "(Hidden)" : ""}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Types:</h2>
            <ul>
              {pokemonData.types.map((type) => (
                <li key={type.type.name}>{type.type.name}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Stats:</h2>
            <ul>
              {pokemonData.stats.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Species:</h2>
            <p>{pokemonData.species.name}</p>
          </div>
        </div>
        <div className="flex items-center p-5 h-10 w-24 bg-slate-400">
            <Link to={"/"}>CATCH!</Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
