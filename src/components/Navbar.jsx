import React from "react";
import propic from "../assets/propic.JPG";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={propic}
            alt="Akhil Joseph"
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-600"
          />
          <h1 className="text-2xl font-bold text-white">Akhil Joseph</h1>
        </div>

        <div className="flex gap-8">
          <a
            href="#projects"
            className="text-gray-300 hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-300 hover:text-white transition"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
