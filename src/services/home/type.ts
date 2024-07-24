type PokemonResponse = {
  count: number;
  next: string;
  previous: any;
  results: Pokemon[];
};

type Pokemon = {
  name: string;
  url: string;
};

export type { PokemonResponse, Pokemon };
