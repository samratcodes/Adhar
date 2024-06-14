import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import Image from '../Assets/Logonot.png'
const Navbar = () => {
  const navdata = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome className='text-2xl' />
    },{
      name: "Home",
      link: "/",
      icon: <FaHome className='text-2xl' />
    },
    {
      name: "Medical",
      link: "/medical",
      icon: <FaHandHoldingMedical className='text-2xl' />
    },
    {
      name: "Travel",
      link: "/travel",
      icon: <FaBus className='text-2xl' />
    },
    {
      name: "Recreational",
      link: "/Recrartion",
      icon: <FaHome className='text-2xl' />
    }
  ];

  return (
    <div className='w-full p-2 bg-white flex justify-around items-center' >
      <div>
      <Link to='/' className='text-2xl'><img className=' w-16' src={Image} alt="" />
      </Link>
      </div>
      <div className='w-3/6 flex justify-between font-semibold text-gray-700'>
        {
          navdata.map((nav, index) => (
            <Link key={index} to={nav.link} className='flex items-center '>
              {nav.icon}
              <span className=' pl-3 '>{nav.name}</span>
            </Link>
          ))
        }
      </div>
      <div className='flex justify-between w-20'>
        
       <IoIosNotifications className=' text-3xl '/> 
       <Link to='/' className='text-2xl'>
       <FaUser className=' text-2xl '/>
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
