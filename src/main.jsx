import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { CountryProvider } from "../context/CountryContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "../pages/HomePage";
import CountryDetailPage from "../pages/CountryDetailPage";
import CountryFilterPage from "../pages/CountryFilterPage";
import AboutPage from "../pages/AboutPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { setupLenis } from "../scroll/lenisSetup";

const App = () => {
  useEffect(() => {
    setupLenis();
  }, []);

  return (
    <StrictMode>
      <CountryProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/country/:name" element={<CountryDetailPage />} />
            <Route path="/filter" element={<CountryFilterPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </Router>
      </CountryProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
