import React from "react";
import logo from "../assets/logo.jpeg";
const Footer = () => {
  return (
    <footer className="py-6 lg:px-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img
              src={logo}
              alt="img"
              height={100}
              width={100}
              className="aspect-[3/2] object-contain mix-blend-color-burn"
            />
            <p className="text-sm">© 2024 Srijan Homes. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline text-black">
              Home
            </a>
            <a href="#" className="hover:underline text-black">
              About
            </a>
            <a href="#" className="hover:underline text-black">
              Services
            </a>
            <a href="#" className="hover:underline text-black">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
