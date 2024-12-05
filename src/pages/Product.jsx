import React, { useState, useEffect } from "react";

// const products = [
//   {
//     id: 1,
//     name: "Air Force 1",
//     brand: "Nike",
//     category: "Shoes",
//     stock: 220,
//     price: "$122.27",
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     id: 2,
//     name: "Sportswear Heritage86",
//     brand: "Nike",
//     category: "Caps",
//     stock: 999,
//     price: "$15.95",
//     image: "https://via.placeholder.com/50",
//   },
// ];
function Product() {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Checks for is User logged in or not
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    setIsLoggedIn(!loggedInUser); // If there's a logged-in User, setting to true
  }, []);

  // Fetching products from db.json
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3001/products");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const addProducts = async (newProduct) => {
    const response = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const createProduct = await response.json();
    setProducts((prev) => [...prev, createProduct]);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Products</h1>
        {isLoggedIn && (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={() =>
              addProducts({
                id: Date.now(),
                name: "New Product",
                category: "Unknown",
                stock: 100,
                price: "599.00",
                image: "https://via.placeholder.com/50",
              })
            }
          >
            + Add Product
          </button>
        )}
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              {/* <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Brand
              </th> */}
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="px-6 py-3 text-center flex items-center justify-start">
                  <img
                    className="pr-2 w=12 h=12 object-cover rounded"
                    src={product.image}
                    alt={product.name}
                  />{" "}
                  <span>{product.name}</span>
                </td>
                {/* <td className="px-6 py-3 text-center">{product.brand}</td> */}
                <td className="px-6 py-3 text-center">{product.category}</td>
                <td className="px-6 py-3 text-center">{product.stock}</td>
                <td className="px-6 py-3 text-center">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;
