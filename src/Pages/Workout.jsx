import React, { useState, useEffect } from 'react';
import { GiFruitBowl } from "react-icons/gi";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

const Workout = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [foodsData, setFoodsData] = useState([
    {
      Image: "https://via.placeholder.com/150",
      name: "Apple",
      Description: "A sweet, edible fruit produced by an apple tree.",
      Cost: 50
    },
    {
      Image: "https://via.placeholder.com/150",
      name: "Banana",
      Description: "An elongated, edible fruit produced by several kinds of large herbaceous flowering plants.",
      Cost: 20
    },
    {
      Image: "https://via.placeholder.com/150",
      name: "Orange",
      Description: "A type of citrus fruit that is known for being high in vitamin C.",
      Cost: 30
    },
    {
      Image: "https://via.placeholder.com/150",
      name: "Strawberry",
      Description: "A widely grown hybrid species of the genus Fragaria.",
      Cost: 60
    }
  ]);

  const openModal = (food) => {
    setSelectedFood(food);
  };

  const closeModal = () => {
    setSelectedFood(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    const handleClickOutside = (event) => {
      if (event.target.classList.contains('bg-opacity-50')) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='w-full sm:w-4/5 mx-auto flex flex-wrap justify-center mb-10'>
      <div className='w-full font-semibold text-4xl text-center' id='textColor'>
        <div className='flex my-4 justify-center items-center'>
          <GiFruitBowl size={40} /> &nbsp; &nbsp;
          <h1 className='text-4xl font-medium'>Nutrients</h1>
        </div>
      </div>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {foodsData.map((food, index) => (
          <div key={index} className='border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out w-full'>
            <img src={food.Image} alt={food.name} className='w-full h-48 object-cover mb-4 rounded-md' />
            <h2 className='text-xl font-semibold mb-2'>{food.name}</h2>
            <p className='text-sm mb-4'>{food.Description}</p>
            <div className='flex justify-between items-center'>
              <span className='text-lg font-medium'>Rs. {food.Cost}</span>
              <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600' onClick={() => openModal(food)}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedFood && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white px-8 pt-8 pb-4 rounded-md w-11/12 max-w-md">
            <img src={selectedFood.Image} alt={`Image of ${selectedFood.name}`} className='w-full h-60 object-cover mb-4 rounded-md' />
            <h2 className="text-2xl font-semibold mb-2">{selectedFood.name}</h2>
            <p className="text-sm mb-4">{selectedFood.Description}</p>
            <div className='flex items-center'>
              <div className='flex mr-2 text-2xl text-yellow-400'>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
              </div>
              <div className='my-4 font-semibold text-gray-500'>
                (4.5/5) rating
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <p className="text-2xl font-bold">Rs. {selectedFood.Cost}</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={closeModal}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workout;
