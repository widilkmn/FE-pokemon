import Pokeball from "../assets/pokeball.png";

const Header = () => {
  return (
    <div className="flex flex-row w-full justify-center px-10 py-5 shadow-md bg-gray-100">
      <img src={Pokeball} className="w-12" />
    </div>
  );
};

export default Header;
