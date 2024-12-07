import React, { useEffect, useState } from "react";

function ViewBrands() {
  const [brands, setBrands] = useState([]);

  const fetchBrands = async () => {
    try {
      const respone = await fetch("http://localhost:3001/brands");
      const data = await respone.json();
      setBrands(data);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <div className="p-6 m-5 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Available Brands</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((brand, index) => (
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewBrands;
