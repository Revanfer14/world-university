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
import Footer from "../components/Footer";
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
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-screen bg-gray-100 p-6 fixed mt-8">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Country Info Card */}
        <div className="bg-white rounded-2xl p-8 w-full md:w-1/2 shadow-lg border border-gray-200">
          <div className="w-full text-left mb-4">
            <Link
              to="/filter"
              className="text-blue-600 hover:underline text-lg font-semibold inline-block"
            >
              ← Back
            </Link>
          </div>

          {/* Country Flag and Name */}
          <div className="flex flex-col items-center">
            <img
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              className="w-32 h-24 object-cover rounded-lg shadow-md border border-gray-300 hover:scale-105 transition-all duration-300"
            />
            <h1 className="text-3xl font-bold mt-3 text-gray-900">
              {country.name.common}
            </h1>
          </div>

          {/* Country Details */}
          <div className="grid grid-cols-1 gap-4 mt-6 text-gray-700">
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <p>
                <span className="font-semibold">Capital:</span>{" "}
                {country.capital}
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <FaUsers className="text-green-600 text-xl" />
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {country.population.toLocaleString()}
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <FaExpand className="text-red-600 text-xl" />
              <p>
                <span className="font-semibold">Area:</span> {country.area} km²
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <FaMoneyBillWave className="text-yellow-600 text-xl" />
              <p>
                <span className="font-semibold">Currency:</span>
                {Object.values(country.currencies)
                  .map((cur) => ` ${cur.name}`)
                  .join(", ")}
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <FaLanguage className="text-purple-600 text-xl" />
              <p>
                <span className="font-semibold">Languages:</span>{" "}
                {Object.values(country.languages).join(", ")}
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <FaGlobe className="text-gray-600 text-xl" />
              <p>
                <span className="font-semibold">Region:</span> {country.region}
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps Card */}
        <div className="bg-white rounded-2xl p-6 w-full md:w-1/2 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Location</h2>
          <div className="w-full h-90">
            <CountryMap
              lat={country.latlng[0]}
              lon={country.latlng[1]}
              name={country.name.common}
            />
          </div>
          <p className="mt-5 text-lg">
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

      <div className="mt-35">
        <Footer background="bg-gray-100" />
      </div>
    </div>
  );
};

export default CountryDetailPage;
