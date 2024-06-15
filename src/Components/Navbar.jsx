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
const Navbar = () => {
  const navdata = [
    {
      name: "Home",
      link: "/",
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
    <div className="w-full p-2 bg-white flex justify-around items-center">
      <div>
        <Link to="/" className="text-2xl">
          <img className=" w-16" src={Image} alt="" />
        </Link>
      </div>

      <div className='w-5/12 flex justify-between font-semibold text-gray-700'>
        {
          navdata.map((nav, index) => (
            <Link key={index} to={nav.link} className='flex items-center '>
              {nav.icon}
              <span className=' pl-3 '>{nav.name}</span>
            </Link>
          ))
        }
      </div>
      <div className='flex justify-between items-center '>
      <Link
      to="/premium"
      className="subscription-link"
    >
      Subscription
    </Link>
      <Link to='/dashboard' className='bg-green-500 mr-4 h-max text-white rounded-3xl font-bold px-4 py-2 text-sm '>
      Dashboard
      </Link>
      <Link to='/admin/profileadmin' className='bg-green-500 h-max text-white rounded-3xl font-bold px-4 py-2 text-sm '>
      Admin
      </Link>


    </div>
    </div>
  );
};

export default Navbar;
