import React from 'react';
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const DoctorCard = () => {
  const doctorInfo = [{
    image: 'https://images.pexels.com/photos/5998465/pexels-photo-5998465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    rating: 4.5,
    name: 'Dr. John Doe',
    category: 'Cardiologist',
    averageSalary: '5,000',
    visitLink: '/doctor'
  },{
    image: 'https://images.pexels.com/photos/5998465/pexels-photo-5998465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    rating: 4.5,
    name: 'Dr. John Doe',
    category: 'Cardiologist',
    averageSalary: '5,000',
    visitLink: '/doctor'
  }
];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= rating ? "text-yellow-500" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="flex bg-gray-100 justify-center py-10">
      <div className="rounded-lg w-full flex    overflow-hidden shadow-xl bg-white p-6 ">
        {doctorInfo.map((doctor, index) => (
          <div key={index} className="text-center rounded-3xl w-80 m-4 h-80 p-6 flex flex-col items-center justify-around bg-slate-100">
            <div className="w-24 h-24">
              <img className="rounded-full w-full h-full object-cover border-2" src={doctor.image} alt={doctor.name} />
            </div>
            <h2 className="text-2xl font-semibold">{doctor.name}</h2>
            <p className="text-gray-700">{doctor.category}</p>
            <div className="flex justify-center mt-2">
              <p className="text-yellow-500 flex">{renderStars(doctor.rating)}</p>
            </div>
            <p className="text-gray-700 mt-2">Average Cost: Rs. {doctor.averageSalary}</p>
            <Link to={doctor.visitLink}
              className="mt-4 text-white py-2 px-4 rounded flex items-center justify-center" id='Button'
            >
              Visit Now
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorCard;
