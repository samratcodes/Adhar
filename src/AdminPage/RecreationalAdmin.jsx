import { useState } from "react";
import dbService from "../services/databases";
import FormInput from "../Components/FormInput";

const RecreationalAdmin = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    maxCapacity: "",
    enrolled_user: [],
    date_time: "",
    price: "",
    description: "",
    ActivityImage: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      title,
      location,
      maxCapacity,
      date_time,
      price,
      description,
      ActivityImage,
    } = formData;

    if (
      !title ||
      !location ||
      !maxCapacity ||
      !date_time ||
      !price ||
      !description ||
      !ActivityImage
    ) {
      return false;
    }
    setLoading(true);

    try {
      const ActivityImageId = await dbService.uploadFile(ActivityImage);

      await dbService.createActivity(
        title,
        location,
        maxCapacity,
        date_time,
        price,
        description,
        ActivityImageId.$id
      );
    } catch (error) {
      console.log("Error creating activity:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-6 border rounded-lg shadow-md bg-white"
      >
        <h4 className="font-bold text-3xl mb-8 text-left">
          Add a Recreation Activity
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            type="text"
            name="title"
            value={formData.title}
            handleChange={handleChange}
            placeholder="Title"
            required
          />
          <FormInput
            type="text"
            name="location"
            value={formData.location}
            handleChange={handleChange}
            placeholder="Location"
            required
          />
          <FormInput
            type="text"
            name="maxCapacity"
            value={formData.maxCapacity}
            handleChange={handleChange}
            placeholder="Max Capacity"
            required
          />
          <FormInput
            type="text"
            name="date_time"
            value={formData.date_time}
            handleChange={handleChange}
            placeholder="Date and Time"
            required
          />
          <FormInput
            type="text"
            name="price"
            value={formData.price}
            handleChange={handleChange}
            placeholder="Price"
            required
          />
          <FormInput
            type="text"
            name="description"
            value={formData.description}
            handleChange={handleChange}
            placeholder="Description"
            required
          />
          <FormInput
            type="file"
            name="ActivityImage"
            handleChange={handleChange}
            placeholder="Activity Image"
            required
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecreationalAdmin;
