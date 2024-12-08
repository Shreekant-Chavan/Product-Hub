import React, { useEffect, useState } from "react";

function ViewBrands({ brands, fetchBrands, searchQuery }) {

  // Delete a brand from the server
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/brands/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete brand");
      }

      // Updating the parent state directly after deletion
      fetchBrands()
      // setBrands(brands.filter((brand) => brand.id !== id));
      alert("Brand deleted successfully!");
    } catch (error) {
      console.error("Error deleting brand:", error);
      alert("Failed to delete the brand. Please try again.");
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  // Filter brands based on search term
  const filteredBrands = brands.filter((brand) => {
    if (searchQuery) {
      return brand.name.toLowerCase().includes(searchQuery?.toLowerCase());
    } else {
      return brand;
    }
  });

  return (
    <div className="p-6 m-5 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Available Brands</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBrands.map((brand, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded shadow"
          >
            <img
              className="w-full h-48 object-cover mb-4"
              src={brand.logo}
              alt={brand.name}
            />
            <h3 className="mt-2 text-base font-bold text-gray-700">
              {brand.name}
            </h3>
            <p className="mt-2 text-gray-600">{brand.description}</p>
            <button
              className="mt-4 inline-flex justify-center w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
              onClick={() => handleDelete(brand.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewBrands;
