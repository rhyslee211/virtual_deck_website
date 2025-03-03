import React from "react";
import Logo from '../assets/virtualDeckLogoNoText.png';
import { Link , useLocation } from 'react-router-dom';

const Navbar = () => {

  const companyNameStyle = {
    fontFamily: "'Russo One', sans-serif",
    fontSize: "24px",
  };

  const location = useLocation();

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  
  return (
    <div className="bg-slate-900 items-center align-middle h-fit w-full flex flex-col justify-between lg:flex-row">
      <div className="w-full lg:w-1/3 flex flex-row justify-between items-center align-middle">
        <div className="flex flex-row items-center align-middle pl-6 ">
          <Link to={"/"} className="flex flex-row items-center align-middle">
            <img src={Logo} className="mr-12" alt="logo" width={60} height={60} />
          </Link>
          <Link to="/" className="flex flex-row items-center align-middle">
            <h1 style={companyNameStyle} className="text-2xl flex flex-row"><div className="text-cyan-300">Virtual</div>&nbsp;<div className="text-red-600">Deck</div></h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button className="flex flex-row items-center align-middle px-2" onClick={() => setNavbarOpen(!navbarOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <nav className="px-4 bg-slate-900 text-white flex flex-row justify-between items-center align-middle hidden lg:flex">
        <div className="hidden w-full lg:block" id="navbar-default">
          <ul className="text-lg flex flex-row justify-between">
            <li className={`hover:text-gray-400 px-2 ${location.pathname === "/" ? "text-red-500" : ""}`}>
              <Link className="" to="/">
                Home
              </Link>
            </li>
            <li className={`hover:text-gray-400 px-2 ${location.pathname === "/about" ? "text-red-500" : ""}`}>
              <Link className="" to="/about">
                About
              </Link>
            </li>
            <li className={`hover:text-gray-400 px-2 ${location.pathname === "/downloads" ? "text-red-500" : ""}`}>
              <Link className="" to="/downloads">
                Download
              </Link>
            </li>
            <li className={`hover:text-gray-400 px-2 ${location.pathname === "/guide" ? "text-red-500" : ""}`}>
              <Link className="" to="/guide">
                Guide
              </Link>
            </li>
            <li className={`hover:text-gray-400 px-2 ${location.pathname === "/contact" ? "text-red-500" : ""}`}>
              <Link className="" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`lg:hidden border-t border-gray-600 w-5/6 flex justify-center ${navbarOpen ? "block" : "hidden"}`}>
          <ul className="text-lg flex flex-col items-start ">
            <li className={`${location.pathname === "/" ? "text-red-500" : ""}`}>
              <Link className="" to="/">
                Home
              </Link>
            </li>
            <li className={`${location.pathname === "/about" ? "text-red-500" : ""}`}>
              <Link className="" to="/about">
                About
              </Link>
            </li>
            <li className={`${location.pathname === "/downloads" ? "text-red-500" : ""}`}>
              <Link className="" to="/downloads">
                Download
              </Link>
            </li>
            <li className={`${location.pathname === "/contact" ? "text-red-500" : ""}`}>
              <Link className="" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Navbar;