import React, { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="img"
              height={100}
              width={100}
              className=" aspect-[3/2] object-contain mix-blend-color-burn"
            />
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="hover:border-b hover:border-orange-500 px-3 py-2 text-black"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:border-b hover:border-orange-500 px-3 py-2 text-black"
            >
              About
            </a>
            <a
              href="#"
              className="hover:border-b hover:border-orange-500 px-3 py-2 text-black "
            >
              Services
            </a>
            <a
              href="#"
              className="hover:border-b hover:border-orange-500 px-3 py-2 text-black"
            >
              Contact
            </a>
          </div>
          <div className="text-black mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="ttext-black p-2 rounded">
              <ReorderIcon />
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="hover:bg-blue-500 block px-3 py-2 rounded">
            Home
          </a>
          <a href="#" className="hover:bg-blue-500 block px-3 py-2 rounded">
            About
          </a>
          <a href="#" className="hover:bg-blue-500 block px-3 py-2 rounded">
            Services
          </a>
          <a href="#" className="hover:bg-blue-500 block px-3 py-2 rounded">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
