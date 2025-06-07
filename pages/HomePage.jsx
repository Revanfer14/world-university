import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import countries from "../data/countries";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const words = [
    "Welcome",
    "Selamat datang",
    "Bienvenue",
    "어서 오세요",
    "Willkommen",
  ];
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex === words[index].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
      setText(words[index].substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typeSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="bg-gray-100 pt-1 font-primary">
      <div className="container mx-auto my-6 text-center p-5">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {text} to WorldUniversity!
        </motion.h1>
        <p className="text-base md:text-lg mt-3 max-w-2xl mx-auto">
          WorldUniversity is your gateway to learning about the nations of the
          world. With our platform, you can explore comprehensive details about
          different countries, including their geography, culture, economy, and
          more. Whether you are a student, traveler, or just curious about
          global diversity, we provide an engaging and informative experience.
        </p>

        <section className="mt-8">
          <h2 className="text-4xl font-bold font-primary">Popular Countries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
            {countries.map((country, index) => (
              <div
                key={index}
                className="p-4 border-2 border-primary rounded-lg shadow-lg bg-gray-50 transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Link to={`/country/${country.name}`}>
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="w-full h-32 object-cover rounded-md shadow-sm"
                  />
                </Link>
                <h3 className="text-2xl font-semibold mt-2 font-primary">
                  {country.name}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
