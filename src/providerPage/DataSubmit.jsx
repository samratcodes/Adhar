import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import oldperson1 from "../Assets/oldperson1.jpg";
import oldperson2 from "../Assets/oldperson2.jpg";
import oldperson3 from "../Assets/oldperson3.jpg";

const DataSubmit = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      profileImg: oldperson1,
      email: "john.doe@example.com",
      phone: "+1 555-123-456",
    },
    {
      id: 2,
      name: "Jane Smith",
      profileImg: oldperson2,
      email: "jane.smith@example.com",
      phone: "+1 555-234-567",
    },
    {
      id: 3,
      name: "Michael Johnson",
      profileImg: oldperson3,
      email: "michael.johnson@example.com",
      phone: "+1 555-345-678",
    },
  ];

  const [selectedUser, setSelectedUser] = useState(null); // State to track which user's card is clicked

  const openModal = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission, e.g., send data to server, update state, etc.
    console.log("Form submitted with data:", {
      temperature: event.target.temperature.value,
      bloodPressure: event.target.bloodPressure.value,
      cholesterol: event.target.cholesterol.value,
      spo2: event.target.spo2.value,
      respiration: event.target.respiration.value,
      pulse: event.target.pulse.value,
    });
    // Close the modal after submission
    closeModal();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Health Data Submission
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-200"
            onClick={() => openModal(user)}
          >
            <img
              className="w-full h-96 object-cover"
              src={user.profileImg}
              alt={user.name}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{user.name}</h2>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> {user.phone}
              </p>
              <p className="text-gray-700">Click to submit health data</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for data submission */}
      {selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <RxCross1 />
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedUser.name}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="temperature"
                  className="block text-sm font-medium text-gray-700"
                >
                  Temperature
                </label>
                <input
                  type="text"
                  id="temperature"
                  name="temperature"
                  required
                  className="mt-1 block w-full border-2 border-green-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="bloodPressure"
                  className="block text-sm font-medium text-gray-700"
                >
                  Blood Pressure
                </label>
                <input
                  type="text"
                  id="bloodPressure"
                  name="bloodPressure"
                  required
                  className="mt-1 block w-full border-2 border-green-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cholesterol"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cholesterol Levels
                </label>
                <input
                  type="text"
                  id="cholesterol"
                  name="cholesterol"
                  required
                  className="mt-1 block w-full border-2 border-green-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="spo2"
                  className="block text-sm font-medium text-gray-700"
                >
                  SpO2
                </label>
                <input
                  type="text"
                  id="spo2"
                  name="spo2"
                  required
                  className="mt-1 block w-full border-2 border-green-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="respiration"
                  className="block text-sm font-medium text-gray-700"
                >
                  Respiration per Minute
                </label>
                <input
                  type="text"
                  id="respiration"
                  name="respiration"
                  required
                  className="mt-1 block w-full border-2 border-green-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="pulse"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pulse
                </label>
                <input
                  type="text"
                  id="pulse"
                  name="pulse"
                  required
                  className="mt-1 block w-full border-2 border-green-400 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataSubmit;
