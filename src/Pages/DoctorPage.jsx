import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

const DoctorPage = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      author: 'John Doe',
      text: "Dr. Carter is incredibly knowledgeable and caring. She explained everything clearly and took the time to answer all my questions."
    },
    {
      author: 'Jane Smith',
      text: "I've been seeing Dr. Carter for years and wouldn't trust anyone else with my health. She's compassionate and always goes above and beyond."
    },
    {
      author: 'Michael Johnson',
      text: "Great experience with Dr. Carter. Very professional and attentive."
    }
  ]);

  const [bookingName, setBookingName] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');

  const doctorDetails = {
    "name": "Dr. Emily Carter, MD",
    "specialization": "Doctor of Medicine (MD)",
    "hospital": "City Hospital, 123 Main Street, Anytown, USA",
    "experience": "15 years",
    "email": "emily.carter@example.com",
    "contact": "+1 (555) 123-4567",
    "profileImage": "https://images.pexels.com/photos/5998465/pexels-photo-5998465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "rating": "5.0",
    "numReviews": 102,
    "expertise": [
      "Cardiology",
      "Internal Medicine",
      "Preventive Healthcare"
    ]
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '') return; // Prevent empty comments
    const newComment = {
      author: 'Anonymous', // You can add user authentication to fetch the real username
      text: comment
    };
    setComments([...comments, newComment]);
    setComment('');
  };

  const handleBookingNameChange = (e) => {
    setBookingName(e.target.value);
  };

  const handleBookingDateChange = (e) => {
    setBookingDate(e.target.value);
  };

  const handleBookingTimeChange = (e) => {
    setBookingTime(e.target.value);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { bookingName, bookingDate, bookingTime });
    setBookingName('');
    setBookingDate('');
    setBookingTime('');
  };

  const rating = parseFloat(doctorDetails.rating);

  return (
    <div className="container w-11/12 mx-auto px-4 py-8">
      <div className="bg-white flex justify-around rounded-lg shadow-md lg:flex">
        <div className="w-full lg:w-1/3 flex flex-col pt-12 items-center">
          <img src={doctorDetails.profileImage} alt="Profile" className="rounded-full mx-auto lg:mx-0 lg:float-left w-40 h-40 lg:w-48 lg:h-48 object-cover border-4 border-green-500" />
          <h1 className="text-2xl pt-3 text-gray-800 font-bold">{doctorDetails.name}</h1>
        </div>
        <div className="w-full lg:w-1/3 p-4">
         
          <p className="text-gray-600 mb-4">{doctorDetails.specialization}</p>
          <p className="text-gray-600 mb-4">{doctorDetails.hospital}</p>
          <p className="text-gray-600 mb-4">Experience: {doctorDetails.experience}</p>
          <p className="text-gray-600 mb-4">Email: {doctorDetails.email}</p>
          <p className="text-gray-600 mb-4">Contact: {doctorDetails.contact}</p>

          <div className="flex items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 mr-2">Rating:</h2>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className={`h-6 w-6 ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`} />
              ))}
            </div>
            <span className="ml-2 text-gray-600">{rating.toFixed(1)} ({doctorDetails.numReviews} reviews)</span>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800">Expertise:</h2>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {doctorDetails.expertise.map((expertise, index) => (
                <li key={index}>{expertise}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg   p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Book an Appointment:</h2>
        <form onSubmit={handleBookingSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="bookingName" className="block text-sm font-medium text-gray-700">Your Name:</label>
              <input
                type="text"
                id="bookingName"
                name="bookingName"
                value={bookingName}
                onChange={handleBookingNameChange}
                className="shadow-sm focus:ring-indigo-500 pl-4 p-1 border-2 border-gray-400 focus:border-indigo-500 mt-1 block w-full sm:text-sm  rounded-md"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-700">Preferred Date:</label>
              <input
                type="date"
                id="bookingDate"
                name="bookingDate"
                value={bookingDate}
                onChange={handleBookingDateChange}
                className="shadow-sm focus:ring-indigo-500 pl-4 p-1 border border-gray-400 focus:border-indigo-500 mt-1 block w-full sm:text-sm  rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="bookingTime" className="block text-sm font-medium text-gray-700">Preferred Time:</label>
              <input
                type="time"
                id="bookingTime"
                name="bookingTime"
                value={bookingTime}
                onChange={handleBookingTimeChange}
                className="shadow-sm focus:ring-indigo-500 pl-4 p-1 border border-gray-400 focus:border-indigo-500 mt-1 block w-full sm:text-sm  rounded-md"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
      </div>

     

      <div className="bg-white rounded-lg shadow-md mt-8 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Comments from Patients:</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Leave a comment:</label>
          <textarea
            id="comment"
            name="comment"
            rows="3"
            value={comment}
            onChange={handleChange}
            className="shadow-sm px-3 py-2 placeholder-gray-400 border border-green-500 focus:ring-green-900 focus:border-indigo-500 mt-1 block w-full sm:text-sm  rounded-md"
            placeholder="Type your comment here..."
            required
          ></textarea>
          <div className="mt-2">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Post Comment
            </button>
          </div>
        </form>
        {comments.map((comment, index) => (
          <div key={index} className="mt-4">
            <p className="text-gray-600"><span className="font-bold">{comment.author}:</span> {comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorPage;
