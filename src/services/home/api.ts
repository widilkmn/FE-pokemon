import { API } from ".";
import { PokemonResponse } from "./type";

//POKEMON
const getAllPokemon = async (offset: string) => {
  try {
    const response = await API.get(`/pokemon?offset=${offset}&limit=20`);

    return response.data as PokemonResponse;
  } catch (error) {
    console.log(error);
  }
};

export { getAllPokemon };
