import React from "react";
import {BellIcon} from "@heroicons/react/outline"
import Product from "../../pages/Product";
import Navbar from "../Navbar/Navbar";

function Dashboard() {
  return <div className="flex h-screen">
    {/* Sidebar */}
    <Navbar/>
    {/* Main Content */}
    <div className="flex-1 bg-gray-100">
        <header className="bg-white shadow p-4 flex justify-between items-center">
            <input type="text" placeholder="Search something here" className="border rounded-lg p-2 w-1/3 hover:border-gray-500" />
            <div className="flex items-center space-x-4 pr-3">
                <span className="relative">
                <BellIcon className="h-6 w-6 text-gray-600" />
                <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs rounded-full px-1">3</span>
                </span>
                <img src="https://akhabarfactory.in/wp-content/uploads/2024/06/Screenshot-2024-06-06-194802.png" alt="User Profile" className="w-10 h-10 rounded-full"/>
            </div>
        </header>
        <main className="p-6"><Product /></main>
    </div>
  </div>;
}

export default Dashboard;
