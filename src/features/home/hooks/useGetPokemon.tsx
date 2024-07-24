import { useEffect, useState } from "react";

import { PokemonResponse } from "../../../services/home/type";
import { getAllPokemon } from "../../../services/home";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../../hooks/useQuery";

const useAllPokemon = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const offset = (
    query.get("offset") !== null ? query.get("offset") : 0
  ) as string;
  const [pokemonData, setPokemonData] = useState<PokemonResponse>();

  useEffect(() => {
    fetchPokemon();
  }, [offset]);

  const fetchPokemon = async () => {
    try {
      const response = await getAllPokemon(offset as string);

      setPokemonData(response);
    } catch (error) {
      console.log(error);
    }
  };
  return { offset, pokemonData, navigate };
};

export default useAllPokemon;
