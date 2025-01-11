import React from "react";
import logo from '../virtualDeckLogoNoText.png';

const Navbar = ({setSection, section}) => {

  const companyNameStyle = {
    fontFamily: "'Russo One', sans-serif",
    fontSize: "24px",
  };
  
  return (
    <div className="bg-slate-900 items-center align-middle pl-6">
      <div className="w-1/3 flex flex-row justify-between items-center align-middle">
        <div className="flex flex-row items-center align-middle">
          <img src={logo} className="mr-12" alt="logo" width={60} height={60} />
          <h1 style={companyNameStyle} className="text-2xl flex flex-row"><div className="text-cyan-300">Virtual</div>&nbsp;<div className="text-red-600">Deck</div></h1>
        </div>
        <nav className="py-1 bg-slate-900 text-white flex flex-row justify-between items-center align-middle w-1/2">
          <div className="hidden w-full lg:block" id="navbar-default">
            <ul className="text-lg flex flex-row justify-between">
              <li className={`hover:text-gray-400 ${section === "home" ? "text-red-500" : ""}`}>
                <button className="" onClick={() => setSection("home")}>
                  Home
                </button>
              </li>
              <li className={`hover:text-gray-400 ${section === "about" ? "text-red-500" : ""}`}>
                <button className="" onClick={() => setSection("about")}>
                  About
                </button>
              </li>
              <li className={`hover:text-gray-400 ${section === "download" ? "text-red-500" : ""}`}>
                <button className="" onClick={() => setSection("download")}>
                  Download
                </button>
              </li>
              <li className={`hover:text-gray-400 ${section === "contact" ? "text-red-500" : ""}`}>
                <button className="" onClick={() => setSection("contact")}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;