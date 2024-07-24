import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center px-10 py-5 gap-10 text-center bg-gray-100">
      <Link
        to={"/"}
        className="p-3 w-28 bg-slate-400 rounded-3xl hover:opacity-70"
      >
        Explore
      </Link>
      <Link
        to={"/"}
        className="p-3 w-28 bg-slate-400 rounded-3xl hover:opacity-70"
      >
        MyPokemon
      </Link>
    </div>
  );
};

export default Footer;
