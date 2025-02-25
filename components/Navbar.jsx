import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 font-primary w-full">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/logo.png" className="w-auto h-16" alt="Logo" />
          <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
            WorldUniversity
          </span>
        </Link>
        <div className="flex items-center space-x-12">
          <Link
            to="/filter"
            className="text-xl text-white hover:text-blue-600 hover:text-xl"
          >
            Countries
          </Link>
          <Link
            to="/about"
            className="text-xl text-white hover:text-blue-600 hover:text-xl"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
