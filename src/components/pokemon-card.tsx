import { Link } from "react-router-dom";
import usePokemonDetail from "../features/detail/hooks/pokemon-detail";

interface Props {
  name: string;
  url: string;
  size?: string;
  hover?: string;
  transition?: string;
}

const PokeCard = (props: Props) => {
  const { name, url, size, hover, transition } = props;

  const pokemonData = usePokemonDetail(url);

  const id = pokemonData?.id;

  return (
    <Link to={`/detail/${name}/${id}`}>
      <div
        className={`flex flex-col items-center shadow-xl rounded-2xl gap-2 text-center p-3 overflow-hidden ${size} ${hover} ${transition}`}
      >
        <img
          className="rounded-xl shadow-sm"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          loading="lazy"
        />
        <label className="font-bold">{name}</label>
      </div>
    </Link>
  );
};

export default PokeCard;
