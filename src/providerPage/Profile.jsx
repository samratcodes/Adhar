import { useState } from "react";
import FormInput from "../Components/FormInput";
import dbService from "../services/databases";

export default function Profile() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    experience: "",
    qualification: "",
    profileImage: null,
    certificateImage: null,
    licenseImage: null,
    number: "",
    location: "",
    verified: false,
    type: "", // New state for type selection
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

  const handletypeChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, type: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      fullName,
      email,
      experience,
      qualification,
      profileImage,
      certificateImage,
      licenseImage,
      number,
      location,
      verified,
      type,
    } = formData;

    if (
      !fullName ||
      !email ||
      !experience ||
      !qualification ||
      !number ||
      !location ||
      !certificateImage ||
      !profileImage ||
      !licenseImage ||
      !type // Ensure type is selected
    ) {
      return;
    }

    setLoading(true);

    try {
      const [certificateImageId, profileImageId, licenseImageId] =
        await Promise.all([
          dbService.uploadFile(certificateImage),
          dbService.uploadFile(profileImage),
          dbService.uploadFile(licenseImage),
        ]);

      await dbService.createDocument(
        fullName,
        email,
        location,
        certificateImageId.$id,
        profileImageId.$id,
        licenseImageId.$id,
        verified,
        number,
        qualification,
        experience,
        type 
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md mt-10"
      >
        <h4 className="font-bold text-3xl text-center mb-8">
          Submit your Details
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            type="text"
            name="fullName"
            value={formData.fullName}
            handleChange={handleChange}
            placeholder="Full Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={formData.email}
            handleChange={handleChange}
            placeholder="Email"
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
            name="qualification"
            value={formData.qualification}
            handleChange={handleChange}
            placeholder="Qualification"
            required
          />
          <FormInput
            type="text"
            name="experience"
            value={formData.experience}
            handleChange={handleChange}
            placeholder="Experience"
            required
          />
          <FormInput
            type="text"
            name="number"
            value={formData.number}
            handleChange={handleChange}
            placeholder="Number"
            required
          />
          <FormInput
            type="file"
            name="certificateImage"
            handleChange={handleChange}
            placeholder="Certificate Image"
            required
          />
          <FormInput
            type="file"
            name="profileImage"
            handleChange={handleChange}
            placeholder="Profile Image"
            required
          />
          <FormInput
            type="file"
            name="licenseImage"
            handleChange={handleChange}
            placeholder="License Image"
            required
          />
          <div className="md:col-span-2">
            <label htmlFor="role" className="block text-lg font-medium mb-2">
              Role
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handletypeChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              required
            >
              <option value="">Select type</option>
              <option value="care_taker">Care Taker</option>
              <option value="nurse">Nurse</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
