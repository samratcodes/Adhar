/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import dbService from "../services/databases";

export default function Recreational() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch activities on first page load
  useEffect(() => {
    dbService
      .getAllActivities()
      .then((data) => {
        setActivities(data.documents); // Assuming data is an array of activities
        setLoading(false);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching activities:", error);
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures it runs only once on mount

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4">Error: {error.message}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Recreational Activities
      </h1>
      <div className="flex justify-center items-center gap-5 ">
        {activities.length === 0 ? (
          <div className="text-center">No activities found.</div>
        ) : (
          activities.map((activity) => (
            <ActivityCard key={activity.$id} activity={activity} />
          ))
        )}
      </div>
    </div>
  );
}

// Functional component for rendering each activity card
function ActivityCard({ activity }) {
  console.log(activity);
  const enrollInActivity = () => {
    // Logic to handle enrollment, e.g., update database, show success message, etc.
    console.log(`Enrolling in ${activity.title}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-96">
      <img
        className="w-full h-48 object-cover"
        src={dbService.getFilePreview(activity.ActivityImage)}
        alt={activity.title}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{activity.title}</h2>
        <p className="text-gray-700 mb-2">
          <strong>Location:</strong> {activity.location}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Max Capacity:</strong> {activity.maxCapacity}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Price:</strong> {activity.price}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Description:</strong> {activity.description}
        </p>

        <p className="text-gray-700 mb-2">
          <strong>Enrolled User:</strong> {activity.enrolled_user.length}
        </p>

        <p className="text-gray-700 mb-2">
          <strong>Date & Time:</strong> {activity.date_time}
        </p>

        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={enrollInActivity}
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}
