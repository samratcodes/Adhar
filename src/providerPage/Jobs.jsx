import { useState } from "react";
import old4 from "../Assets/old4.jpg";
import old5 from "../Assets/old5.jpg";
import old6 from "../Assets/old6.jpg";

const dummyData = [
  {
    id: 1,
    name: "Alice Brown",
    age: 55,
    gender: "Female",
    condition: "Diabetes management",
    date: "2024-07-01",
    time: "9:00 AM",
    profileImg: old4,
  },
  {
    id: 2,
    name: "Robert Wilson",
    age: 50,
    gender: "Male",
    condition: "Post-heart surgery",
    date: "2024-07-02",
    time: "10:00 AM",
    profileImg: old5,
  },
  {
    id: 3,
    name: "Emily Davis",
    age: 65,
    gender: "Female",
    condition: "Arthritis care",
    date: "2024-07-03",
    time: "11:00 AM",
    profileImg: old6,
  },
];

export default function Jobs() {
  const [bookings, setBookings] = useState(dummyData);

  const handleAccept = (id) => {
    alert(`Booking for user ID ${id} accepted.`);
  };

  const handleReject = (id) => {
    alert(`Booking for user ID ${id} rejected.`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">
        Nurse Bookings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              className="w-full h-80 object-cover"
              src={booking.profileImg}
              alt={booking.name}
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {booking.name}
              </h2>
              <p className="text-gray-700 mb-2">
                <strong>Age:</strong> {booking.age}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Gender:</strong> {booking.gender}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Condition:</strong> {booking.condition}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Date:</strong> {booking.date}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Time:</strong> {booking.time}
              </p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleAccept(booking.id)}
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleReject(booking.id)}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
