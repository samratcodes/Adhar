import React, { useState, useEffect } from 'react';
import { GiFruitBowl } from "react-icons/gi";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

const Workout = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [foodsData, setFoodsData] = useState([
    {
      Image: "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Banana",
      Description: "A sweet, edible fruit produced by an apple tree.",
      Cost: 50
    },
    {
      Image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Proper diet",
      Description: "An elongated, edible fruit produced by several kinds of large herbaceous flowering plants.",
      Cost: 20
    },
    {
      Image: "https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Balance diet",
      Description: "A type of citrus fruit that is known for being high in vitamin C.",
      Cost: 30
    },
    {
      Image: "https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Strawberry",
      Description: "A widely grown hybrid species of the genus Fragaria.",
      Cost: 60
    },
    {
      Image: "https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Grapes",
      Description: "A fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis.",
      Cost: 40
    },
    {
      Image: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Watermelon",
      Description: "A large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice.",
      Cost: 70
    },
    {
      Image: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Kiwi",
      Description: "An edible berry of several species of woody vines in the genus Actinidia.",
      Cost: 90
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
    <div className='w-full sm:w-4/5 mx-auto flex mt-4 flex-wrap justify-center mb-10'>
      <div className='w-full font-semibold text-4xl text-center' id='textColor'>
      <div className='w-4/5 font-semibold text-4xl' id='textColor'>
                <div className='flex w-full items-center mb-4 ' id='LogoPage'>
                <GiFruitBowl className='text-5xl'/>
                    <h1 className='ml-2 text-2xl font-bold'>Diet plan</h1>
                </div>
            </div>
      </div>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {foodsData.map((food, index) => (
          <div key={index} className='border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out bg-white transform hover:-translate-y-2'>
            <img src={food.Image} alt={food.name} className='w-full h-48 object-cover mb-4 rounded-md' />
            <h2 className='text-xl font-semibold mb-2'>{food.name}</h2>
            <p className='text-sm mb-4 text-gray-600'>{food.Description}</p>
            <div className='flex justify-between items-center'>
              <span className='text-lg font-medium text-green-500'>Rs. {food.Cost}</span>
              <button className='bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded hover:from-green-500 hover:to-green-700 transition ease-in-out' onClick={() => openModal(food)}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedFood && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white px-8 pt-8 pb-4 rounded-lg shadow-xl w-11/12 max-w-md">
            <img src={selectedFood.Image} alt={`Image of ${selectedFood.name}`} className='w-full h-60 object-cover mb-4 rounded-md' />
            <h2 className="text-2xl font-semibold mb-2">{selectedFood.name}</h2>
            <p className="text-sm mb-4 text-gray-600">{selectedFood.Description}</p>
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
              <p className="text-2xl font-bold text-green-500">Rs. {selectedFood.Cost}</p>
              <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded hover:from-green-500 hover:to-green-700 transition ease-in-out" onClick={closeModal}>
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
