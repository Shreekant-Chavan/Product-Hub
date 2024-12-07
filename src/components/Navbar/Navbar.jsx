import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col h-screen">
      <div className="p-6 text-lg font-bold text-center">Product Hub</div>
      <nav className="flex-1">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block p-4 hover:bg-gray-700 cursor-pointer ${
                  isActive ? "bg-blue-600" : "bg-gray-900"
                }`
              }
            >
              {" "}
              Dashboard{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `block p-4 hover:bg-gray-700 cursor-pointer ${
                  isActive ? "bg-blue-600 w-full" : "bg-gray-900"
                }`
              }
            >
              {" "}
              Products{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/brands"
              className={({ isActive }) =>
                `block p-4 hover:bg-gray-700 cursor-pointer ${
                  isActive ? "bg-blue-600 w-full" : "bg-gray-900"
                }`
              }
            >
              {" "}
              Brands{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/customers"
              className={({ isActive }) =>
                `block p-4 hover:bg-gray-700 cursor-pointer ${
                  isActive ? "bg-blue-600 w-full" : "bg-gray-900"
                }`
              }
            >
              {" "}
              Customers{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `block p-4 hover:bg-gray-700 cursor-pointer ${
                  isActive ? "bg-blue-600 w-full" : "bg-gray-900"
                }`
              }
            >
              {" "}
              Profile{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                `block p-4 hover:bg-gray-700 cursor-pointer ${
                  isActive ? "bg-blue-600 w-full p-4" : "bg-gray-900"
                }`
              }
            >
              {" "}
              Logout{" "}
            </NavLink>
          </li>
          {/* <li className="p-4 hover:bg-gray-700 cursor-pointer">Coupons</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Chats</li> */}
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
