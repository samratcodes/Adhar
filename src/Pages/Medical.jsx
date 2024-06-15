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
          "title": "Temperature", 
          "description": "Measurement of body temperature.", 
          "cost": 200 
        },
        { 
          "title": "Blood Pressure", 
          "description": "Measurement of blood pressure.", 
          "cost": 350 
        },
        { 
          "title": "Cholesterol Levels", 
          "description": "Evaluates different types of cholesterol in the blood.", 
          "cost": 250 
        },
        { 
          "title": "SpO2", 
          "description": "Measurement of blood oxygen saturation levels.", 
          "cost": 150 
        },
        { 
          "title": "Respiration per Minute", 
          "description": "Measurement of the number of breaths per minute.", 
          "cost": 180 
        },
        { 
          "title": "Pulse", 
          "description": "Measurement of heart rate.", 
          "cost": 220 
        }
      ]
      
    },
    {
      "name": "Eye Checkup",
      "subcategories": [
        { 
          "title": "Visual Acuity Test", 
          "description": "Measurement of how well you can see at various distances.", 
          "cost": 100 
        },
        { 
          "title": "Refractor Assessment", 
          "description": "Evaluation of the need for corrective lenses.", 
          "cost": 120 
        },
        { 
          "title": "Color Vision Test", 
          "description": "Assessment of your ability to distinguish between different colors.", 
          "cost": 90 
        },
        { 
          "title": "Eye Muscle Function Test", 
          "description": "Examination of the muscles that control eye movement.", 
          "cost": 110 
        }
      ]
    },{
      "name": "Kidney Function Checkup",
      "subcategories": [
        { 
          "title": "Serum Creatinine Test", 
          "description": "Measurement of creatinine levels in the blood to assess kidney function.", 
          "cost": 130 
        },
        { 
          "title": "BUN Test", 
          "description": "Blood urea nitrogen test to evaluate kidney health.", 
          "cost": 140 
        },
        { 
          "title": "Urine Creatinine Test", 
          "description": "Measurement of creatinine levels in urine to assess kidney function.", 
          "cost": 120 
        },
        { 
          "title": "Kidney Imaging", 
          "description": "Imaging tests like ultrasound or CT scan to visualize the kidneys.", 
          "cost": 250 
        }
      ]
    },{
      "name": "Lung Function Test",
      "subcategories": [
        { 
          "title": "Pulmonary Function Tests", 
          "description": "A series of tests to measure how well your lungs work.", 
          "cost": 300 
        },
        { 
          "title": "Arterial Blood Gas Test", 
          "description": "Measurement of oxygen and carbon dioxide levels in the blood.", 
          "cost": 200 
        },
        { 
          "title": "Bronchoscopy", 
          "description": "A procedure to look inside the lungs' airways using a bronchoscope.", 
          "cost": 400 
        },
        { 
          "title": "Ventilation-Perfusion Scan", 
          "description": "A scan to examine airflow (ventilation) and blood flow (perfusion) in the lungs.", 
          "cost": 350 
        }
      ]
    }
    
    
    
  ];

  const categoriesNurse = [
     { 
          "name": "Wound Dressing", 
          "description": "Professional care and management of wounds to promote healing.", 
          "cost": 100,
          "subcategories": [
            {
              "title": "Basic Wound Dressing",
              "description": "Simple dressing for minor wounds.",
              "cost": 50
            },
            {
              "title": "Advanced Wound Dressing",
              "description": "Complex dressing for severe or chronic wounds.",
              "cost": 150
            }
          ]
        },
        { 
          "name": "Psychological Support", 
          "description": "Emotional and mental health support provided by a nurse.", 
          "cost": 200,
          "subcategories": [
            {
              "title": "Counseling Session",
              "description": "One-on-one counseling session for mental health support.",
              "cost": 100
            },
            {
              "title": "Support Group Session",
              "description": "Group session to share experiences and receive support.",
              "cost": 80
            }
          ]
        },
        { 
          "name": "Normal Check-up", 
          "description": "Routine health check-up by a nurse.", 
          "cost": 150,
          "subcategories": [
            {
              "title": "Vital Signs Monitoring",
              "description": "Measurement of blood pressure, temperature, heart rate, and respiratory rate.",
              "cost": 60
            },
            {
              "title": "Health Assessment",
              "description": "Comprehensive assessment of overall health status.",
              "cost": 100
            }
          ]
        }
      ]
    
    
    
  

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
