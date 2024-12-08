import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

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
function ProductPage() {
  const outletContext = useOutletContext() || {}; // Fallback to an empty object
  const { searchTerm = "" } = outletContext; // Provide default value
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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

  // Filter products based on Search Term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-gray-400 w-full">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Products</h1>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg"
            onClick={() => navigate("/products/add-product")}
          >
            + Add Product
          </button>
        </div>
        {filteredProducts.length > 0 ? (
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
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Edit / Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
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
                    <td className="px-6 py-3 text-center">
                      {product.category}
                    </td>
                    <td className="px-6 py-3 text-center">{product.stock}</td>
                    <td className="px-6 py-3 text-center">{product.price}</td>
                    <td className="px-6 py-3 text-center">
                      <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        onClick={() =>
                          navigate(`/products/edit-product/${product.id}`)
                        }
                      >
                        Edit
                      </button>{" "}
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        onClick={() =>
                          navigate(`/products/edit-product/${product.id}`)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
