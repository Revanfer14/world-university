import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const CountryDetailPage = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        setCountry(response.data[0]);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error fetching country details:", error)
      );
  }, [name]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-100 p-6 fixed">
      <div className="bg-white mb-5 rounded-2xl p-10 mt-10 w-full max-w-4xl text-center">
        <div className="w-full text-left mb-6">
          <Link
            to="/filter"
            className="text-blue-600 hover:underline text-lg font-semibold inline-block"
          >
            Back
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            className="w-48 h-32 object-cover rounded-lg shadow-lg border border-gray-300 hover:scale-105 transition-all duration-300"
          />
          <h1 className="text-4xl font-bold mt-5 text-gray-900">
            {country.name.common}
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-lg text-gray-700">
          <p>
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Area:</span> {country.area} km²
          </p>
          <p>
            <span className="font-semibold">Currency:</span>{" "}
            {Object.values(country.currencies)
              .map((cur) => cur.name)
              .join(", ")}
          </p>
          <p>
            <span className="font-semibold">Languages:</span>{" "}
            {Object.values(country.languages).join(", ")}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
        </div>
      </div>
      <div className="mt-50">
        <Footer background="bg-gray-100" />
      </div>
    </div>
  );
};

export default CountryDetailPage;
