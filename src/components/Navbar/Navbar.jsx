import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col">
    <div className="p-6 text-lg font-bold text-center">Product Hub</div>
    <nav className="flex-1">
        <ul>
            <li className="p-4 hover:bg-gray-700 cursor-pointer"><Link to="/dashboard">Dashboard</Link></li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer bg-blue-600"><Link to="/dashboard/products">Products</Link></li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Customer</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Category</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Orders</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Coupons</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Chats</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Setting</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Logout</li>
        </ul>
    </nav>
    </aside>
  )
}

export default Navbar