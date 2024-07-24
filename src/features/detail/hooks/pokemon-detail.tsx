import { useEffect, useState } from "react";

import { PokemonDetailResponse } from "../../../services/detail/type";

const usePokemonDetail = (url: string) => {
  const [pokemonData, setPokemonData] = useState<PokemonDetailResponse>();

  useEffect(() => {
    fetchPokemonData();
  }, [url]);

  const fetchPokemonData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };
  return pokemonData;
};

export default usePokemonDetail;
