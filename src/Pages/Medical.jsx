import React, { useState, useEffect } from 'react';
import { FaHandHoldingMedical } from "react-icons/fa";
import DoctorCard from '../Components/DoctorCard';

const Medical = () => {
  const [selectedCategory, setSelectedCategory] = useState(0); // Default to the first category
  const [selectedOption, setSelectedOption] = useState('Doctor'); // Default to 'doctor'
  const [selectedSubcategory, setSelectedSubcategory] = useState(0); // Default to the first subcategory

  const categoriesDoctor = [
    {
      name: 'General Checkup',
      subcategories: [
        { 
          title: 'Temperature', 
          description: 'Measurement of body temperature.', 
          cost: 200 
        },
        { 
          title: 'Blood Pressure', 
          description: 'Measurement of blood pressure.', 
          cost: 350 
        },
        { 
          title: 'Cholesterol Levels', 
          description: 'Evaluates different types of cholesterol in the blood.', 
          cost: 250 
        },
      ]
    },
    {
      name: 'Heart Health',
      subcategories: [
        { 
          title: 'Cardiac Checkup', 
          description: 'Assessment of overall heart health.', 
          cost: 300 
        },
        { 
          title: 'Heart Rate', 
          description: 'Number of heartbeats per minute.', 
          cost: 150 
        },
      ]
    },
  ];

  const categoriesNurse = [
    {
      name: 'Blood Checkup',
      subcategories: [
        { 
          title: 'Sugar', 
          description: 'Measures blood glucose levels for diabetes assessment.', 
          cost: 250 
        },
        { 
          title: 'Cholesterol', 
          description: 'Assesses levels of cholesterol in the blood.', 
          cost: 350 
        },
      ]
    },
    {
      name: 'Skin Care',
      subcategories: [
        { 
          title: 'Acne', 
          description: 'Common skin condition with pimples and inflammation.', 
          cost: 300 
        },
        { 
          title: 'Eczema', 
          description: 'Inflammatory skin condition causing itching and redness.', 
          cost: 250 
        },
      ]
    },
  ];

  const categoriesCaretaker = [
    {
      name: 'Elderly Care',
      subcategories: [
        { 
          title: 'Mobility Assistance', 
          description: 'Help with walking, moving around, and transferring from one place to another.', 
          cost: 150 
        },
        { 
          title: 'Personal Hygiene', 
          description: 'Assistance with bathing, grooming, and toileting.', 
          cost: 200 
        },
      ]
    },
    {
      name: 'Meal Preparation',
      subcategories: [
        { 
          title: 'Daily Meals', 
          description: 'Preparation of nutritious meals based on dietary needs and preferences.', 
          cost: 100 
        },
        { 
          title: 'Special Diets', 
          description: 'Preparation of meals tailored to specific dietary restrictions or health conditions.', 
          cost: 120 
        },
      ]
    },
  ];

  // Handle dropdown option change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedCategory(0); // Reset selected category to the first one
    setSelectedSubcategory(0); // Reset selected subcategory to the first one
  };

  // Determine which categories to use based on selected option
  let categoriesToShow = [];
  switch (selectedOption) {
    case 'Doctor':
      categoriesToShow = categoriesDoctor;
      break;
    case 'Nurse':
      categoriesToShow = categoriesNurse;
      break;
    case 'Caretaker':
      categoriesToShow = categoriesCaretaker;
      break;
    default:
      categoriesToShow = categoriesDoctor; // Default to doctor if option not recognized
      break;
  }

  // Function to handle category click
  const handleCategoryClick = (categoryIndex) => {
    setSelectedCategory(categoryIndex);
    setSelectedSubcategory(0); // Reset selected subcategory to the first one
  };

  useEffect(() => {
    setSelectedSubcategory(0);
  }, [selectedCategory]);

  return (
    <div className="flex justify-center bg-gray-100">
      <div className='flex flex-col w-4/5 items-center h-screen'>
        <div className='flex w-full items-center ' id='LogoPage'>
          <FaHandHoldingMedical className='text-4xl mr-2 my-4 ' />
          <h1 className='text-2xl font-bold'>Medical</h1>
        </div>

        <div className="w-full mb-4">
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="p-2 rounded-md border border-gray-300 focus:outline-none"
          >
            <option value="Doctor">Doctor</option>
            <option value="Nurse">Nurse</option>
            <option value="CareTaker">Caretaker</option>
          </select>
        </div>
        <div className="flex flex-row w-full bg-white">
          <div className="w-full md:w-1/4 p-4 border-r border-gray-300">
            <ul>
              {categoriesToShow.map((category, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(index)}
                  className={`mt-2 cursor-pointer rounded-md text-xl pl-3 py-3 ${
                    selectedCategory === index ? 'bg-gray-300' : 'hover:bg-gray-100'
                  } border-b border-gray-300`}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-grow border-gray-300 p-8">
            {selectedCategory !== null && (
              <div>
                <h3 className="text-2xl font-bold mb-4">{categoriesToShow[selectedCategory].name}</h3>
                <ul>
                  {categoriesToShow[selectedCategory].subcategories.map((subcategory, index) => (
                    <li
                      key={index}
                      className={`mb-2 p-2 flex justify-between border-b border-gray-300 `}
                      
                    >
                      <div>
                        <h4 className="text-xl font-semibold">{subcategory.title}</h4>
                        <p>{subcategory.description}</p>
                      </div>
                      <div className="text-right">
                    
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        
       
      <div className="w-full shadow-lg rounded-lg p-8 ">
        <h1 className="text-2xl font-bold mb-4">{selectedOption} Profiles</h1>
        {/* <div className="text-lg mb-4">{selectedCategory}</div> */}
        <DoctorCard />
      </div>
    </div>

    
    </div>
  );
};

export default Medical;
