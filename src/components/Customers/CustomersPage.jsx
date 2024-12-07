import React, { useEffect, useState } from "react";

function CustomersPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customers from db.json
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error("Error fetching customer:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-400">
      {/* Header */}
      <header className="p-4">
        <h1 className="text-xl font-bold">Customers</h1>
      </header>

      {/* Customer List */}
      <div className="max-w-6xl mx-auto p-8 bg-gray-100 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Registered Users</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Password</th>
            </tr>
          </thead>
          <tbody>
            {/* Customer Data */}
            {customers.map((customer, index) => (
              <tr key={index} className="hover:bg-gray-100 text-center">
                <td className="border border-gray-300 p-2">{customer.name}</td>
                <td className="border border-gray-300 p-2">{customer.email}</td>
                <td className="border border-gray-300 p-2">
                  {customer.password}
                </td>
              </tr>
            ))}
            {/* Add more customer data */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomersPage;
