import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaUsers,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaLanguage,
  FaExpand,
} from "react-icons/fa";
import CountryMap from "../components/Maps";

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
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );

  return (
    <div className="flex flex-col flex-grow bg-gray-100 px-4 sm:px-4 md:px-12 md:pb-24">
      {/* Main content */}
      <div className="flex-wrap mt-5 mb-5 sm:mb-20 md:mt-44 sm:mt-10 flex justify-center items-center md:flex-row">
        <div className="w-3/4 md:w-full max-w-6xl flex flex-col md:flex-row gap-6">
          {/* Country Info Card */}
          <div className="bg-white rounded-xl p-6 sm:p-5 w-full md:w-1/2 shadow-md border border-gray-200">
            <div className="w-full text-left mb-4">
              <Link
                to="/filter"
                className="text-blue-600 hover:underline text-lg font-semibold"
              >
                ← Back
              </Link>
            </div>

            {/* Country Flag and Name */}
            <div className="flex flex-col items-center">
              <img
                src={country.flags.svg}
                alt={`${country.name.common} flag`}
                className="w-32 h-24 sm:w-28 sm:h-20 object-cover rounded-lg shadow-md border border-gray-300 hover:scale-105 transition-transform duration-300"
              />
              <h1 className="text-3xl font-bold mt-2 text-gray-900">
                {country.name.common}
              </h1>
            </div>

            {/* Country Details */}
            <div className="grid grid-cols-1 gap-3 mt-4 text-gray-700">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-blue-600 text-lg" />
                <p>
                  <span className="font-semibold">Capital:</span>{" "}
                  {country.capital}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <FaUsers className="text-green-600 text-lg" />
                <p>
                  <span className="font-semibold">Population:</span>{" "}
                  {country.population.toLocaleString()}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <FaExpand className="text-red-600 text-lg" />
                <p>
                  <span className="font-semibold">Area:</span> {country.area}{" "}
                  km²
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <FaMoneyBillWave className="text-yellow-600 text-lg" />
                <p>
                  <span className="font-semibold">Currency:</span>
                  {Object.values(country.currencies)
                    .map((cur) => ` ${cur.name}`)
                    .join(", ")}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <FaLanguage className="text-purple-600 text-lg" />
                <p>
                  <span className="font-semibold">Languages:</span>{" "}
                  {Object.values(country.languages).join(", ")}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <FaGlobe className="text-gray-600 text-lg" />
                <p>
                  <span className="font-semibold">Region:</span>{" "}
                  {country.region}
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps Card */}
          <div className="bg-white rounded-xl p-6 w-full md:w-1/2 shadow-md border border-gray-200 z-0 relative">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Location</h2>
            <div className="w-full h-64 sm:h-80">
              <CountryMap
                lat={country.latlng[0]}
                lon={country.latlng[1]}
                name={country.name.common}
              />
            </div>
            <p className="mt-3 text-lg">
              <a
                href={country.maps.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                View on Google Maps
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
