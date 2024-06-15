import React from 'react'
import Image from '../Assets/logoWhite.png'
import { FaFileInvoiceDollar } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { Link } from 'react-router-dom'
import { FaUserShield } from "react-icons/fa";
import { MdNoFood } from "react-icons/md";
const AdminNavbar = () => {
const adminNavItems =[
    { name: 'Recreational', link: '/admin/recreationaladmin', icon: <GrGroup className='text-2xl'/> },
    { name: 'Payment Verification', link: '/admin/paymentadmin', icon: <FaFileInvoiceDollar className='text-2xl'/> },
    { name: 'Profile Admin', link: '/admin/profileadmin', icon: <FaUserShield className='text-2xl'/>},
    { name: 'Nutrition Admin', link: '/admin/NutritionAdmin', icon:<MdNoFood className='text-2xl'/> }
]
  return (
    <div className='w-full p-2  flex justify-center' id='Button'>
<div className='w-11/12 flex justify-between'>
<div className="logo w-20">
        <img src={Image} alt="" />
      </div>
<div className='flex justify-center items-center '>
{adminNavItems.map((item, index) => (
          <Link key={index} to={item.link} className=" pr-4 rounded-md text-sm h-max w-max text-white font-bold  hover:text-gray-200 flex items-center">
            <span className="mr-2">{item.icon}</span>
            <span>{item.name}</span>
          </Link>))}
</div>

</div>
    </div>
  )
}

export default AdminNavbar
