import React, { useRef, useState } from "react";

function AddBrands({ fetchBrands }) {
  const [brand, setBrand] = useState({
    name: "",
    description: "",
    logo: null,
  });
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!brand.name || !brand.description || !brand.logo) {
      setError("Please fill out fields");
      return;
    }

    // Adding data call to add the brand to the database
    try {
      setError(""); // Reset Error
      // Convert the logo file to a Base64 string
      const truncatedLogo = brand.logo.slice(0, 10) + "...(truncated)";

      const newBrand = {
        name: brand.name,
        description: brand.description,
        logo: truncatedLogo, // Use Base64 string as logo
      };
      const response = await fetch("http://localhost:3001/brands", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBrand),
      });

      if (!response.ok) {
        throw new Error("Failed to add brand.");
      }

      alert("Brand added successfully!");
      setBrand({
        name: "",
        description: "",
        logo: "",
      });
      if (fileInputRef.current) fileInputRef.current.value = ""; // Reset file input field
      if (fetchBrands) fetchBrands(); // Refresh the brand List
    } catch (error) {
      setError("Failed to add brands. Please try again!");
      console.error("Error adding brand", error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBrand({ ...brand, logo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 m-5 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add a New Brand</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="brand_name"
          >
            Brand Name
          </label>
          <input
            className="shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight hover:border-blue-500 focus:outline-none focus:ring-blue-500"
            id="brand_name"
            type="text"
            required
            placeholder="Brand Name"
            value={brand.name}
            onChange={(event) =>
              setBrand({ ...brand, name: event.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="brand_description"
          >
            Brand Description
          </label>
          <textarea
            className="shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight hover:border-blue-500 focus:outline-none focus:ring-blue-500 h-32 resize-y"
            id="brand_description"
            placeholder="Brand Description"
            value={brand.description}
            onChange={(event) =>
              setBrand({ ...brand, description: event.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="brand_logo"
          >
            Brand Logo
          </label>
          <input
            className="shadow border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight hover:border-blue-500 focus:outline-none focus:ring-blue-500"
            id="brand_logo"
            type="file"
            placeholder="Brand Logo"
            ref={fileInputRef} // File reference
            onChange={handleFileChange}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-blue-500"
            type="submit"
          >
            Add Brand
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBrands;
