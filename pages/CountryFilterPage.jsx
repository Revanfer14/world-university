import { useState, useContext } from "react";
import { CountryContext } from "../context/CountryContext";
import CountryCard from "../components/CountryCard";
import Footer from "../components/Footer";

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
      <div className="p-12 bg-gray-100 min-h-screen font-primary">
        <div className="max-w-9xl mx-auto bg-white rounded-lg p-10">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Country Search & Filter
          </h1>
          <div className="flex flex-col md:flex-row md:space-x-6 mb-8">
            <input
              type="text"
              placeholder="Search for a country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-4 mb-6 md:mb-0 flex-1 rounded-md shadow-sm text-lg"
            />
            <select
              onChange={(e) => setContinent(e.target.value)}
              className="border p-4 mb-6 md:mb-0 flex-1 rounded-md shadow-sm text-lg"
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
              className="border p-4 mb-6 md:mb-0 flex-1 rounded-md shadow-sm text-lg"
            >
              <option value="">Select Language</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
            <select
              onChange={(e) => setIsIndependent(e.target.value)}
              className="border p-4 flex-1 rounded-md shadow-sm text-lg"
            >
              <option value="">Select Independence Status</option>
              <option value="true">Independent</option>
              <option value="false">Not Independent</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {filteredCountries.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
          </div>
        </div>
      </div>
      <Footer background="bg-gray-100" />
    </>
  );
};

export default CountrySearchFilterPage;
