import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import ProductPage from "../../pages/ProductPage";

function Product() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex h-screen">
      <Navbar />
      {/* Sidebar */}

      <div className="flex-1 flex flex-col">
        <Header onSearch={(query) => setSearchTerm(query)} />
        {/* Header */}

        <main className="flex-1 overflow-y-auto bg-gray-400">
          <ProductPage searchQuery={searchTerm} />
        </main>
        {/* Main Content */}
      </div>
    </div>
  );
}

export default Product;
