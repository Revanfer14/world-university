import { useState, useContext } from "react";
import { CountryContext } from "../context/CountryContext";
import CountryCard from "../components/CountryCard";

const CountrySearchFilterPage = () => {
  const { countries } = useContext(CountryContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [continent, setContinent] = useState("");
  const [language, setLanguage] = useState("");
  const [isIndependent, setIsIndependent] = useState("");

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesContinent = continent ? country.region === continent : true;
    const matchesLanguage = language
      ? Object.values(country.languages || {}).includes(language)
      : true;
    const matchesIndependence =
      isIndependent !== ""
        ? country.independent === (isIndependent === "true")
        : true;
    return (
      matchesSearch &&
      matchesContinent &&
      matchesLanguage &&
      matchesIndependence
    );
  });

  return (
    <>
      <div className="p-6 md:p-10 bg-gray-100 min-h-screen font-primary">
        <div className="max-w-9xl mx-auto bg-white rounded-lg p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Country Search & Filter
          </h1>

          {/* Search & Filter Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <input
              type="text"
              placeholder="Search for a country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-3 md:p-4 rounded-md shadow-sm text-lg w-full"
            />

            <select
              onChange={(e) => setContinent(e.target.value)}
              className="border p-3 md:p-4 rounded-md shadow-sm text-lg w-full"
            >
              <option value="">Select Continent</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>

            <select
              onChange={(e) => setLanguage(e.target.value)}
              className="border p-3 md:p-4 rounded-md shadow-sm text-lg w-full"
            >
              <option value="">Select Language</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>

            <select
              onChange={(e) => setIsIndependent(e.target.value)}
              className="border p-3 md:p-4 rounded-md shadow-sm text-lg w-full"
            >
              <option value="">Select Independence Status</option>
              <option value="true">Independent</option>
              <option value="false">Not Independent</option>
            </select>
          </div>

          {/* Country Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCountries.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountrySearchFilterPage;
