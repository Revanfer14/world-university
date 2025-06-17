import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios;
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,region,languages,independent,flags,cca3"
      )
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  return (
    <CountryContext.Provider value={{ countries, loading }}>
      {children}
    </CountryContext.Provider>
  );
};
