import React from "react";

const Header = () => {
  return (
    <header className="bg-green-600 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">
          <a href="/" className="hover:text-yellow-300">
            Khana-<span className="text-yellow-300">Khazana</span>
          </a>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-yellow-300">
            Home
          </a>
          <a href="#recipes" className="hover:text-yellow-300">
            Recipes
          </a>
          <a href="#about" className="hover:text-yellow-300">
            About
          </a>
          <a href="#contact" className="hover:text-yellow-300">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => alert("Toggle mobile menu functionality here!")}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
