import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams(); // Get the product ID from the URL
  const navigate = useNavigate();

  // Initialize product with default values to prevent uncontrolled input issues
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    stock: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    // Fetch product details to edit
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`); // Fetch specific product by ID
        if (response.ok) {
          const data = await response.json();
          setProduct(data); // Update the state with the fetched product
        } else {
          alert("Failed to fetch product details. Please try again.");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProducts(); // Fetch only if the `id` exists
  }, [id]);

  // Handle input changes for the form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission for updating the product
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        alert("Product updated successfully!");
        navigate("/products"); // Redirect to the products page after successful update
      } else {
        alert("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Handle product deletion
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          alert("Product deleted successfully!");
          navigate("/products"); // Redirect to the products page after successful deletion
        } else {
          alert("Failed to delete product");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">EditProduct</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Product Name:
          </label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Description:
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            rows="3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Category:
          </label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Stock:
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Price:
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Image URL:
            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save
          </button>
          <button
            onClick={handleDelete}
            className="px-6 py-2 ml-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
