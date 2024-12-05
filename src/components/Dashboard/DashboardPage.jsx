import React from 'react'
import { useNavigate } from 'react-router-dom'

function DashboardPage() {

    const navigate = useNavigate()

  return (
    <div className='min-h-screen bg-gray-100'>
        {/*Header */}
        <header className='p-4 '>
            <h1 className="text-xl font-bold ">Dashboard</h1>
        </header>
        {/* Content */}
        <div className="max-w-6xl mx-auto p-8">
            <h2 className="text-2xl font-bold mb-6">Welcome to the Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Products */}
                <div className="p-4 bg-pink-500 shadow-md rounded-lg cursor-pointer hover:shadow-lg transition" onClick={() => navigate("/products")}>
                    <h3 className="text-lg font-bold mb-2 ">Products</h3>
                    <p className="text-gray-300">Manage your products and inventory.</p>
                </div>
                 {/* Brands */}
                 <div  className="p-4 bg-blue-500 shadow-md rounded-lg cursor-pointer hover:shadow-lg transition"  onClick={() => navigate("/brands")}>
                 <h3 className="text-lg font-bold mb-2">Brands</h3>
                 <p className="text-gray-300">View and manage Brands.</p>
                 </div>
                 {/* Category */}
                 <div  className="p-4 bg-orange-500 shadow-md rounded-lg cursor-pointer hover:shadow-lg transition"  onClick={() => navigate("/category")}>
                 <h3 className="text-lg font-bold mb-2">Category</h3>
                 <p className="text-gray-300">View What are different category.</p>
                 </div>
                 {/* Profile */}
                 <div  className="p-4 bg-green-500 shadow-md rounded-lg cursor-pointer hover:shadow-lg transition"  onClick={() => navigate("/profile")}>
                 <h3 className="text-lg font-bold mb-2">Profile</h3>
                 <p className="text-gray-300">Check your profile.</p>
                 </div>
                 {/* Logout */}
                 <div  className="p-4 bg-red-500 shadow-md rounded-lg cursor-pointer hover:shadow-lg transition"  onClick={() => navigate("/logout")}>
                 <h3 className="text-lg font-bold mb-2">Logout</h3>
                 <p className="text-gray-300">Sign out of your account securely.</p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardPage