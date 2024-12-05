import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
    const navigate = useNavigate();

    // State to manage product data

    const [product, setProduct] = useState({
      name: "",
      description: "",
      category: "",
      stock: "",
      price: "",
      image: "",
    });

    //   Handle input change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct((prev) => ({...product, [name]: value }));
    }

  //   Handle form Submission

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        alert("Product added successfully!");
        navigate("/dashboard/products");
      } else {
        alert("Failed to add product. Please try again.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">AddProduct</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Product Name:
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Description:
            <textarea
              type="text"
              name="description"
              value={product.description}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Category:
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Stock:
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
