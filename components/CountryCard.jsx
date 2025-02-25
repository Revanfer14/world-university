import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <div className="border-2 p-4 rounded shadow-md bg-gray-50">
      <img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        className="w-20 h-14 mb-5"
      />
      <h2 className="text-xl font-bold">{country.name.common}</h2>
      <Link
        to={`/country/${country.name.common}`}
        className="text-blue-700 font-semibold hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default CountryCard;
