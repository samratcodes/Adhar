import React from "react";
import { MdDashboard } from "react-icons/md";
import { Outlet } from "react-router-dom";
import Image from "../src/Assets/LogoWhitetext.png";
import { MdWork } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaWpforms } from "react-icons/fa6";
const Dashbioard = () => {
  const DashboardData = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <MdDashboard />,
    },
    {
      name: "DataSubmit",
      link: "/dashboard/datasubmit",
      icon: <FaWpforms />,
    },
    {
      name: "Jobs",
      link: "/dashboard/jobs",
      icon: <MdWork />,
    },
    {
      name: "Payment",
      link: "/dashboard/payment",
      icon: <MdPayments />,
    },
  ];
  return (
    <div className="flex w-full">
      <div
        className="w-[250px] flex-shrink-0 bg-green-100 flex h-screen justify-center  text-white"
        id="Button"
      >
        <div className="w-full  flex flex-col items-center">
          <div className="w-full  flex justify-center  border-white border-b-2">
            <div className="w-28 m-6">
              <img src={Image} alt="" />
            </div>
          </div>

          <div>
            {DashboardData.map((nav, index) => (
              <Link
                key={index}
                to={nav.link}
                className="flex items-center text-xl h-2/3  font-bold  hover:text-green-200 "
              >
                <div className="text-4xl">{nav.icon}</div>
                <span className=" pl-3 ">{nav.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex  w-full justify-center h-screen overflow-scroll">

      <Outlet />
      </div>
    </div>
  );
};

export default Dashbioard;
