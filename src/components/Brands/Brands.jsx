import React, { useEffect, useState } from "react";
import AddBrands from "./AddBrands";
import ViewBrands from "./ViewBrands";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

function Brands() {
  const [brands, setBrands] = useState([]);

  // fetching brands from db.json
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
    // <div className="min-h-screen flex bg-gray-300">
    //   <div className="w-1/4 text-white min-h-screen">
    //   <Navbar />
    //   </div>
    //   <div className="w-3/4 pt-3 space-y-6">
    //     <AddBrands fetchBrands={fetchBrands} />
    //     <ViewBrands brands={brands} />
    //   </div>
    // </div>

    <div className="flex h-screen">
      <Navbar />
      {/* Sidebar */}

      <div className="flex-1 flex flex-col">
        <Header />
        {/* Header */}

        <main className="flex-1 overflow-y-auto bg-gray-400">
          <AddBrands fetchBrands={fetchBrands} />
          <ViewBrands brands={brands} />
        </main>
        {/* Main Content */}
      </div>
    </div>
  );
}

export default Brands;
