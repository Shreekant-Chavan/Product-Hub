import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import ProductPage from "../../pages/ProductPage";

function Product() {
  return (
    <div className="flex h-screen">
      <Navbar />
      {/* Sidebar */}

      <div className="flex-1 flex flex-col">
        <Header onSearch={() => {}}/>
        {/* Header */}

        <main className="flex-1 overflow-y-auto bg-gray-400">
          <ProductPage />
        </main>
        {/* Main Content */}
      </div>
    </div>
  );
}

export default Product;
