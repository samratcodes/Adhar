import React, { useState } from 'react';
import SecondaryHeader from "../Components/SecondaryHeader";
const FoodForm = () => {
  const [formData, setFormData] = useState({
    Image: '',
    name: '',
    Description: '',
    Cost: '',
    Quantity: '',
    Category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Do something with the form data, like sending it to a server
    // Reset the form after submission
    setFormData({
      Image: '',
      name: '',
      Description: '',
      Cost: '',
      Quantity: '',
      Category: ''
    });
  };

  return (
    <div className="w-4/5 mx-auto pt-2 mt-1  rounded-lg ">
     <SecondaryHeader
          header={" Post diet"}
          className={"mb-5"}
        />
      <form onSubmit={handleSubmit} className="space-y-4 p-4  bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="Image" className="block text-sm font-medium text-gray-700">Image URL:</label>
            <input
              type="text"
              id="Image"
              name="Image"
              value={formData.Image}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter image URL"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter food name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="Description" className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            id="Description"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            rows="3"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
            placeholder="Enter description"
          ></textarea>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="Cost" className="block text-sm font-medium text-gray-700">Cost (Rs.):</label>
            <input
              type="number"
              id="Cost"
              name="Cost"
              value={formData.Cost}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter cost"
            />
          </div>
          <div>
            <label htmlFor="Quantity" className="block text-sm font-medium text-gray-700">Quantity:</label>
            <input
              type="number"
              id="Quantity"
              name="Quantity"
              value={formData.Quantity}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter quantity"
            />
          </div>
        </div>
        <div>
          <label htmlFor="Category" className="block text-sm font-medium text-gray-700">Category:</label>
          <input
            type="text"
            id="Category"
            name="Category"
            value={formData.Category}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
            placeholder="Enter category"
          />
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-2 rounded hover:from-green-500 hover:to-green-700 transition ease-in-out">
          Add Food
        </button>
      </form>
    </div>
  );
};

export default FoodForm;
