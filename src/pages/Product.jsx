import React from "react";

const products = [
  {
    id: 1,
    name: "Air Force 1",
    brand: "Nike",
    category: "Shoes",
    stock: 220,
    price: "$122.27",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Sportswear Heritage86",
    brand: "Nike",
    category: "Caps",
    stock: 999,
    price: "$15.95",
    image: "https://via.placeholder.com/50",
  },
];
function Product() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Products</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          + Add Product
        </button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full text-left">
            <thead>
                <tr>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Brand
                    </th>
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
                        <td className="px-6 py-3 text-center flex items-center justify-start space-x-4" > <img className="pr-2 w=12 h=12 object-cover rounded" src={product.image} alt={product.name} /> {product.name}</td>
                        <td className="px-6 py-3 text-center">{product.brand}</td>
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
