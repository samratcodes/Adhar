import React, { useState } from 'react';

const DietInput = () => {
  const [formData, setFormData] = useState({
    Image: '',
    name: '',
    Description: '',
    Cost: ''
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
      Cost: ''
    });
  };

  return (
    <div>
      <h2>Add New Food</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Image">Image URL:</label>
          <input
            type="text"
            id="Image"
            name="Image"
            value={formData.Image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Description">Description:</label>
          <textarea
            id="Description"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="Cost">Cost (Rs.):</label>
          <input
            type="number"
            id="Cost"
            name="Cost"
            value={formData.Cost}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
};

export default DietInput;
