import React from 'react';
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Doc1 from '../Assets/doc1.jpg';
import Doc2 from '../Assets/doc2.jpg';
import Doc3 from '../Assets/doc3.jpg';
import Nurse1 from '../Assets/nurse1.jpg';
import Nurse2 from '../Assets/nurse2.jpg';
import Nurse3 from '../Assets/nurse3.jpg';
const DoctorCard = ({ selectedCategory, selectedOption }) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Optional: adds smooth scrolling behavior
    });
  };
  
  const doctorInfo = [{
    image: Doc1,
    rating: 4.5,
    name: 'Dr. Ram Bahadur',
    category: 'Cardiologist',
    averageSalary: '5,000',
    visitLink: '/doctor'
  },{
    image: Doc2,
    rating: 4.5,
    name: 'Dr. Jane Doe',
    category: 'Cardiologist',
    averageSalary: '5,000',
    visitLink: '/doctor'
  },{
    image: Doc3,
    rating: 4,
    name: 'Dr. Jane Doe',
    category: 'Cardiologist',
    averageSalary: '5,000',
    visitLink: '/doctor'
  },{
    image: Doc1,
    rating: 4.5,
    name: 'Dr. Ram Bahadur',
    category: 'Cardiologist',
    averageSalary: '5,000',
    visitLink: '/doctor'
  }];

  const nurseInfo = [{
    image: Nurse1,
    rating: 4.7,
    name: 'Nurse Mary Johnson',
    category: 'ICU Nurse',
    averageSalary: '3,000',
    visitLink: '/doctor'
  },{
    image: Nurse2,
    rating: 4.6,
    name: 'Nurse Sarah Smith',
    category: 'Pediatric Nurse',
    averageSalary: '3,200',
    visitLink: '/doctor'
  },
  {
    image: Nurse3,
    rating: 4.6,
    name: 'Nurse Sarah Smith',
    category: 'Pediatric Nurse',
    averageSalary: '3,200',
    visitLink: '/doctor'
  },{
    image: Nurse1,
    rating: 4.7,
    name: 'Nurse Mary Johnson',
    category: 'ICU Nurse',
    averageSalary: '3,000',
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

  const renderCard = (info) => {
    return info.map((person, index) => (
      <div key={index} className="text-center rounded-3xl w-80 m-4 h-80 p-6 flex flex-col items-center justify-around bg-slate-100">
        <div className="w-24 h-24">
          <img className="rounded-full w-full h-full object-cover border-2" src={person.image} alt={person.name} />
        </div>
        <h2 className="text-2xl font-semibold">{person.name}</h2>
        <p className="text-gray-700">{person.category}</p>
        <div className="flex justify-center mt-2">
          <p className="text-yellow-500 flex">{renderStars(person.rating)}</p>
        </div>
        <p className="text-gray-700 mt-2">Average Cost: Rs. {person.averageSalary}</p>
        <Link to={person.visitLink}
          className="mt-4 text-white py-2 px-4 rounded flex items-center justify-center bg-green-500 hover:bg-green-700"
          onClick={scrollToTop}
        >
          Visit Now
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    ));
  };

  return (
    <div className="flex bg-gray-100 justify-center py-10">
      <div className="rounded-lg w-full flex flex-wrap overflow-hidden shadow-xl bg-white p-6 ">
        {selectedOption === 'Doctor' ? renderCard(doctorInfo) : selectedOption === 'Nurse' ? renderCard(nurseInfo) : <div></div>}
      </div>
    </div>
  );
};

export default DoctorCard;
