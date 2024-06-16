import React from "react";
import { Link } from "react-router-dom";
import { FaPeopleLine } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import Image from "../Assets/Logonot.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navdata = [
    {
      name: "Home",
      link: "/home",
      icon: <FaHome className="text-2xl" />,
    },
    {
      name: "Medical",
      link: "/medical",
      icon: <FaHandHoldingMedical className="text-2xl" />,
    },
    {
      name: "Travel",
      link: "/travel",
      icon: <FaBus className="text-2xl" />,
    },
    {
      name: "Recreational",
      link: "/Recrartion",
      icon: <FaPeopleLine className="text-2xl" />,
    },
    {
      name: "Diet Plan",
      link: "/Niutrition",
      icon: <GiFruitBowl className="text-2xl" />,
    },
  ];

  return (
    <div className="w-full p-2 bg-white flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-2xl">
          <img className="w-16" src={Image} alt="" />
        </Link>
        <button
          className="text-3xl ml-4 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
      </div>

      <div className="hidden md:flex w-5/12 justify-between font-semibold text-gray-700">
        {navdata.map((nav, index) => (
          <Link key={index} to={nav.link} className="flex items-center">
            {nav.icon}
            <span className="pl-3">{nav.name}</span>
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center">
        <Link to="/premium" className="subscription-link mr-4">
          Subscription
        </Link>
        <Link to="/dashboard" className="bg-green-50 mr-4 text-green-500 shadow-md rounded-3xl font-bold px-4 py-2 text-sm">
          Dashboard
        </Link>
        <Link to="/admin/profileadmin" className="bg-green-50 mr-4 text-green-500 shadow-md rounded-3xl font-bold px-4 py-2 text-sm">
          Admin
        </Link>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white flex flex-col items-start p-4 shadow-md z-50">
          {navdata.map((nav, index) => (
            <Link key={index} to={nav.link} className="flex items-center w-full py-2">
              {nav.icon}
              <span className="pl-3">{nav.name}</span>
            </Link>
          ))}
          <Link to="/premium" className="subscription-link w-full py-2">
            Subscription
          </Link>
          <Link to="/dashboard" className="bg-green-500 w-full text-white rounded-3xl font-bold px-4 py-2 text-sm mt-2">
            Dashboard
          </Link>
          <Link to="/admin/profileadmin" className="bg-green-500 w-full text-white rounded-3xl font-bold px-4 py-2 text-sm mt-2">
            Admin
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
