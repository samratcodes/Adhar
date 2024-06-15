import React from 'react'
import { Outlet } from 'react-router-dom'
import Image from '../src/Assets/Logonot.png'
import { Link } from 'react-router-dom';
const Dashbioard = () => {


  const DashboardData =[{
name :'Dashboard',
link: '/dashboard',
icon: '0'
  },
  {
    name :'DataSubmit',
    link: '/dashboard/datasubmit',
    icon: '0'
      },
      {
        name :'Jobs',
        link: '/dashboard/jobs',
        icon: '0'
          },
          {
            name :'Payment',
            link: '/dashboard/payment',
            icon: '0'
              }


]
  return (
    <div className='flex w-full'>
      <div className='w-1/5 bg-green-100 flex h-screen justify-center  text-white' id='Button'>
<div className='w-full  flex flex-col items-center'>
<div className='w-full mt-4 flex justify-center  border-white border-b-2'>
       <div className='w-36 '>
       <img src={Image} alt="" />
       </div>
       </div>

<div>
{DashboardData.map((nav, index) => (
  <Link key={index} to={nav.link} className='flex items-center text-xl h-2/3  font-bold  hover:text-green-200 '>
              <div className='text-4xl'>{nav.icon}</div>
              <span className=' pl-3 '>{nav.name}</span>
            </Link>
  ))}
</div>
</div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Dashbioard
