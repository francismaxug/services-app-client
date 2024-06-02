import React, { useState } from "react";

function EditProfileForm() {
  // Initial state for form fields
  const [formData, setFormData] = useState({
    firstName: "Francisco",
    lastName: "Sappato",
    country: "Ghana",
    city: "Accra",
    email: "francssapp@example.com",
    address: "Legon, A444",
    phoneNumber: "55-222-5960",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Save changes
  const handleSave = () => {
    // You can send the formData to your backend or perform any other action here
    alert("Changes saved!");
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:ring-primary-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:ring-primary-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:ring-primary-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:ring-primary-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:ring-primary-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:ring-primary-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:ring-primary-500"
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            onClick={handleSave}
            className="bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfileForm;